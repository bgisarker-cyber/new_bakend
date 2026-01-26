"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { QueryClient, QueryClientProvider, useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { Save as SaveIcon } from "@mui/icons-material"; // FIXED: Removed AssignIcon

/* ---------- config ---------- */
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
axios.interceptors.request.use((cfg) => {
  const t = localStorage.getItem("access_token");
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});

/* ---------- types ---------- */
type User = { id: number; username: string; role: string };
type Bank = { id: number; name: string };
type ProblemType = { id: number; name: string };
type Task = {
  id: number;
  bank: string;
  merchant_name?: string;
  tid: string;
  mid: string;
  address?: string;
  task_type: string;
  phone?: string;
  operator?: string;
  problem_type?: string;
  assigned_to: number;
  comment?: string;
  sim_serial?: string;
};

type FormInputs = {
  bank: string;
  merchant_name?: string;
  tid: string;
  mid: string;
  address?: string;
  task_type: "New Install" | "Replacement" | "Call";
  phone?: string;
  operator?: string;
  problem_type?: string;
  assigned_to: number | null;
  comment?: string;
  sim_serial?: string;
};

// Static operator options
const OPERATOR_OPTIONS = ["ROBI", "GRAMEENPHONE", "BANGLALINK"];

/* ---------- query hooks ---------- */
const queryClient = new QueryClient();

function useAssignableUsers() {
  return useQuery({
    queryKey: ["assignable-users"],
    queryFn: async () => (await axios.get<User[]>("/auth/userlist?role=support,admin")).data,
    staleTime: 5 * 60 * 1000,
  });
}

function useBanks() {
  return useQuery({
    queryKey: ["banks"],
    queryFn: async () => (await axios.get<Bank[]>("/tasks/banks")).data,
    staleTime: 5 * 60 * 1000,
  });
}

function useProblemTypes() {
  return useQuery({
    queryKey: ["problem-types"],
    queryFn: async () => (await axios.get<ProblemType[]>("/tasks/problem-types")).data,
    staleTime: 5 * 60 * 1000,
  });
}

