/* ---------- Sidebar.tsx  (drop-in file) ---------- */
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Gauge,
  ListTodo,
  Phone,
  ClipboardList,
  Monitor,
  CreditCard,
  Package,
  Bug,
  Laptop,
  AlertTriangle,
  Warehouse,
  Settings,
  FileText,
  Users,
  UserPlus,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  LogOut,
  X,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/* ---------- navigation structure ---------- */
interface NavItem {
  name: string;
  route?: string;
  icon: React.ElementType;
  roles?: string[];
  children?: NavItem[];
}

const NAV_SECTIONS: NavItem[] = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: Gauge,
  },
  {
    name: "Task Update",
    icon: ListTodo,
    children: [
      { name: "Create Call", route: "/task-manager/create-task", icon: Phone },
      { name: "Call List", route: "/task-manager/task-call", icon: ClipboardList, roles: ["superadmin","admin"],},
      { name: "MY Calls", route: "/task-manager/my-task", icon: ClipboardList, roles: ["support","admin"],},
      {
        name: "Task-Control",
        route: "/task_control",
        icon: Settings,
        roles: ["superadmin"],
      },
    ],
  },
  {
    name: "Live terminals",
    icon: Monitor,
    roles: ["support", "admin", "superadmin"],
    children: [
      { name: "CBL POS", route: "/citybank", icon: CreditCard },
      { name: "PBL POS", route: "/pubalibank", icon: CreditCard },
      { name: "IBBL POS", route: "/islamibank", icon: CreditCard },
      { name: "MTBL POS", route: "/mtbbank", icon: CreditCard },
      { name: "SDBL POS", route: "/standardbank", icon: CreditCard },
    ],
  },
  {
    name: "Inventory Terminals",
    icon: Package,
    roles: ["superadmin"],
    children: [
      { name: "Debug Terminal", route: "/debug", icon: Bug },
      { name: "Demo Terminal", route: "/demo", icon: Laptop },
      { name: "Faulty Terminal", route: "/faulty", icon: AlertTriangle },
      { name: "Store Terminal", route: "/store", icon: Warehouse },
    ],
  },
  {
    name: "System",
    icon: Settings,
    roles: ["superadmin"],
    children: [
      { name: "View Log", route: "/user-log", icon: FileText },
      { name: "View Users", route: "/user-show", icon: Users },
      { name: "Add User", route: "/users-add", icon: UserPlus },
    ],
  },
];

/* ---------- logout ---------- */
const logout = async () => {
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
    window.location.replace("/login");
  }
};

/* ---------- helpers ---------- */
const isItemVisible = (item: NavItem, role?: string) => {
  if (!item.roles) return true;
  if (!role) return false;
  return item.roles.includes(role);
};

const isParentActive = (children: NavItem[] | undefined, pathname: string) =>
  children?.some(
    (child) => child.route && pathname.startsWith(child.route)
  ) || false;

/* ---------- desktop sidebar ---------- */
export function Sidebar({
  showLogout,
  role,
}: {
  showLogout?: boolean;
  role?: string;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);
  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({
    "Task Update": false,
    "Live terminals": false,
    "Inventory Terminals": false,
    "System": false,
  });

  const toggleSection = (name: string) =>
    setExpandedSections((prev) => ({ ...prev, [name]: !prev[name] }));

  const renderNavItem = (item: NavItem) => {
    const hasChildren = item.children?.length;
    const Icon = item.icon;

    if (!isItemVisible(item, role)) return null;

    if (hasChildren) {
      const active = isParentActive(item.children, pathname);
      const isExpanded = expandedSections[item.name];

      return (
        <div key={item.name} className="space-y-1">
          <div
            onClick={() => toggleSection(item.name)}
            className={cn(
              "flex items-center justify-between rounded-lg py-2 px-2 text-sm font-medium cursor-pointer transition",
              active
                ? "bg-[#E0E7FF] text-[#1F628E]"
                : "text-gray-800 hover:bg-[#E0E7FF] hover:text-[#1F628E]"
            )}
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5" />
              {!collapsed && <span>{item.name}</span>}
            </div>
            {!collapsed &&
              (isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              ))}
          </div>

          {isExpanded && !collapsed && (
            <div className="ml-6 space-y-1">
              {item.children!.map((child) => {
                if (!isItemVisible(child, role)) return null;
                const ChildIcon = child.icon;
                const activeChild =
                  child.route && pathname.startsWith(child.route);

                return (
                  <Link
                    key={child.route}
                    href={child.route!}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium transition",
                      activeChild
                        ? "bg-[#E0E7FF] text-[#1F628E]"
                        : "text-gray-700 hover:bg-[#E0E7FF] hover:text-[#1F628E]"
                    )}
                  >
                    <ChildIcon className="h-4 w-4" />
                    {child.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    const active = item.route && pathname.startsWith(item.route);
    return (
      <Link
        key={item.route}
        href={item.route!}
        className={cn(
          "flex items-center gap-3 rounded-lg py-2 px-2 text-sm font-medium transition",
          active
            ? "bg-[#E0E7FF] text-[#1F628E]"
            : "text-gray-800 hover:bg-[#E0E7FF] hover:text-[#1F628E]"
        )}
      >
        <Icon className="h-5 w-5" />
        {!collapsed && <span>{item.name}</span>}
      </Link>
    );
  };

  return (
    <aside
      className={cn(
        "hidden md:flex fixed top-0 left-0 h-screen flex-col border-r border-gray-300 bg-[#AEC6CF] p-4 shadow-md rounded-r-2xl transition-all duration-300",
        collapsed ? "w-20" : "w-56"
      )}
    >
      <div className={cn("flex", collapsed ? "justify-center" : "justify-end")}>
        <Button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-[#1F628E] hover:bg-[#164A73] text-white h-8 w-8 p-2"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      <nav className="mt-6 space-y-2 px-3 flex-1 overflow-y-auto">
        {NAV_SECTIONS.map(renderNavItem)}
        {showLogout && (
          <Button
            onClick={logout}
            className="w-full bg-[#1F628E] hover:bg-[#164A73] text-white mt-6 flex gap-2"
          >
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        )}
      </nav>

      {!collapsed && (
        <div className="text-center text-xs text-gray-700 mt-4">
          VERSION: 1.0.1
        </div>
      )}
    </aside>
  );
}

/* ---------- mobile sidebar ---------- */
export function MobileSidebarButton({ role }: { role?: string }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({
    "Task Update": false,
    "Live terminals": false,
    "Inventory Terminals": false,
    "System": false,
  });

  const toggleSection = (name: string) =>
    setExpandedSections((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden fixed top-4 right-4 z-50 bg-[#1F628E] text-white">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="bg-[#AEC6CF] w-52 p-6">
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => setOpen(false)}
            className="bg-[#1F628E] text-white h-8 w-8"
          >
            <X />
          </Button>
        </div>

        <nav className="space-y-3">
          {NAV_SECTIONS.map((item) => (
            <div key={item.name}>
              {isItemVisible(item, role) && (
                <Link
                  href={item.route || "#"}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 font-medium text-gray-800 hover:bg-[#E0E7FF]"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {role && (
            <Button
              onClick={logout}
              className="w-full bg-[#1F628E] text-white mt-6"
            >
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          )}
        </nav>

        <div className="text-center text-xs text-gray-700 mt-6">
          VERSION: 1.0.1
        </div>
      </SheetContent>
    </Sheet>
  );
}
