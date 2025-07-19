import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function DashboardCard({ 
  title, 
  children, 
  className, 
  icon, 
  action 
}: DashboardCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
        {action}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}