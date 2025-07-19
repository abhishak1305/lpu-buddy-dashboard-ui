import { useState } from "react";
import { Search, Bell, Settings, LogOut, User, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface TopNavbarProps {
  title: string;
}

export function TopNavbar({ title }: TopNavbarProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Theme toggle logic would go here
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "HI" : "EN");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-card border-b">
      {/* Left Section - Title and Search */}
      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        
        <div className="relative w-96 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search resources, notes, or announcements..."
            className="pl-10 bg-muted/50 border-0 focus:bg-background"
          />
        </div>
      </div>

      {/* Right Section - Controls and Profile */}
      <div className="flex items-center space-x-4">
        {/* Language Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className="h-9 w-12 p-0"
        >
          <Globe className="w-4 h-4 mr-1" />
          <span className="text-xs font-medium">{language}</span>
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="h-9 w-9 p-0"
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </Button>

        {/* Notifications */}
        <div className="relative">
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
            <Bell className="w-4 h-4" />
          </Button>
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary">
            3
          </Badge>
        </div>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Student" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  ST
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-popover" align="end" forceMount>
            <div className="flex flex-col space-y-1 p-2">
              <p className="text-sm font-medium text-foreground">Student Name</p>
              <p className="text-xs text-muted-foreground">student@lpu.in</p>
              <p className="text-xs text-muted-foreground">CSE • Semester 6</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}