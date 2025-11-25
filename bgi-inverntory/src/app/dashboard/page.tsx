"use client";

import { useRouter } from "next/navigation";
import {
  Activity,
  Cpu,
  Bug,
  Factory,
  PackageSearch,
  ClipboardList,
} from "lucide-react";
import React from "react";

/* ---------- icon map ---------- */
const iconMap: any = {
  live: Activity,
  store: Factory,
  demo: ClipboardList,
  debug: Bug,
  faulty: PackageSearch,
  tasks: Cpu,
};

/* ---------- card component ---------- */
function DashboardCard({ title, gradient, onClick, icon: Icon }: any) {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer select-none
        rounded-3xl
        py-10 px-10
        shadow-lg
        bg-gradient-to-br ${gradient}
        hover:shadow-2xl hover:scale-[1.03]
        transition-all duration-300
        flex flex-col items-center justify-center
        w-[300px] h-[180px]
      `}
    >
      <Icon className="w-12 h-12 mb-3 opacity-90 text-white" />
      <h2 className="text-xl font-semibold text-white text-center drop-shadow-sm">
        {title}
      </h2>
    </div>
  );
}

/* ---------- hook: read role from JWT ---------- */
function useRole() {
  const [role, setRole] = React.useState<string>("");
  React.useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setRole(payload.role ?? "");
    } catch {
      setRole("");
    }
  }, []);
  return role;
}

/* ---------- main dashboard ---------- */
export default function HomePage() {
  const router = useRouter();
  const role = useRole();

  /* ---------- buttons that exist for each role ---------- */
  const buttons = React.useMemo(() => {
    const all = [
      {
        name: "Live Terminals",
        gradient: "from-green-400 to-green-600",
        route: "/live",
        icon: iconMap.live,
      },
      {
        name: "Task Update",
        gradient: "from-pink-400 to-pink-600",
        route: "/task-manager",
        icon: iconMap.tasks,
      },
    ];

    /* super-admin extra cards */
    if (role === "superadmin") {
      all.push(
        {
          name: "Inventory Terminals",
          gradient: "from-blue-400 to-blue-600",
          route: "/inventory",
          icon: iconMap.store,
        },
        {
          name: "Debug Terminal",
          gradient: "from-red-400 to-red-600",
          route: "/debug",
          icon: iconMap.debug,
        },
        {
          name: "Demo Terminal",
          gradient: "from-purple-400 to-purple-600",
          route: "/demo",
          icon: iconMap.demo,
        },
        {
          name: "Faulty Terminal",
          gradient: "from-yellow-400 to-yellow-600",
          route: "/faulty",
          icon: iconMap.faulty,
        }
      );
    }

    return all;
  }, [role]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-200">
      {/* header */}
      <header className="w-full bg-white shadow-md flex flex-col items-center py-4">
        <h1 className="text-2xl font-bold text-gray-700 tracking-wide text-center">
          BGI INVENTORY SYSTEM
        </h1>
        <img
          src="/BGI-logo.jpg"
          alt="BGI Logo"
          className="h-24 object-contain mt-1"
        />
      </header>

      {/* main */}
      <main className="flex-1 flex flex-col items-center w-full p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {buttons.map((btn) => (
            <DashboardCard
              key={btn.name}
              title={btn.name}
              gradient={btn.gradient}
              onClick={() => router.push(btn.route)}
              icon={btn.icon}
            />
          ))}
        </div>
      </main>

      {/* footer */}
      <footer className="w-full py-6 bg-white border-t text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BGI • All Rights Reserved
      </footer>
    </div>
  );
}