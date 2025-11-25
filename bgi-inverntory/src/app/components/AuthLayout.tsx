"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar, MobileSidebarButton } from "@/app/components/Sidebar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Check for access token
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role"); // store role on login
    setIsAuthenticated(!!token);
    setUserRole(role);

    const publicPaths = ["/login",];

    // Redirect to login if not authenticated
    if (!token && !publicPaths.includes(pathname)) {
      router.push("/login");
    }

    // Redirect to dashboard if authenticated and on login/registration page
    if (token && publicPaths.includes(pathname)) {
      router.push("/dashboard");
    }
  }, [pathname, router]);

  if (isAuthenticated === null) return null; // Prevent flicker

  // If not authenticated, render login/registration pages
  if (!isAuthenticated) return <>{children}</>;

  // Full-page layout after login
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
