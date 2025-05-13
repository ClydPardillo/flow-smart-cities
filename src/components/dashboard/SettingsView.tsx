
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Settings, Bell, ChartBar } from "lucide-react";

const SettingsView = () => {
  return (
    <div className="space-y-6 mt-6">
      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Settings</CardTitle>
              <CardDescription>Configure your dashboard preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dashboardName">Dashboard Name</Label>
                  <Input id="dashboardName" defaultValue="Traffic Control Center" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="refreshRate">Data Refresh Rate</Label>
                  <select 
                    id="refreshRate"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue="30"
                  >
                    <option value="10">10 seconds</option>
                    <option value="30">30 seconds</option>
                    <option value="60">1 minute</option>
                    <option value="300">5 minutes</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="defaultView">Default View</Label>
                <select 
                  id="defaultView"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  defaultValue="overview"
                >
                  <option value="overview">Overview</option>
                  <option value="intersections">Intersections</option>
                  <option value="ai-insights">AI Insights</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="lightTheme" 
                      name="theme" 
                      value="light" 
                      defaultChecked
                      className="mr-2" 
                    />
                    <Label htmlFor="lightTheme">Light</Label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="darkTheme" 
                      name="theme" 
                      value="dark"
                      className="mr-2" 
                    />
                    <Label htmlFor="darkTheme">Dark</Label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="systemTheme" 
                      name="theme" 
                      value="system"
                      className="mr-2" 
                    />
                    <Label htmlFor="systemTheme">System</Label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure your alert preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-medium">Traffic Alerts</h3>
                    <p className="text-sm text-gray-500">Get notifications for unusual traffic patterns</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="trafficAlerts" defaultChecked className="mr-2" />
                    <Label htmlFor="trafficAlerts">Enable</Label>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-medium">System Alerts</h3>
                    <p className="text-sm text-gray-500">Get notifications for system issues or sensor problems</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="systemAlerts" defaultChecked className="mr-2" />
                    <Label htmlFor="systemAlerts">Enable</Label>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-medium">AI Optimization Events</h3>
                    <p className="text-sm text-gray-500">Get notifications when AI makes significant changes</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="aiAlerts" defaultChecked className="mr-2" />
                    <Label htmlFor="aiAlerts">Enable</Label>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Send critical alerts to your email</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="emailAlerts" className="mr-2" />
                    <Label htmlFor="emailAlerts">Enable</Label>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button>Save Preferences</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ai">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ChartBar className="mr-2 h-5 w-5" />
                AI System Configuration
              </CardTitle>
              <CardDescription>Configure AI behavior and thresholds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="aiMode">AI Operation Mode</Label>
                  <select 
                    id="aiMode"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue="active"
                  >
                    <option value="monitoring">Monitoring Only</option>
                    <option value="suggestions">Suggestions (Manual Apply)</option>
                    <option value="active">Active Optimization</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label>Optimization Priority</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="congestionWeight">Congestion Reduction</Label>
                      <div className="flex items-center mt-2">
                        <input 
                          type="range" 
                          id="congestionWeight" 
                          min="1" 
                          max="10" 
                          defaultValue="8"
                          className="w-full" 
                        />
                        <span className="ml-2 text-sm">8</span>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="emissionsWeight">Emissions Reduction</Label>
                      <div className="flex items-center mt-2">
                        <input 
                          type="range" 
                          id="emissionsWeight" 
                          min="1" 
                          max="10" 
                          defaultValue="6"
                          className="w-full" 
                        />
                        <span className="ml-2 text-sm">6</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Advanced Settings</Label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="peakHourAdjustment" 
                        defaultChecked
                        className="mr-2" 
                      />
                      <Label htmlFor="peakHourAdjustment">Peak Hour Auto-Adjustment</Label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="weatherAdaptation" 
                        defaultChecked
                        className="mr-2" 
                      />
                      <Label htmlFor="weatherAdaptation">Weather Condition Adaptation</Label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="emergencyPriority" 
                        defaultChecked
                        className="mr-2" 
                      />
                      <Label htmlFor="emergencyPriority">Emergency Vehicle Priority</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Apply Configuration</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                System Settings
              </CardTitle>
              <CardDescription>Configure system-level settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="apiEndpoint">API Endpoint</Label>
                    <Input id="apiEndpoint" defaultValue="https://api.smartflow.example.com/v1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">API Key</Label>
                    <Input id="apiKey" type="password" defaultValue="••••••••••••••••" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dataRetention">Data Retention Period</Label>
                  <select 
                    id="dataRetention"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue="90"
                  >
                    <option value="30">30 days</option>
                    <option value="90">90 days</option>
                    <option value="180">180 days</option>
                    <option value="365">1 year</option>
                  </select>
                </div>
                
                <div className="flex justify-between pt-6 mt-6 border-t">
                  <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    Reset All Settings
                  </Button>
                  <div className="space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save System Settings</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsView;
