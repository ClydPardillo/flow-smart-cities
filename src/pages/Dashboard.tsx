
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Bell, Settings, MapPin, Gauge, ChartBar, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrafficMap from "@/components/dashboard/TrafficMap";
import MetricsPanel from "@/components/dashboard/MetricsPanel";
import ControlPanel from "@/components/dashboard/ControlPanel";
import PerformanceCharts from "@/components/dashboard/PerformanceCharts";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import IntersectionsView from "@/components/dashboard/IntersectionsView";
import AiInsights from "@/components/dashboard/AiInsights";
import SettingsView from "@/components/dashboard/SettingsView";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-smartcity-blue" />
            <h1 className="text-xl font-semibold">SmartFlow Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="container px-4">
          <TabsList className="grid w-full grid-cols-4 h-10 mb-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="intersections">Intersections</TabsTrigger>
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </Tabs>
      </header>

      {/* Main Content */}
      <main className="container pb-12 px-4">
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 space-y-6">
              {/* Map Section */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Live Traffic Map</CardTitle>
                  <CardDescription>Real-time traffic flow and congestion monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <TrafficMap />
                </CardContent>
              </Card>
              
              {/* Performance Charts */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Historical trends and optimization results</CardDescription>
                </CardHeader>
                <CardContent>
                  <PerformanceCharts />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              {/* Metrics Panel */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Key Metrics</CardTitle>
                  <CardDescription>Current traffic status</CardDescription>
                </CardHeader>
                <CardContent>
                  <MetricsPanel />
                </CardContent>
              </Card>
              
              {/* Control Panel */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Control Panel</CardTitle>
                  <CardDescription>Manual signal override</CardDescription>
                </CardHeader>
                <CardContent>
                  <ControlPanel />
                </CardContent>
              </Card>
              
              {/* Notifications */}
              <Card>
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Alerts and incidents</CardDescription>
                  </div>
                  <CircleAlert className="h-5 w-5 text-red-500" />
                </CardHeader>
                <CardContent>
                  <NotificationPanel />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="intersections">
          <IntersectionsView />
        </TabsContent>
        
        <TabsContent value="ai-insights">
          <AiInsights />
        </TabsContent>
        
        <TabsContent value="settings">
          <SettingsView />
        </TabsContent>
      </main>
    </div>
  );
};

export default Dashboard;
