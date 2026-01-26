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
// Neumorphic Card Component
// =============================
function TerminalCard({ title, value, onClick }: { title: string; value: number | undefined; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        w-full max-w-sm sm:w-80 h-40
        rounded-2xl
        bg-[#e6e9ef]
        flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        shadow-[10px_10px_18px_rgba(0,0,0,0.18),-8px_-8px_16px_#ffffff]
        hover:shadow-[6px_6px_14px_rgba(0,0,0,0.22),-6px_-6px_14px_#ffffff]
        active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.25),inset_-6px_-6px_12px_#ffffff]
        cursor-pointer select-none
        focus:outline-none
      "
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-2 tracking-wide">
        {title}
      </h2>
      <p className="text-5xl font-extrabold text-gray-800 tracking-wide">
        {value ?? "-"}
      </p>
    </button>
  );
}

// =============================
// Main Component
// =============================
export default function HomePage() {
  const [counts, setCounts] = useState<TerminalCounts | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  const buttons = [
    { name: "CityBank Terminals", value: counts?.citybank, route: "/citybank" },
    { name: "PBL Terminals", value: counts?.pbl, route: "/pubalibank" },
    { name: "IBBL Terminals", value: counts?.ibbl, route: "/islamibank" },
    { name: "MTBL Terminals", value: counts?.mtb, route: "/mtbbank" },
    { name: "SDBL Terminals", value: counts?.sdb, route: "/standardbank" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#e6e9ef]">

      {/* HEADER */}
      <header className="w-full flex flex-col items-center mt-12 py-6">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide text-center">
          BGI LIVE TERMINALS
        </h1>
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
              <TerminalCard
                key={btn.name}
                title={btn.name}
                value={btn.value}
                onClick={() => router.push(btn.route)}
              />
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="w-full py-8 flex flex-col items-center">
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} BGI • All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
