"use client";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  IconButton,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  CircularProgress,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { Refresh as RefreshIcon, Edit as EditIcon } from "@mui/icons-material";
import { useState } from "react";

/* ---------- axios ---------- */
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
axios.interceptors.request.use((cfg) => {
  const t = localStorage.getItem("access_token");
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});

/* ---------- types ---------- */
type Task = {
  id: number;
  title: string;
  merchant_name: string;
  merchant_phone: string;
  location: string;
  problem_type: string;
  problem_details: string;
  instructions: string;
  priority: "low" | "medium" | "high";
  status: "open" | "in_progress" | "completed";
  create_time: string;
};

/* ---------- react-query ---------- */
const queryClient = new QueryClient();

/* ---------- main component ---------- */
function MyTasksGrid() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Task | null>(null);
  const [status, setStatus] = useState<"open" | "in_progress" | "completed">("open");
  const [note, setNote] = useState("");

  const { data = [], isLoading, refetch } = useQuery<Task[]>({
    queryKey: ["my-tasks"],
    queryFn: () => axios.get("/tasks/my").then((r) => r.data),
  });

  const mutate = useMutation({
    mutationFn: () =>
      axios.put(`/tasks/my/${selected!.id}/status`, {
        status_val: status,
        note,
      }),
    onSuccess: () => {
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["my-tasks"] });
    },
  });

  const chipColor = (s: Task["status"]) =>
    s === "completed" ? "success" : s === "in_progress" ? "info" : "default";

  const priorityColor = (p: Task["priority"]) =>
    p === "high" ? "error" : p === "medium" ? "warning" : "success";

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* ---------- top bar ---------- */}
      <Toolbar disableGutters sx={{ mb: 3, justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight={600}>
          My Tasks
        </Typography>
        <Tooltip title="Refresh">
          <IconButton onClick={() => refetch()}>{isLoading ? <CircularProgress size={20} /> : <RefreshIcon />}</IconButton>
        </Tooltip>
      </Toolbar>

      {/* ---------- cards grid ---------- */}
      <Grid container spacing={3}>
        {data.map((t) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={t.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <Typography variant="h6" noWrap title={t.title}>
                    {t.title}
                  </Typography>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip label={t.status} color={chipColor(t.status)} size="small" />
                    <Chip label={t.priority} color={priorityColor(t.priority)} size="small" />
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    <strong>Merchant:</strong> {t.merchant_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Contact:</strong> {t.merchant_phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Location:</strong> {t.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Problem:</strong> {t.problem_type}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    <strong>Detaitls</strong> {t.problem_details}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Instructions</strong> {t.instructions}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    Created: {new Date(t.create_time).toLocaleString()}
                  </Typography>
                </Stack>
              </CardContent>

              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={() => {
                    setSelected(t);
                    setStatus(t.status);
                    setNote("");
                    setOpen(true);
                  }}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ---------- empty state ---------- */}
      {!isLoading && data.length === 0 && (
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 8 }}>
          No tasks assigned to you 🎉
        </Typography>
      )}

      {/* ---------- update dialog ---------- */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Update Task #{selected?.id}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField select label="Status" value={status} onChange={(e) => setStatus(e.target.value as any)} fullWidth>
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="in_progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </TextField>
            <TextField
              label="Note (optional)"
              multiline
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => mutate.mutate()}
            disabled={mutate.isPending}
            variant="contained"
          >
            {mutate.isPending ? <CircularProgress size={20} /> : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default function MyTasksPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyTasksGrid />
    </QueryClientProvider>
  );
}