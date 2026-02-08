// app/(auth)/layout.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar, MobileSidebarButton } from "@/app/components/Sidebar";
import { Loader2 } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role");

    // List of public paths that don't require authentication
    const publicPaths = ["/login", "/register", "/forgot-password"];

    if (!token && !publicPaths.includes(pathname)) {
      router.push("/login");
      return;
    }

    if (token) {
      try {
        // Validate token expiry
        const payload = JSON.parse(atob(token.split(".")[1]));
        const isExpired = payload.exp && Date.now() > payload.exp * 1000;
        
        if (isExpired) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("role");
          router.push("/login");
        } else {
          setUserRole(role);
        }
      } catch {
        localStorage.removeItem("access_token");
        localStorage.removeItem("role");
        router.push("/login");
      }
    }

    setIsLoading(false);
  }, [pathname, router]);

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/10">
        <Loader2 className="w-10 h-10 text-gray-800 animate-spin" />
      </div>
    );
  }

  // For public pages (login/register), render without sidebar
  const publicPaths = ["/login", "/register", "/forgot-password"];
  if (publicPaths.includes(pathname)) {
    return <>{children}</>;
  }

  // For protected pages, show layout with sidebar
  return (
    <div className="flex min-h-screen w-screen bg-muted/10">
      {/* Desktop sidebar */}
      <div className="hidden md:block md:w-[25%] lg:w-[15%]">
        <Sidebar showLogout role={userRole || undefined} />
      </div>

      {/* Main content */}
      <main className="flex-1 w-full overflow-auto">{children}</main>

      {/* Mobile sidebar button */}
      <MobileSidebarButton role={userRole || undefined} />
    </div>
  );
}