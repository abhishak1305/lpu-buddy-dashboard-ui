import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Upload, 
  TrendingUp, 
  Calendar,
  FileText,
  Users,
  Clock,
  Star,
  Download,
  Eye,
  ArrowRight
} from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-6 text-primary-foreground">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome back, Student!</h2>
              <p className="text-primary-foreground/80">
                Ready to continue your academic journey? Check out the latest resources and updates.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-primary-foreground/80">Current Semester</p>
              <p className="text-xl font-bold">Semester 6</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardCard 
            title="Total Notes" 
            icon={<BookOpen className="w-4 h-4 text-primary" />}
          >
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">
              +12 from last week
            </p>
          </DashboardCard>

          <DashboardCard 
            title="PYQs Available" 
            icon={<FileText className="w-4 h-4 text-primary" />}
          >
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              Across all subjects
            </p>
          </DashboardCard>

          <DashboardCard 
            title="Study Progress" 
            icon={<TrendingUp className="w-4 h-4 text-primary" />}
          >
            <div className="text-2xl font-bold">78%</div>
            <Progress value={78} className="mt-2" />
          </DashboardCard>

          <DashboardCard 
            title="Active Users" 
            icon={<Users className="w-4 h-4 text-primary" />}
          >
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              Online right now
            </p>
          </DashboardCard>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Recent Uploads */}
          <DashboardCard 
            title="Recent Uploads" 
            icon={<Upload className="w-4 h-4 text-primary" />}
            action={
              <Button variant="ghost" size="sm">
                View all <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            }
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {[
                { title: "Data Structures Notes", subject: "CSE", time: "2 hours ago", type: "PDF" },
                { title: "DBMS PYQ 2023", subject: "CSE", time: "4 hours ago", type: "PDF" },
                { title: "Machine Learning Lab", subject: "CSE", time: "1 day ago", type: "ZIP" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.title}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">{item.subject}</Badge>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Recommended Resources */}
          <DashboardCard 
            title="Recommended for You" 
            icon={<Star className="w-4 h-4 text-primary" />}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {[
                { title: "Operating Systems Complete Notes", downloads: 234, rating: 4.8 },
                { title: "Computer Networks PYQs", downloads: 189, rating: 4.9 },
                { title: "Software Engineering Project", downloads: 156, rating: 4.7 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-medium leading-tight">{item.title}</h4>
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Quick Upload */}
          <DashboardCard 
            title="Quick Upload" 
            icon={<Upload className="w-4 h-4 text-primary" />}
            className="lg:col-span-2 xl:col-span-1"
          >
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag & drop your files here
                </p>
                <Button size="sm" variant="outline">
                  Choose Files
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="secondary" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Notes
                </Button>
                <Button variant="secondary" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  PYQs
                </Button>
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Recent Announcements */}
        <DashboardCard 
          title="Recent Announcements" 
          icon={<Calendar className="w-4 h-4 text-primary" />}
          action={
            <Button variant="ghost" size="sm">
              View all <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          }
        >
          <div className="space-y-4">
            {[
              {
                title: "Mid-term Exam Schedule Released",
                content: "Check your exam timetable for Semester 6. Download hall tickets from the portal.",
                time: "1 hour ago",
                priority: "high"
              },
              {
                title: "New Research Papers Available",
                content: "Latest research papers in AI and Machine Learning have been uploaded to the library.",
                time: "3 hours ago",
                priority: "medium"
              },
              {
                title: "Campus Career Fair 2024",
                content: "Top companies will be visiting campus next month. Register for pre-placement talks.",
                time: "1 day ago",
                priority: "low"
              }
            ].map((announcement, index) => (
              <div key={index} className="flex space-x-4 p-4 bg-muted/30 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  announcement.priority === 'high' ? 'bg-destructive' :
                  announcement.priority === 'medium' ? 'bg-warning' : 'bg-success'
                }`} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{announcement.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{announcement.content}</p>
                  <p className="text-xs text-muted-foreground mt-2 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {announcement.time}
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
}