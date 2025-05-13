
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TrafficCone } from "lucide-react";

const INTERSECTIONS = [
  { 
    id: 1, 
    name: "Main St & 5th Ave", 
    status: "green", 
    vehicleCount: 245,
    avgSpeed: 34,
    waitTime: 25,
    lastOptimized: "10 min ago"
  },
  { 
    id: 2, 
    name: "Broadway & 7th St", 
    status: "yellow", 
    vehicleCount: 367,
    avgSpeed: 22,
    waitTime: 45,
    lastOptimized: "15 min ago"
  },
  { 
    id: 3, 
    name: "Central Ave & Park Rd", 
    status: "red", 
    vehicleCount: 520,
    avgSpeed: 12,
    waitTime: 90,
    lastOptimized: "5 min ago"
  },
  { 
    id: 4, 
    name: "River Blvd & Market St", 
    status: "green", 
    vehicleCount: 198,
    avgSpeed: 32,
    waitTime: 30,
    lastOptimized: "22 min ago"
  },
  { 
    id: 5, 
    name: "Highland Ave & Oak St", 
    status: "yellow", 
    vehicleCount: 310,
    avgSpeed: 25,
    waitTime: 40,
    lastOptimized: "18 min ago"
  },
];

const IntersectionsView = () => {
  const [selectedIntersection, setSelectedIntersection] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch(status) {
      case "green": return "bg-green-500";
      case "yellow": return "bg-yellow-500";
      case "red": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case "green": return "Smooth";
      case "yellow": return "Moderate";
      case "red": return "Congested";
      default: return "Unknown";
    }
  };

  return (
    <div className="space-y-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>All Intersections</CardTitle>
          <CardDescription>Status and performance of all monitored intersections</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead>Intersection</TableHead>
                <TableHead>Vehicle Count</TableHead>
                <TableHead>Avg Speed</TableHead>
                <TableHead>Wait Time</TableHead>
                <TableHead>Last Optimized</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {INTERSECTIONS.map((intersection) => (
                <TableRow key={intersection.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <div className={`h-3 w-3 rounded-full ${getStatusColor(intersection.status)} mr-2`}></div>
                      <span>{getStatusText(intersection.status)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{intersection.name}</TableCell>
                  <TableCell>{intersection.vehicleCount}</TableCell>
                  <TableCell>{intersection.avgSpeed} mph</TableCell>
                  <TableCell>{intersection.waitTime} sec</TableCell>
                  <TableCell>{intersection.lastOptimized}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedIntersection(intersection.id)}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {selectedIntersection && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>
                {INTERSECTIONS.find(i => i.id === selectedIntersection)?.name}
              </CardTitle>
              <CardDescription>Detailed intersection controls and stats</CardDescription>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSelectedIntersection(null)}
            >
              ✕
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-medium mb-4">Signal Control</h3>
                <div className="space-y-3">
                  <Button className="w-full" variant="outline">Optimize Now</Button>
                  <Button className="w-full" variant="outline">View Cameras</Button>
                  <Button className="w-full flex items-center justify-center" variant="destructive">
                    <TrafficCone className="h-4 w-4 mr-2" />
                    Manual Override
                  </Button>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="font-medium mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Vehicle Count</div>
                    <div className="text-2xl font-bold mt-1">
                      {INTERSECTIONS.find(i => i.id === selectedIntersection)?.vehicleCount}
                    </div>
                    <div className="text-xs text-green-600 mt-1">+5% from average</div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Average Speed</div>
                    <div className="text-2xl font-bold mt-1">
                      {INTERSECTIONS.find(i => i.id === selectedIntersection)?.avgSpeed} mph
                    </div>
                    <div className="text-xs text-red-600 mt-1">-2 mph from average</div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Wait Time</div>
                    <div className="text-2xl font-bold mt-1">
                      {INTERSECTIONS.find(i => i.id === selectedIntersection)?.waitTime} sec
                    </div>
                    <div className="text-xs text-green-600 mt-1">-10 sec improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default IntersectionsView;
