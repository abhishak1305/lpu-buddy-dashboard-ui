import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  FileCheck, 
  User, 
  FolderOpen, 
  Briefcase, 
  Bell, 
  MessageCircle,
  ChevronLeft,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Notes", href: "/notes", icon: BookOpen },
  { name: "PYQs", href: "/pyqs", icon: FileText },
  { name: "Syllabus", href: "/syllabus", icon: FileCheck },
  { name: "Resume Builder", href: "/resume", icon: User },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Internships", href: "/internships", icon: Briefcase },
  { name: "Updates", href: "/updates", icon: Bell },
  { name: "Chat", href: "/chat", icon: MessageCircle },
];

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ collapsed, onToggleCollapse }: SidebarProps) {
  return (
    <div 
      className={cn(
        "flex flex-col h-full bg-card border-r transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">LPU Buddy</h1>
              <p className="text-xs text-muted-foreground">Student Platform</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapse}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft 
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              collapsed && "rotate-180"
            )} 
          />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground",
                    collapsed && "justify-center px-2"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className={cn(
          "flex items-center space-x-3",
          collapsed && "justify-center"
        )}>
          <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary-dark">S</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Student</p>
              <p className="text-xs text-muted-foreground truncate">student@lpu.in</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}