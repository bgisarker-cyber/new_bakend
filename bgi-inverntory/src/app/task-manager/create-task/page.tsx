// src/app/task-manager/page.tsx
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Alert,
  Autocomplete,
} from "@mui/material";
import { Visibility as ViewIcon, Assignment as AssignIcon } from "@mui/icons-material";

/* ---------- config ---------- */
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
axios.interceptors.request.use((cfg) => {
  const t = localStorage.getItem("access_token");
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});

/* ---------- types ---------- */
type User = { id: number; username: string; role: string };
type FormInputs = {
  title: string;
  merchant_name: string;
  merchant_phone: string;
  bank: string;
  location: string;
  problem_type: string;
  problem_details: string;
  instructions: string;
  task_type: "install" | "repair" | "maintenance";
  assigned_to: number | null;
  priority: "low" | "medium" | "high";
};

const PROBLEM_CHOICES = [
  "Battery down",
  "Payment not working",
  "Network off",
  "Display not responsive",
  "App change required",
  "Firmware change",
  "Other",
];

/* ---------- query ---------- */
const queryClient = new QueryClient();
function useAssignableUsers() {
  return useQuery({
    queryKey: ["assignable-users"],
    queryFn: async () => (await axios.get<User[]>("/auth/userlist?role=support,admin")).data,
    staleTime: 5 * 60 * 1000,
  });
}

/* ---------- form ---------- */
function CreateCallForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<FormInputs>({
    defaultValues: { priority: "medium", task_type: "repair", problem_type: "Other" },
  });

  const { data: users = [], isLoading: loadingUsers } = useAssignableUsers();

  const onSubmit = async (data: FormInputs) => {
    if (!data.assigned_to) return setMsg({ type: "error", text: "Pick an assignee" });
    setLoading(true); setMsg(null);
    try {
      await axios.post("/tasks/create", { ...data, assigned_to: data.assigned_to, assigned_by: Number(localStorage.getItem("userId") || 1) });
      setMsg({ type: "success", text: "Call assigned" }); reset();
    } catch (e: any) {
      setMsg({ type: "error", text: e.response?.data?.detail || "Network error" });
    } finally { setLoading(false); }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", py: 3 }}>
      {/* top bar */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight={600}>Assign A Call</Typography>
        <Button
          variant="outlined"
          size="small"
          startIcon={<ViewIcon />}
          onClick={() => router.push("/task-manager/task-call")}
        >
          View Calls
        </Button>
      </Stack>

      {msg && <Alert severity={msg.type} sx={{ mb: 2 }}>{msg.text}</Alert>}

      {/* compact form */}
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={1}>
              <TextField size="small" label="Title" {...register("title", { required: "Required" })} error={!!errors.title} helperText={errors.title?.message} />
              <TextField size="small" label="Merchant Name" {...register("merchant_name", { required: "Required" })} error={!!errors.merchant_name} helperText={errors.merchant_name?.message} />
              <TextField size="small" label="Merchant Phone" {...register("merchant_phone", { required: "Required" })} error={!!errors.merchant_phone} helperText={errors.merchant_phone?.message} />
               <TextField size="small" select label="Bank" {...register("bank")}>
                <MenuItem value="CityBank">CityBank</MenuItem>
                <MenuItem value="PubaliBank">PubaliBank</MenuItem>
                <MenuItem value="IslamiBank">IslamiBank</MenuItem>
                <MenuItem value="Mutual Trust Bank">Mutual Trust Bank</MenuItem>

                <MenuItem value="Standard Bank">Standard Bank</MenuItem>

              </TextField>
              <TextField size="small" label="Location" {...register("location", { required: "Required" })} error={!!errors.location} helperText={errors.location?.message} />

              <TextField size="small" select label="Problem Type" {...register("problem_type")}>
                {PROBLEM_CHOICES.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
              </TextField>
              <TextField size="small" label="Problem Details" multiline rows={2} {...register("problem_details")} />
              <TextField size="small" label="Instructions" multiline rows={2} {...register("instructions")} />

              <TextField size="small" select label="Task Type" {...register("task_type")}>
                <MenuItem value="install">Install</MenuItem>
                <MenuItem value="repair">Repair</MenuItem>
                <MenuItem value="maintenance">Maintenance</MenuItem>
              </TextField>

              <TextField size="small" select label="Priority" {...register("priority")}>
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </TextField>

              {/* assignee */}
              <Controller
                name="assigned_to"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    size="small"
                    options={users}
                    getOptionLabel={(u) => `${u.username} (${u.role})`}
                    isOptionEqualToValue={(opt, val) => opt.id === val.id}
                    value={users.find((u) => u.id === field.value) || null}
                    onChange={(_, newVal) => field.onChange(newVal?.id ?? null)}
                    renderInput={(params) => <TextField {...params} label="Assign To" required error={!!errors.assigned_to} helperText={errors.assigned_to && "Required"} />}
                  />
                )}
              />

              <Button
                type="submit"
                variant="contained"
                size="small"
                disabled={loading}
                startIcon={<AssignIcon />}
                sx={{ borderRadius: 3 }}
              >
                Assign Call
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default function TaskManagerPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <CreateCallForm />
    </QueryClientProvider>
  );
}