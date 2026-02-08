// app/dashboard/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Activity, Factory, Cpu, Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";

/* ---------- icon map ---------- */
const iconMap: any = {
  live: Activity,
  store: Factory,
  tasks: Cpu,
};

/* ---------- neumorphic dashboard card ---------- */
function DashboardCard({
  title,
  onClick,
  icon: Icon,
  isLoading,
}: any) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`
        relative
        w-full max-w-sm sm:w-80 h-40 sm:h-48
        rounded-2xl
        bg-[#e6e9ef]
        flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        shadow-[10px_10px_18px_rgba(0,0,0,0.18),-8px_-8px_16px_#ffffff]
        hover:shadow-[6px_6px_14px_rgba(0,0,0,0.22),-6px_-6px_14px_#ffffff]
        active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.25),inset_-6px_-6px_12px_#ffffff]
        disabled:opacity-60 disabled:cursor-not-allowed
        focus:outline-none
      `}
    >
      {isLoading && (
        <div className="absolute inset-0 rounded-2xl bg-white/60 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-gray-700 animate-spin" />
        </div>
      )}

      <Icon className="w-11 h-11 sm:w-12 sm:h-12 mb-4 text-gray-800" />
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 text-center tracking-wide">
        {title}
      </h2>
    </button>
  );
}

/* ---------- hook: read role from JWT ---------- */
function useRole() {
  const [role, setRole] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setIsLoading(false);
      return;
    }
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setRole(payload.role ?? "");
    } catch {
      setRole("");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { role, isLoading };
}

/* ---------- main dashboard ---------- */
export default function HomePage() {
  const router = useRouter();
  const { role, isLoading } = useRole();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        await fetch("http://127.0.0.1:8000/auth/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      }
    } catch (err) {
      console.error("Logout API error:", err);
    } finally {
      localStorage.removeItem("access_token");
      localStorage.removeItem("role");
      router.replace("/login");
    }
  };

  const buttons = React.useMemo(() => {
    if (isLoading) return [];

    const all = [
      { name: "Live Terminals", route: "/live", icon: iconMap.live },
     
    ];

    if (role === "superadmin") {
      all.push({
        name: "Inventory Terminals",
        route: "/inventory",
        icon: iconMap.store,
      });
    }

    return all;
  }, [role, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e6e9ef]">
        <Loader2 className="w-10 h-10 text-gray-800 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#e6e9ef]">
      {/* Header */}
      <header className="hidden md:flex mt-10">
        <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
          BGI INVENTORY SYSTEM
        </h1>
      </header>

      {/* Mobile Header */}
      <div className="md:hidden mt-12 pt-20">
        <h1 className="text-xl font-bold text-gray-800 text-center">
          BGI INVENTORY SYSTEM
        </h1>
      </div>

      {/* Cards */}
      <main className="flex-1 flex items-center justify-center w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {buttons.map((btn) => (
            <DashboardCard
              key={btn.name}
              title={btn.name}
              onClick={() => router.push(btn.route)}
              icon={btn.icon}
              isLoading={isLoggingOut}
            />
          ))}
        </div>
      </main>

      <footer className="w-full py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} BGI • All Rights Reserved
      </footer>
    </div>
  );
}