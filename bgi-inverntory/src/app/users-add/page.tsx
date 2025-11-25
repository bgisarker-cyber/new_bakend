'use client'

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { UserPlus } from "lucide-react"
import { useRouter } from "next/navigation"

// ==========================
// ✅ Zod Signup Schema
// ==========================
const signupSchema = z.object({
  username: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Please confirm your password"),
  role: z.string().nonempty("Please select a role"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

type SignupFormValues = z.infer<typeof signupSchema>

// ==========================
// ✅ Create User Component
// ==========================
export default function CreateUserPage() {
  const router = useRouter()
  const [serverError, setServerError] = React.useState("")
  const [successMessage, setSuccessMessage] = React.useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupFormValues) => {
    setServerError("")
    setSuccessMessage("")

    try {
      // ✅ Get JWT token from localStorage
      const token = localStorage.getItem("access_token")
      if (!token) {
        setServerError("You are not authorized. Please login first.")
        return
      }

      // ✅ Send request to backend
      const res = await fetch("http://127.0.0.1:8000/auth/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
          role: data.role,
        }),
      })

      if (!res.ok) {
        const errData = await res.json()
        setServerError(errData.detail || "Something went wrong")
        return
      }

      const result = await res.json()
      setSuccessMessage(result.message || "User created successfully!")

      reset() // ✅ Clear form

      // ✅ Redirect after short delay
      setTimeout(() => {
        router.push("/user-log")
      }, 1500)
    } catch (error) {
      console.error(error)
      setServerError("Server error. Please try again later.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-lg border border-border">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Create User
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username">Full Name</Label>
              <Input
                id="username"
                placeholder="John Doe"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                {...register("role")}
                className="w-full border rounded-md px-3 py-2"
              >
                <option value="">Select a role</option>
                <option value="superadmin">Superadmin</option>
                <option value="admin">Admin</option>
                <option value="support">Support</option>
              </select>
              {errors.role && (
                <p className="text-sm text-red-500">{errors.role.message}</p>
              )}
            </div>

            {/* ✅ Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <UserPlus className="h-4 w-4" />
              {isSubmitting ? "Creating user..." : "Create User"}
            </button>

            {/* ✅ Server Messages */}
            {serverError && (
              <p className="text-red-500 text-center mt-2">{serverError}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-center mt-2">
                {successMessage}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
