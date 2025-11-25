"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  Cpu,
  Bug,
  Factory,
  PackageSearch,
  ClipboardList,
} from "lucide-react";

// Icon Map
const iconMap: any = {
  live: Activity,
  store: Factory,
  demo: ClipboardList,
  debug: Bug,
  faulty: PackageSearch,
  tasks: Cpu,
};

// =============================
// Dashboard Card Component
// =============================
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
        w-[300px]       /* Larger width */
        h-[180px]       /* Shorter height */
      `}
    >
      <Icon className="w-12 h-12 mb-3 opacity-90 text-white" />

      <h2 className="text-xl font-semibold text-white text-center drop-shadow-sm">
        {title}
      </h2>
    </div>
  );
}

// =============================
// Main Component
// =============================
export default function HomePage() {
  const router = useRouter();

  const buttons = [
    
    {
      name: "Store Terminals",
      gradient: "from-blue-400 to-blue-600",
      route: "/store",
      icon: iconMap.store,
    },
    {
      name: "Demo Terminals",
      gradient: "from-amber-400 to-amber-600",
      route: "/demo",
      icon: iconMap.demo,
    },
    {
      name: "Debug Terminals",
      gradient: "from-purple-500 to-purple-700",
      route: "/debug",
      icon: iconMap.debug,
    },
    {
      name: "Faulty Terminals",
      gradient: "from-red-400 to-red-600",
      route: "/faulty",
      icon: iconMap.faulty,
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-200">
      
      {/* Header */}
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

      {/* Main Section */}
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

      {/* Footer */}
      <footer className="w-full py-6 bg-white border-t text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BGI • All Rights Reserved
      </footer>
    </div>
  );
}
