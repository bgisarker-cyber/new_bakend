"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

// =============================
// Type Definitions
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
function TerminalCard({ 
  title, 
  value, 
  onClick, 
  isLoading 
}: { 
  title: string; 
  value: number | undefined | null; 
  onClick: () => void;
  isLoading: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
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
        disabled:opacity-70 disabled:cursor-not-allowed
        cursor-pointer select-none
        focus:outline-none
      "
    >
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 rounded-2xl bg-white/60 flex items-center justify-center backdrop-blur-sm">
          <Loader2 className="w-8 h-8 text-gray-700 animate-spin" />
        </div>
      )}
      
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-2 tracking-wide">
        {title}
      </h2>
      
      <div className="flex items-baseline gap-2">
        <p className="text-5xl font-extrabold text-gray-800 tracking-wide">
          {value ?? "-"}
        </p>
        <span className="text-sm text-gray-600 font-medium">
          terminals
        </span>
      </div>
    </button>
  );
}

// =============================
// Main Component
// =============================
export default function HomePage() {
  const [counts, setCounts] = useState<TerminalCounts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchTerminalCounts();
  }, []);

  const fetchTerminalCounts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem("access_token");
      if (!token) {
        router.push("/login");
        return;
      }

      const response = await axios.get("http://127.0.0.1:8000/terminals/counts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!response.data || typeof response.data !== 'object') {
        throw new Error("Invalid data format from API");
      }
      
      console.log("Terminal counts loaded:", response.data);
      setCounts(response.data);
    } catch (err: any) {
      console.error("Error fetching terminal counts:", err);
      setError(err.response?.data?.detail || err.message || "Failed to load terminal data");
    } finally {
      setLoading(false);
    }
  };

  const bankData = [
    { name: "CBPLC Terminals", value: counts?.citybank, route: "/citybank", key: "citybank" },
    { name: "PBPLC Terminals", value: counts?.pbl, route: "/pubalibank", key: "pbl" },
    { name: "IBBPLC Terminals", value: counts?.ibbl, route: "/islamibank", key: "ibbl" },
    { name: "MTBPLC Terminals", value: counts?.mtb, route: "/mtbbank", key: "mtb" },
    { name: "SBPLC Terminals", value: counts?.sdb, route: "/standardbank", key: "sdb" },
  ];

  // Show error UI if API fails
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#e6e9ef] p-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Data</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="flex gap-2 justify-center">
            <Button 
              onClick={fetchTerminalCounts}
              className="flex items-center gap-2 bg-[#1F628E] hover:bg-[#164A73] text-white px-4 py-2 rounded-lg"
            >
              <RefreshCw className="w-4 h-4" />
              Retry
            </Button>
            <Button 
              onClick={() => router.push("/dashboard")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
            >
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#e6e9ef]">
      <header className="w-full flex flex-col items-center mt-12 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide text-center">
          BGI LIVE TERMINALS
        </h1>
        <p className="text-gray-600 mt-2 text-center">
          Real-time terminal counts across all banks
        </p>
      </header>

      <main className="flex-1 flex flex-col justify-start items-center w-full p-6 md:p-10">
        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 text-gray-700 animate-spin" />
            <p className="text-gray-600 text-lg">Loading terminal data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-8 max-w-7xl w-full">
            {bankData.map((btn) => (
              <TerminalCard
                key={btn.key}
                title={btn.name}
                value={btn.value}
                onClick={() => router.push(btn.route)}
                isLoading={loading}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="w-full py-8 flex flex-col items-center">
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} BGI • All Rights Reserved
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Dashboard refreshes automatically every 30 seconds
        </p>
      </footer>
    </div>
  );
}