/* ---------- form component ---------- */
function TaskForm({ taskId }: { taskId?: string }) {
  const router = useRouter();
  const isEditMode = Boolean(taskId);
  
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: { 
      task_type: "Call", 
      assigned_to: null, 
      address: "", 
      phone: "", 
      operator: "",
      problem_type: "",
      comment: "",
      tid: "",
      mid: "",
      sim_serial: "",
    },
  });

  const { data: users = [], isLoading: loadingUsers } = useAssignableUsers();
  const { data: banks = [], isLoading: loadingBanks } = useBanks();
  const { data: problemTypes = [], isLoading: loadingProblemTypes } = useProblemTypes();

  // Fetch task data if in edit mode
  const { isLoading: loadingTask } = useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      if (!taskId) return null;
      const response = await axios.get<Task>(`/tasks/${taskId}`);
      const data = response.data;
      
      // Pre-fill form
      Object.entries(data).forEach(([key, value]) => {
        setValue(key as keyof FormInputs, value as any, { shouldValidate: true });
      });
      
      return data;
    },
    enabled: isEditMode,
    staleTime: 0,
  });

  const selectedTaskType = watch("task_type");
  const isCallTask = selectedTaskType === "Call";

  const mutation = useMutation({
    mutationFn: async (data: FormInputs) => {
      const payload = {
        ...data,
        assigned_to: data.assigned_to,
        assigned_by: Number(localStorage.getItem("userId") || 1),
        problem_type: isCallTask ? data.problem_type : null,
      };
      
      if (isEditMode) {
        return axios.put(`/tasks/${taskId}`, payload);
      } else {
        return axios.post("/tasks/create", payload);
      }
    },
    onSuccess: () => {
      setMsg({ 
        type: "success", 
        text: isEditMode ? "Task updated successfully!" : "Task created successfully!" 
      });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      if (!isEditMode) {
        reset({ 
          task_type: "Call", 
          assigned_to: null, 
          address: "", 
          phone: "", 
          operator: "",
          problem_type: "",
          comment: "",
          tid: "",
          mid: "",
          sim_serial: "",
        });
      }
    },
    onError: (error: any) => {
      setMsg({ 
        type: "error", 
        text: error.response?.data?.detail || "Network error" 
      });
    },
  });

  const onSubmit = async (data: FormInputs) => {
    // Validate field lengths on frontend too
    if (data.tid.length !== 8) {
      setMsg({ type: "error", text: "TID must be exactly 8 characters" });
      return;
    }
    if (data.mid.length !== 15) {
      setMsg({ type: "error", text: "MID must be exactly 15 characters" });
      return;
    }
    if (data.sim_serial && data.sim_serial.length > 30) {
      setMsg({ type: "error", text: "SIM Serial must be 30 characters or less" });
      return;
    }
    
    if (!data.assigned_to) {
      setMsg({ type: "error", text: "Please select an assignee" });
      return;
    }
    if (data.task_type === "Call" && !data.problem_type) {
      setMsg({ type: "error", text: "Problem type is required for Call tasks" });
      return;
    }
    
    setMsg(null);
    mutation.mutate(data);
  };

  const isLoading = loadingUsers || loadingBanks || loadingProblemTypes || loadingTask || mutation.isPending;

  if (isLoading && isEditMode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5]">
        <div className="bg-[#f0f2f5] rounded-2xl p-8 shadow-[10px_10px_18px_rgba(0,0,0,0.08),-8px_-8px_16px_#ffffff]">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-700 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-3 sm:p-4 md:p-5">
      <div className="max-w-5xl mx-auto">
        {/* Header - Centered, no background box, no button */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            {isEditMode ? "Edit Task" : "Create New (POS CALL)"}
          </h1>
        </div>

        {msg && (
          <div className={`mb-4 p-3 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] ${
            msg.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          } font-semibold`}>
            {msg.text}
          </div>
        )}

        {/* Form Card - Reduced padding */}
        <div className="bg-[#f0f2f5] rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.06),-6px_-6px_12px_#ffffff] p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Section 1: Basic Information - Reduced padding */}
              <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Bank */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Bank *</label>
                    <Controller
                      name="bank"
                      control={control}
                      rules={{ required: "Bank is required" }}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                        >
                          <option value="">Select Bank</option>
                          {banks.map((bank) => (
                            <option key={bank.id} value={bank.name}>
                              {bank.name}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                    {errors.bank && <p className="text-red-600 text-xs mt-1">{errors.bank.message}</p>}
                  </div>

                  {/* Merchant Name - Optional */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">DBA Name</label>
                    <input
                      type="text"
                      {...register("merchant_name")}
                      className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                      placeholder="Enter Dba name (optional)"
                    />
                  </div>

                  {/* TID */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">TID * (8 characters)</label>
                    <input
                      type="text"
                      {...register("tid", { 
                        required: "TID is required",
                        minLength: { value: 8, message: "TID must be exactly 8 characters" },
                        maxLength: { value: 8, message: "TID must be exactly 8 characters" }
                      })}
                      className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                      placeholder="Enter 8-digit TID"
                      maxLength={8}
                    />
                    {errors.tid && <p className="text-red-600 text-xs mt-1">{errors.tid.message}</p>}
                  </div>

                  {/* MID */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">MID * (15 characters)</label>
                    <input
                      type="text"
                      {...register("mid", { 
                        required: "MID is required",
                        minLength: { value: 15, message: "MID must be exactly 15 characters" },
                        maxLength: { value: 15, message: "MID must be exactly 15 characters" }
                      })}
                      className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                      placeholder="Enter 15-digit MID"
                      maxLength={15}
                    />
                    {errors.mid && <p className="text-red-600 text-xs mt-1">{errors.mid.message}</p>}
                  </div>
                </div>
              </div>

              {/* Section 2: Task Details - Reduced padding */}
              <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Task Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Task Type *</label>
                    <Controller
                      name="task_type"
                      control={control}
                      rules={{ required: "Task type is required" }}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                        >
                          <option value="New Install">New Install</option>
                          <option value="Replacement">Replacement</option>
                          <option value="Call">Call</option>
                        </select>
                      )}
                    />
                    {errors.task_type && <p className="text-red-600 text-xs mt-1">{errors.task_type.message}</p>}
                  </div>

                  {/* Assign To */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Assign To *</label>
                    <Controller
                      name="assigned_to"
                      control={control}
                      rules={{ required: "Please select an assignee" }}
                      render={({ field }) => (
                        <div className="relative">
                          <select
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : null)}
                            className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff] appearance-none"
                          >
                            <option value="">Select Assignee</option>
                            {users.map((user) => (
                              <option key={user.id} value={user.id}>
                                {user.username} ({user.role})
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    />
                    {errors.assigned_to && <p className="text-red-600 text-xs mt-1">{errors.assigned_to.message}</p>}
                  </div>

                  {/* Conditional Problem Type */}
                  {isCallTask && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Problem Type *</label>
                      <Controller
                        name="problem_type"
                        control={control}
                        rules={{ required: isCallTask ? "Problem type is required" : false }}
                        render={({ field }) => (
                          <select
                            {...field}
                            className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                          >
                            <option value="">Select Problem Type</option>
                            {problemTypes.map((pt) => (
                              <option key={pt.id} value={pt.name}>
                                {pt.name}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                      {errors.problem_type && <p className="text-red-600 text-xs mt-1">{errors.problem_type.message}</p>}
                    </div>
                  )}
                </div>
              </div>

              {/* Section 3: Additional Information - Reduced padding */}
              <div className="bg-[#f0f2f5] rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_#ffffff] p-4">
               
                <div className="grid grid-cols-1 gap-3">
                  {/* Address and Phone - Same row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">ADDRESS</label>
                      <textarea
                        {...register("address")}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff] resize-none"
                        rows={3}
                        placeholder="Enter merchant address (optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">PHONE</label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                        placeholder="Enter phone number (optional)"
                      />
                    </div>
                  </div>

                  {/* Operator and Sim Serial - Same row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">OPERATOR</label>
                      <Controller
                        name="operator"
                        control={control}
                        render={({ field }) => (
                          <select
                            {...field}
                            className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                          >
                            <option value="">Select Operator (optional)</option>
                            {OPERATOR_OPTIONS.map((op) => (
                              <option key={op} value={op}>
                                {op}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">SIM Serial</label>
                      <input
                        type="text"
                        {...register("sim_serial", { 
                          maxLength: { value: 30, message: "SIM Serial must be 30 characters or less" }
                        })}
                        className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff]"
                        placeholder="Enter SIM serial number (optional)"
                        maxLength={30}
                      />
                      {errors.sim_serial && <p className="text-red-600 text-xs mt-1">{errors.sim_serial.message}</p>}
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">COMMENT</label>
                    <textarea
                      {...register("comment")}
                      className="w-full px-3 py-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_#ffffff] border-0 text-gray-800 focus:outline-none focus:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_#ffffff] resize-none"
                      rows={3}
                      placeholder="Add any additional comments (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button - Reduced padding */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-[#f0f2f5] text-gray-800 py-3 rounded-2xl font-bold shadow-[4px_4px_8px_rgba(0,0,0,0.06),-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12),inset_-2px_-2px_4px_#ffffff] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
                >
                  {mutation.isPending ? (
                    <div className="w-5 h-5 border-2 border-gray-200 border-t-gray-700 rounded-full animate-spin"></div>
                  ) : isEditMode ? (
                    <>
                      <SaveIcon className="w-4 h-4" />
                      Update Task
                    </>
                  ) : (
                    <>
                      <SaveIcon className="w-4 h-4" />
                      Create Task
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ---------- page wrapper ---------- */
export default function TaskManagerPage() {
  const params = useParams();
  const taskId = params?.taskId as string | undefined;
  
  return (
    <QueryClientProvider client={queryClient}>
      <TaskForm taskId={taskId} />
    </QueryClientProvider>
  );
}