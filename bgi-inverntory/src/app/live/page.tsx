"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// =============================
// Type Definition
// =============================
interface TerminalCounts {
  citybank: number;
  pbl: number;
  ibbl: number;
  mtb: number;
  sdb: number;
}

// =============================
// Component
// =============================
export default function HomePage() {
  const [counts, setCounts] = useState<TerminalCounts | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch data
  useEffect(() => {
    axios
      .get("http://localhost:8000/terminals/counts")
      .then((res) => {
        setCounts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching terminal counts:", err);
        setLoading(false);
      });
  }, []);

  // Dashboard-style buttons
  const buttons = [
    {
      name: "CityBank Terminals",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      value: counts?.citybank,
      route: "/citybank",
    },
    {
      name: "PBL Terminals",
      gradient: "from-green-400 via-green-500 to-green-600",
      value: counts?.pbl,
      route: "/pubalibank",
    },
    {
      name: "IBBL Terminals",
      gradient: "from-teal-400 via-emerald-500 to-teal-600",
      value: counts?.ibbl,
      route: "/islamibank",
    },
    {
      name: "MTBL Terminals",
      gradient: "from-yellow-400 via-amber-500 to-orange-500",
      value: counts?.mtb,
      route: "/mtbbank",
    },
    {
      name: "SDBL Terminals",
      gradient: "from-violet-400 via-purple-500 to-indigo-600",
      value: counts?.sdb,
      route: "/standardbank",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-200">

      {/* HEADER */}
      <header className="w-full bg-white shadow-md flex flex-col items-center py-4">
        <h1 className="text-2xl font-bold text-gray-700 tracking-wide text-center">
          BGI LIVE TERMINALS
        </h1>
        <img src="/BGI-logo.jpg" alt="BGI Logo" className="h-20 object-contain mt-2" />
      </header>

      {/* MAIN */}
      <main className="flex-1 flex flex-col justify-start items-center w-full p-10">
        {loading ? (
          <p className="text-gray-600 text-lg animate-pulse">
            Loading terminal data...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8 max-w-6xl">
            {buttons.map((btn) => (
              <div
                key={btn.name}
                className={`
                  bg-gradient-to-br ${btn.gradient}
                  rounded-3xl py-12  px-12 shadow-lg
                  flex flex-col justify-center items-center
                  cursor-pointer select-none
                  hover:shadow-3xl hover:scale-[1.03]
                  transition-all duration-300
                `}
                onClick={() => router.push(btn.route)}
              >
                <h2 className="text-xl font-semibold text-white text-center mb-2 drop-shadow-sm">
                  {btn.name}
                </h2>

                <p className="text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
                  {btn.value ?? "-"}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="w-full py-8 bg-white border-t flex flex-col items-center">
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} BGI • All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
