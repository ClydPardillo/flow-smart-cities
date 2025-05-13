
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, TrafficCone } from "lucide-react";

const MOCK_INTERSECTIONS = [
  { id: 1, name: "Main St & 5th Ave", lat: 20, lng: 30, status: "green" },
  { id: 2, name: "Broadway & 7th St", lat: 40, lng: 50, status: "yellow" },
  { id: 3, name: "Central Ave & Park Rd", lat: 60, lng: 120, status: "red" },
  { id: 4, name: "River Blvd & Market St", lat: 80, lng: 90, status: "green" },
  { id: 5, name: "Highland Ave & Oak St", lat: 70, lng: 150, status: "yellow" },
];

const TrafficMap = () => {
  const [selectedIntersection, setSelectedIntersection] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch(status) {
      case "green": return "bg-green-500";
      case "yellow": return "bg-yellow-500";
      case "red": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="w-full h-[500px] relative bg-slate-100 rounded-lg overflow-hidden">
      {/* This would normally use a real map library like Mapbox, Leaflet, or Google Maps */}
      <div className="absolute inset-0 bg-[#EDFBFF] p-2">
        {/* Map Grid Lines */}
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {Array(100).fill(0).map((_, i) => (
            <div key={i} className="border border-blue-100/30"></div>
          ))}
        </div>
        
        {/* Mock Roads */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-slate-300"></div>
          <div className="absolute top-2/4 left-0 right-0 h-2 bg-slate-300"></div>
          <div className="absolute top-3/4 left-0 right-0 h-1 bg-slate-300"></div>
          <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-slate-300"></div>
          <div className="absolute left-2/4 top-0 bottom-0 w-2 bg-slate-300"></div>
          <div className="absolute left-3/4 top-0 bottom-0 w-1 bg-slate-300"></div>
        </div>
        
        {/* Traffic Hotspots */}
        {MOCK_INTERSECTIONS.map(intersection => (
          <div 
            key={intersection.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${intersection.lat}%`, left: `${intersection.lng}%` }}
            onClick={() => setSelectedIntersection(intersection.id)}
          >
            <div className={`h-4 w-4 rounded-full ${getStatusColor(intersection.status)} animate-pulse shadow-lg`}></div>
            {selectedIntersection === intersection.id && (
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg z-10 w-40">
                <p className="font-medium text-xs">{intersection.name}</p>
                <p className="text-xs">
                  Status: <span className={`font-medium ${intersection.status === "green" ? "text-green-600" : intersection.status === "yellow" ? "text-yellow-600" : "text-red-600"}`}>
                    {intersection.status === "green" ? "Smooth" : intersection.status === "yellow" ? "Moderate" : "Congested"}
                  </span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="bg-white rounded-md w-8 h-8 flex items-center justify-center shadow">+</button>
        <button className="bg-white rounded-md w-8 h-8 flex items-center justify-center shadow">−</button>
      </div>
      
      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-md shadow-md">
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-green-500 mr-1"></span>
            <span>Smooth</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></span>
            <span>Moderate</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
            <span>Congested</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficMap;
