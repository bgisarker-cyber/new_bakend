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

/* ---------- Icon Map ---------- */
const iconMap: any = {
  live: Activity,
  store: Factory,
  demo: ClipboardList,
  debug: Bug,
  faulty: PackageSearch,
  tasks: Cpu,
};

/* =============================
   Dashboard Card (UI Updated)
============================= */
function DashboardCard({ title, onClick, icon: Icon }: any) {
  return (
    <button
      onClick={onClick}
      className="
        group
        cursor-pointer select-none
        rounded-3xl
        bg-[#eef1f6]
        w-[300px] h-[180px]
        flex flex-col items-center justify-center
        transition-all duration-300 ease-out

        shadow-[12px_12px_22px_rgba(0,0,0,0.18),-10px_-10px_20px_#ffffff]
        hover:shadow-[8px_8px_18px_rgba(0,0,0,0.25),-8px_-8px_18px_#ffffff]
        hover:-translate-y-1

        active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.25),inset_-6px_-6px_12px_#ffffff]
        focus:outline-none
      "
    >
      <Icon className="w-12 h-12 mb-4 text-gray-700 group-hover:scale-110 transition-transform duration-300" />

      <h2 className="text-lg font-semibold text-gray-800 text-center tracking-wide">
        {title}
      </h2>
    </button>
  );
}

/* =============================
   Main Component
============================= */
export default function HomePage() {
  const router = useRouter();

  const buttons = [
    {
      name: "Store Terminals",
      route: "/store",
      icon: iconMap.store,
    },
    {
      name: "Demo Terminals",
      route: "/demo",
      icon: iconMap.demo,
    },
    {
      name: "Debug Terminals",
      route: "/debug",
      icon: iconMap.debug,
    },
    {
      name: "Faulty Terminals",
      route: "/faulty",
      icon: iconMap.faulty,
    },
  ];

  return (
   <div className="min-h-screen bg-[#e6e9ef] flex flex-col">
      {/* HEADER */}
      <header className="pt-10 pb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center tracking-wide">
           INVENTORY TERMINALS
        </h1>
        
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
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
