"use client";

import { useRouter } from "next/navigation";
import { Activity, Cpu } from "lucide-react";
import React from "react";

/* ---------- icon map ---------- */
const iconMap = {
  pos: Activity,
  tasks: Cpu,
};

/* ---------- dashboard card (UI upgraded) ---------- */
function DashboardCard({ title, onClick, icon: Icon }: any) {
  if (!Icon) return null;

  return (
    <button
      onClick={onClick}
      className="
        cursor-pointer select-none
        rounded-3xl
        bg-[#e6e9ef]
        transition-all duration-300 ease-out
        flex flex-col items-center justify-center
        w-[320px] h-[190px]

        shadow-[12px_12px_22px_rgba(0,0,0,0.18),-10px_-10px_20px_#ffffff]
        hover:shadow-[8px_8px_18px_rgba(0,0,0,0.22),-8px_-8px_18px_#ffffff]
        hover:-translate-y-1

        active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.25),inset_-6px_-6px_12px_#ffffff]

        focus:outline-none
      "
    >
      <Icon className="w-12 h-12 text-gray-800 mb-3" />
      <h2 className="text-lg font-semibold text-gray-800 text-center tracking-wide">
        {title}
      </h2>
    </button>
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

  /* ---------- role-based buttons ---------- */
  const buttons = React.useMemo(() => {
    const all: any[] = [];

    if (role === "support") {
      all.push(
        {
          name: "POS Call",
          route: "/task-manager/task-call",
          icon: iconMap.pos,
        },
        {
          name: "My Task",
          route: "/task-manager/my-task",
          icon: iconMap.tasks,
        }
      );
    }

    if (role === "admin") {
      all.push(
        {
          name: "POS Call",
          route: "/task-manager/task-call",
          icon: iconMap.pos,
        },
        {
          name: "My Task",
          route: "/task-manager/my-task",
          icon: iconMap.tasks,
        }
      );
    }

    if (role === "superadmin") {
      all.push(
        {
          name: "POS Call",
          route: "/task-manager/task-call",
          icon: iconMap.pos,
        },
        
   );
    }

    return all;
  }, [role]);

  return (
    <div className="min-h-screen bg-[#e6e9ef] flex flex-col">
      {/* HEADER */}
      <header className="pt-10 pb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center tracking-wide">
          BGI INVENTORY SYSTEM
        </h1>
        
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {buttons.map((btn) => (
            <DashboardCard
              key={btn.name}
              title={btn.name}
              onClick={() => router.push(btn.route)}
              icon={btn.icon}
            />
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BGI • All Rights Reserved
      </footer>
    </div>
  );
}
