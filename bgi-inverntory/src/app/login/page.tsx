"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loader2 } from "lucide-react"; // FIXED: Import Loader2

// ==========================
// Validation Schema
// ==========================
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address").trim(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["superadmin", "admin", "support"], { error: "Please select a role" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// ==========================
// Component
// ==========================
export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", role: undefined },
  });

  const selectedRole = watch("role");

  // ==========================
  // Handle Form Submit
  // ==========================
  const onSubmit = async (data: LoginFormValues) => {
    setError("");
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login", // FIXED: Removed trailing space
        { email: data.email, password: data.password, role: data.role },
        { headers: { "Content-Type": "application/json" } }
      );

      // Store auth data
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("role", data.role);

      // Redirect to dashboard
      router.push("/live");
    } catch (err: any) {
      console.error("Login error:", err);
      
      const detail = err.response?.data?.detail;
      if (Array.isArray(detail)) {
        setError(detail.map((d: any) => d.msg).join(", "));
      } else if (typeof detail === "string") {
        setError(detail);
      } else if (err.message === "Network Error") {
        setError("Cannot connect to the server. Make sure FastAPI is running.");
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================
  // Render UI
  // ==========================
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6e9ef] px-4">
      <Card className="w-full max-w-md rounded-3xl shadow-[10px_10px_20px_rgba(0,0,0,0.15),-8px_-8px_16px_#ffffff] border border-gray-200">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-3xl font-bold text-gray-800 text-center tracking-wide mb-2">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="bg-[#f0f3f7] border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-[#f0f3f7] border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Role */}
            <div className="space-y-1">
              <Label htmlFor="role">Role</Label>
              <Select
                onValueChange={(value) => setValue("role", value as any)}
                value={selectedRole}
              >
                <SelectTrigger className="w-full bg-[#f0f3f7] border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="superadmin">Superadmin</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && (
                <p className="text-sm text-red-500">{errors.role.message}</p>
              )}
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-[1.02] transition-transform duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-center mt-2 font-medium">{error}</p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}