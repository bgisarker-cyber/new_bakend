/* ---------- Sidebar.tsx  (drop-in file) ---------- */
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Gauge,
  Activity,
  Bug,
  Store,
  UserPlus,
  Users,
  ScrollText,
  Landmark,
  ChevronDown,
  ChevronUp,
  Menu,
  LogOut,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/* ---------- role-based navigation ---------- */
const COMMON_LINKS = [
  { name: "Dashboard", href: "/dashboard", icon: Gauge },
  { name: "Task Update", href: "/task-manager", icon: Store },
];

const BANK_TERMINALS = [
  { name: "Live Terminal", href: "/live", icon: Activity },
  { name: "City POS", href: "/citybank", icon: Activity },
  { name: "Pubali POS", href: "/pubalibank", icon: Activity },
  { name: "Islami POS", href: "/islamibank", icon: Activity },
  { name: "MTB POS", href: "/mtbbank", icon: Activity },
  { name: "Standard POS", href: "/standardbank", icon: Activity },
  
];

const INVENTORY_TERMINALS = [
  { name: "Debug Terminal", href: "/debug", icon: Bug },
  { name: "Demo Terminal", href: "/demo", icon: Bug },
  { name: "Faulty Terminal", href: "/faulty", icon: Bug },
  { name: "Store Terminal", href: "/store", icon: Store },
  
];

/* ---------- logout ---------- */
const logout = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (token)
      await fetch("http://127.0.0.1:8000/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  } catch (err) {
    console.error("Logout API error:", err);
  } finally {
    localStorage.removeItem("access_token");
    window.location.replace("/login");
  }
};

/* ---------- desktop sidebar ---------- */
export function Sidebar({ showLogout, role }: { showLogout?: boolean; role?: string }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);

  const bankLinks = role === "support" || role === "admin" || role === "superadmin" ? BANK_TERMINALS : [];
  const inventoryLinks = role === "superadmin" ? INVENTORY_TERMINALS : [];

  const NavLinks = () => (
    <nav className="flex flex-col space-y-2 mt-6 px-3">
      {COMMON_LINKS.map((item) => {
        const Icon = item.icon;
        const active = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg py-2 px-2 text-sm font-medium transition cursor-pointer",
              active ? "bg-[#E0E7FF] text-[#1F628E]" : "text-gray-800 hover:bg-[#E0E7FF] hover:text-[#1F628E]"
            )}
          >
            <Icon className="h-5 w-5" />
            {!collapsed && <span>{item.name}</span>}
          </Link>
        );
      })}

      {bankLinks.length > 0 && (
        <>
          <div className="text-xs uppercase text-gray-600 px-2 pt-4">Bank Terminals</div>
          {bankLinks.map((item) => {
            const Icon = item.icon;
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg py-2 px-2 text-sm font-medium transition cursor-pointer",
                  active ? "bg-[#E0E7FF] text-[#1F628E]" : "text-gray-800 hover:bg-[#E0E7FF] hover:text-[#1F628E]"
                )}
              >
                <Icon className="h-5 w-5" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </>
      )}

      {inventoryLinks.length > 0 && (
        <>
          <div className="text-xs uppercase text-gray-600 px-2 pt-4">Inventory Terminals</div>
          {inventoryLinks.map((item) => {
            const Icon = item.icon;
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg py-2 px-2 text-sm font-medium transition cursor-pointer",
                  active ? "bg-[#E0E7FF] text-[#1F628E]" : "text-gray-800 hover:bg-[#E0E7FF] hover:text-[#1F628E]"
                )}
              >
                <Icon className="h-5 w-5" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </>
      )}

      {role === "superadmin" && (
        <>
          <div className="text-xs uppercase text-gray-600 px-2 pt-4">System</div>
          <Link href="/user-log" className="flex items-center gap-3 rounded-lg py-2 px-2 text-sm font-medium transition cursor-pointer">
            <ScrollText className="h-5 w-5" />
            {!collapsed && <span>View Log</span>}
          </Link>
          <Link href="/user-show" className="flex items-center gap-3 rounded-lg py-2 px-2 text-sm font-medium transition cursor-pointer">
            <Users className="h-5 w-5" />
            {!collapsed && <span>View Users</span>}
          </Link>
          <Link href="/users-add" className="flex items-center gap-3 rounded-lg py-2 px-2 text-sm font-medium transition cursor-pointer">
            <UserPlus className="h-5 w-5" />
            {!collapsed && <span>Add User</span>}
          </Link>
        </>
      )}

      {showLogout && (
        <Button
          onClick={logout}
          className="w-full bg-[#1F628E] hover:bg-[#164A73] cursor-pointer text-white mt-6 flex items-center justify-center gap-2"
        >
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      )}
    </nav>
  );

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col border-r border-gray-300 bg-[#AEC6CF] text-gray-800 transition-all duration-300 fixed top-0 left-0 p-4 shadow-md rounded-r-2xl",
        collapsed ? "w-20" : "w-56"
      )}
      style={{ height: "100vh" }}
    >
      <div className="flex flex-col items-center mb-2 mt-2">
        <img src="/BGI-logo1.png" alt="BGI Logo" className="h-24 w-auto object-contain mb-2" />
      </div>
      <div className="flex-1 overflow-y-auto">
        <NavLinks />
      </div>
      {!collapsed && (
        <div className="text-center text-xs text-gray-700 mt-4 mb-2">VERSION: 1.0.1</div>
      )}
    </aside>
  );
}

/* ---------- mobile sidebar ---------- */
export function MobileSidebarButton({ role }: { role?: string }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const bankLinks = role === "support" || role === "admin" || role === "superadmin" ? BANK_TERMINALS : [];
  const inventoryLinks = role === "superadmin" ? INVENTORY_TERMINALS : [];

  const renderGroup = (list: typeof BANK_TERMINALS, title?: string) => (
    <>
      {title && <div className="text-xs uppercase text-gray-600 px-3 pt-4">{title}</div>}
      {list.map((item) => {
        const active = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition cursor-pointer",
              active ? "bg-[#E0E7FF] text-[#1F628E]" : "text-gray-800 hover:bg-[#E0E7FF] hover:text-[#1F628E]"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="md:hidden fixed top-4 right-4 z-50 rounded-full shadow-lg bg-[#1F628E] text-white cursor-pointer"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-52 p-6 bg-[#AEC6CF] text-gray-800 border-none">
        <div className="flex flex-col items-center mb-4">
          <img src="/BGI-logo1.png" alt="BGI Logo" className="h-16 w-auto object-contain mb-1" />
          <span className="text-sm font-semibold text-[#1F628E]">TERMINAL PORTAL</span>
        </div>

        <nav className="flex flex-col space-y-3 px-2">
          {renderGroup(COMMON_LINKS)}
          {bankLinks.length > 0 && renderGroup(bankLinks, "Bank Terminals")}
          {inventoryLinks.length > 0 && renderGroup(inventoryLinks, "Inventory Terminals")}
          {role === "superadmin" && renderGroup(
            [
              {
                name: "View Log", href: "/user-log",
                icon: undefined
              },
              {
                name: "View Users", href: "/user-show",
                icon: undefined
              },
              {
                name: "Add User", href: "/users-add",
                icon: undefined
              },
            ],
            "System"
          )}
          {role && (
            <Button onClick={logout} className="w-full bg-[#1F628E] hover:bg-[#164A73] text-white mt-6">
              <LogOut className="h-4 w-4 mr-2" />Logout
            </Button>
          )}
        </nav>

        <div className="text-center text-xs text-gray-700 mt-6">VERSION: 1.0.1</div>
      </SheetContent>
    </Sheet>
  );
}