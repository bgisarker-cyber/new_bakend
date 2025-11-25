"use client";
import { useQuery, useQueryClient, QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Alert,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Refresh as RefreshIcon,
  Search as SearchIcon,
  Event as EventIcon,
  CheckCircle,
  Add as AddIcon,
} from "@mui/icons-material";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

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
  bank:string;
  location: string;
  problem_type: string;
  problem_details: string;
  instructions: string;
  priority: "low" | "medium" | "high";
  status: "open" | "in_progress" | "completed";
  assigned_to_name: string;
  create_time: string;
  update_time: string;
};

type Update = {
  update_time: string | number | Date;
  id: number;
  status: string;
  update_text: string;
  created_at: string;
  assigned_to_name: string;
};

/* ---------- query client ---------- */
const queryClient = new QueryClient();

/* ---------- main component ---------- */
function SuperCallsBoard() {
  const router = useRouter();
  const [selected, setSelected] = useState<Task | null>(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "open" | "in_progress" | "completed">("all");
  const [assigneeFilter, setAssigneeFilter] = useState<string>("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  /* ---------- data ---------- */
  const { data = [], isLoading, refetch } = useQuery<Task[]>({
    queryKey: ["all-tasks"],
    queryFn: () => axios.get("/tasks/all").then((r) => r.data),
  });

  const { data: timeline = [] } = useQuery<Update[]>({
    queryKey: ["timeline", selected?.id],
    queryFn: () => axios.get(`/tasks/${selected?.id}/timeline`).then((r) => r.data),
    enabled: !!selected,
  });

  /* ---------- derived options ---------- */
  const assigneeOptions = useMemo(() => {
    const names = Array.from(new Set(data.map((d) => d.assigned_to_name).filter(Boolean)));
    return ["all", ...names];
  }, [data]);

  /* ---------- filters ---------- */
  const filtered = useMemo(() => {
    let base = data
      .filter((t) => (filterStatus === "all" ? true : t.status === filterStatus))
      .filter((t) =>
        `${t.title} ${t.merchant_name} ${t.location} ${t.problem_type} ${t.assigned_to_name}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    if (assigneeFilter !== "all") base = base.filter((t) => t.assigned_to_name === assigneeFilter);
    if (dateFrom) base = base.filter((t) => new Date(t.create_time) >= new Date(dateFrom));
    if (dateTo) base = base.filter((t) => new Date(t.create_time) <= new Date(dateTo));
    return base;
  }, [data, filterStatus, search, assigneeFilter, dateFrom, dateTo]);

  /* ---------- mutations ---------- */
  const completeMut = useMutation({
    mutationFn: (id: number) => axios.post(`/tasks/my/${id}/complete`, { note: "" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-tasks"] });
      queryClient.invalidateQueries({ queryKey: ["timeline", selected?.id] });
    },
  });

  /* ---------- helpers ---------- */
  const chipColor = (s: Task["status"]) => (s === "completed" ? "success" : s === "in_progress" ? "info" : "default");
  const priorityColor = (p: Task["priority"]) => (p === "high" ? "error" : p === "medium" ? "warning" : "success");

  /* ---------- constants ---------- */
  const LEFT_PANE_WIDTH = 380;

  /* ---------- render ---------- */
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* ---------- top bar ---------- */}
      <AppBar position="static" color="transparent" elevation={1}>
        <Toolbar sx={{ px: 3 }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => router.push("/task-manager/create-task")}
            sx={{ mr: 3 }}
          >
            Add Call
          </Button>

          {/* ---------- all filters on one line ---------- */}
          <Box sx={{ flexGrow: 1, display: "flex", gap: 2, alignItems: "center" }}>
            <TextField
              size="small"
              placeholder="Search…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }}
              sx={{ minWidth: 220 }}
            />
            <FormControl size="small" sx={{ minWidth: 140 }}>
              <InputLabel>Status</InputLabel>
              <Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as any)}>
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="open">Open</MenuItem>
                <MenuItem value="in_progress">In Progress</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel>Assignee</InputLabel>
              <Select value={assigneeFilter} onChange={(e) => setAssigneeFilter(e.target.value)}>
                {assigneeOptions.map((name) => (
                  <MenuItem key={name} value={name}>{name === "all" ? "All assignees" : name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              size="small"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              sx={{ width: 140 }}
            />
            <TextField
              size="small"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              sx={{ width: 140 }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {filtered.length} calls
            </Typography>
            <IconButton onClick={() => refetch()}>
              {isLoading ? <CircularProgress size={20} /> : <RefreshIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ---------- content ---------- */}
      <Box sx={{ flexGrow: 1, display: "flex", overflow: "hidden" }}>
        {/* ---------- fixed left list ---------- */}
        <Box
          sx={{
            width: LEFT_PANE_WIDTH,
            borderRight: 1,
            borderColor: "divider",
            height: "100%",
            overflowY: "auto",
            p: 2,
          }}
        >
          <Stack spacing={2}>
            {filtered.map((t) => (
              <Card
                key={t.id}
                onClick={() => setSelected(t)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 3,
                  border: selected?.id === t.id ? 2 : 0,
                  borderColor: "primary.main",
                  transition: "all .2s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <Chip label={t.status} color={chipColor(t.status)} size="small" />
                    <Chip label={t.priority} color={priorityColor(t.priority)} size="small" />
                    <Chip label={t.bank}  size="medium" />
                  </Stack>
                  <Typography variant="subtitle2" noWrap title={t.title}>
                    {t.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Merchant: {t.merchant_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: <strong>{t.location}</strong>
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Assigned to: <strong>{t.assigned_to_name}</strong>
                    
                  </Typography>
                  <Typography variant="caption" display="block" color="text.secondary" mt={0.5}>
                    {new Date(t.create_time).toLocaleString([], { dateStyle: "short", timeStyle: "short" })}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* ---------- scrollable right detail ---------- */}
        <Box sx={{ flexGrow: 1, height: "100%", overflowY: "auto", p: 3 }}>
          {selected ? (
            <Stack spacing={3}>
              {/* header card */}
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                  <Typography variant="h5" fontWeight={600}>
                    Call #{selected.id} – {selected.title}
                  </Typography>
                  {selected.status !== "completed" && (
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<CheckCircle />}
                      onClick={() => completeMut.mutate(selected.id)}
                      disabled={completeMut.isPending}
                    >
                      {completeMut.isPending ? <CircularProgress size={16} /> : "Mark Complete"}
                    </Button>
                  )}
                </Stack>

                <Grid container spacing={2} alignItems="center">
                  <Grid item><Chip label={selected.status} color={chipColor(selected.status)} /></Grid>
                  <Grid item><Chip label={selected.priority} color={priorityColor(selected.priority)} /></Grid>
                  <Grid item><Chip icon={<EventIcon />} label={new Date(selected.create_time).toLocaleString([], { dateStyle: "short", timeStyle: "short" })} /></Grid>
                  <Grid item><Chip label={`Assigned: ${selected.assigned_to_name}`} /></Grid>
                </Grid>
              </Paper>

              {/* two-column details */}
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                    <Typography variant="h6" gutterBottom>Merchant Information</Typography>
                    <Stack spacing={1}>
                      <Box><strong>Name:</strong> {selected.merchant_name}</Box>
                      <Box><strong>Phone:</strong> {selected.merchant_phone}</Box>
                      <Box><strong>Location:</strong> {selected.location}</Box>
                      <Box><strong>Problem Type:</strong> {selected.problem_type}</Box>
                    </Stack>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                    <Typography variant="h6" gutterBottom>Task Details</Typography>
                    <Stack spacing={1}>
                      <Box><strong>Details:</strong> {selected.problem_details}</Box>
                      <Divider sx={{ my: 1 }} />
                      <Box><strong>Instructions:</strong> {selected.instructions}</Box>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>

              {/* timeline */}
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>Update Timeline</Typography>
                {timeline.length === 0 ? (
                  <Alert severity="info">No updates yet</Alert>
                ) : (
                  <Timeline position="right">
                    {timeline.map((u) => (
                      <TimelineItem key={u.id}>
                        <TimelineSeparator>
                          <TimelineDot color={u.status === "completed" ? "success" : u.status === "in_progress" ? "info" : "grey"} />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography variant="subtitle2">{u.status.toUpperCase()}</Typography>
                          <Typography variant="body2">{u.update_text || "—"}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            <EventIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                            {new Date(u.update_time).toLocaleString([], { dateStyle: "short", timeStyle: "short" })}
                          </Typography>
                          <Typography variant="caption" display="block" color="text.secondary">
                            by <strong>{u.assigned_to_name}</strong>
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                )}
              </Paper>
            </Stack>
          ) : (
            <Box display="flex" alignItems="center" justifyContent="center" height="60vh">
              <Typography variant="h6" color="text.secondary">
                Select a call on the left to view details
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default function SuperCallsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuperCallsBoard />
    </QueryClientProvider>
  );
}