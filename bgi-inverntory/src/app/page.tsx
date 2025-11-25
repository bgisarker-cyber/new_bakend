"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";

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

// ==========================
// ✅ Validation Schema
// ==========================
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["superadmin", "admin", "support"], {
    required_error: "Please select a role",
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// ==========================
// ✅ Component
// ==========================
export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: undefined,
    },
  });

  const selectedRole = watch("role");

  // ==========================
  // ✅ Handle Form Submit
  // ==========================
  const onSubmit = async (data: LoginFormValues) => {
    setError("");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      // ✅ Save token and role
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", data.role);

      // ✅ Redirect by role
      if (data.role === "superadmin" || data.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/support/dashboard");
      }
    } catch (err: any) {
      console.error("Login error:", err);

      if (err.message === "Network Error") {
        setError("Cannot connect to the server. Make sure FastAPI is running.");
        return;
      }

      const detail = err.response?.data?.detail;
      if (Array.isArray(detail)) {
        setError(detail.map((d: any) => d.msg).join(", "));
      } else if (typeof detail === "string") {
        setError(detail);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  // ==========================
  // ✅ Render UI
  // ==========================
  return (
    //   <div className="min-h-screen flex items-center justify-center bg-muted">
    //   <Card className="w-full max-w-md shadow-lg border border-border">
    //     <CardHeader>
    //       <CardTitle className="text-center text-2xl font-bold">
    //         Login
    //       </CardTitle>
    //     </CardHeader>

    //     <CardContent>
    //       <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
    //         {/* Email */}
    //         <div className="space-y-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="you@example.com"
    //             {...register("email")}
    //           />
    //           {errors.email && (
    //             <p className="text-sm text-red-500">{errors.email.message}</p>
    //           )}
    //         </div>

    //         {/* Password */}
    //         <div className="space-y-2">
    //           <Label htmlFor="password">Password</Label>
    //           <Input
    //             id="password"
    //             type="password"
    //             placeholder="••••••••"
    //             {...register("password")}
    //           />
    //           {errors.password && (
    //             <p className="text-sm text-red-500">
    //               {errors.password.message}
    //             </p>
    //           )}
    //         </div>

    //         {/* Role */}
    //         <div className="space-y-2">
    //           <Label htmlFor="role">Role</Label>
    //           <Select
    //             onValueChange={(value) => setValue("role", value as any)}
    //             value={selectedRole}
    //           >
    //             <SelectTrigger className="w-full">
    //               <SelectValue placeholder="Select your role" />
    //             </SelectTrigger>
    //             <SelectContent>
    //               <SelectItem value="superadmin">Superadmin</SelectItem>
    //               <SelectItem value="admin">Admin</SelectItem>
    //               <SelectItem value="support">Support</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           {errors.role && (
    //             <p className="text-sm text-red-500">{errors.role.message}</p>
    //           )}
    //         </div>

    //         {/* Submit */}
    //         <Button
    //           type="submit"
    //           className="w-full flex items-center justify-center gap-2"
    //           disabled={isSubmitting}
    //         >
    //           {isSubmitting ? "Signing in..." : "Sign In"}
    //         </Button>

    //         {/* Error Message */}
    //         {error && (
    //           <p className="text-red-500 text-center mt-2 font-medium">
    //             {error}
    //           </p>
    //         )}
    //       </form>
    //     </CardContent>
    //   </Card>
    // </div>
    <div>
       <Card className="w-full max-w-md shadow-lg border border-border m-auto ">
     <CardHeader>
      <CardTitle className="text-center text-2xl font-bold">
        Select The Menu
      </CardTitle>
       </CardHeader>
    </Card>
    </div>
  );
}
