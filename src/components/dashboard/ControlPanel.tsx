
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrafficCone } from "lucide-react";

const ControlPanel = () => {
  const [override, setOverride] = useState(false);
  const [selectedIntersection, setSelectedIntersection] = useState("intersection-1");
  const [selectedMode, setSelectedMode] = useState("auto");

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
        <p className="text-sm">System running normally</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Select Intersection</label>
        <select 
          value={selectedIntersection}
          onChange={(e) => setSelectedIntersection(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="intersection-1">Main St & 5th Ave</option>
          <option value="intersection-2">Broadway & 7th St</option>
          <option value="intersection-3">Central Ave & Park Rd</option>
          <option value="intersection-4">River Blvd & Market St</option>
          <option value="intersection-5">Highland Ave & Oak St</option>
        </select>
      </div>

      <div>
        <div className="text-sm font-medium mb-2">Signal Control Mode</div>
        <div className="flex items-center space-x-2 mb-4">
          <button 
            className={`px-3 py-1.5 rounded-md text-sm ${selectedMode === "auto" ? "bg-smartcity-blue text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedMode("auto")}
          >
            AI Control
          </button>
          <button 
            className={`px-3 py-1.5 rounded-md text-sm ${selectedMode === "manual" ? "bg-smartcity-blue text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedMode("manual")}
          >
            Manual Control
          </button>
        </div>
      </div>

      {selectedMode === "manual" && (
        <div className="space-y-3 border-t pt-3">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">North-South Green</Button>
            <Button variant="outline" className="w-full">East-West Green</Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">Left Turn Only</Button>
            <Button variant="outline" className="w-full">All Red</Button>
          </div>
          <Button variant="destructive" className="w-full flex items-center justify-center">
            <TrafficCone className="h-4 w-4 mr-2" />
            Emergency Override
          </Button>
        </div>
      )}

      <div className="text-xs text-gray-500 mt-2 p-2 bg-yellow-50 rounded border border-yellow-200">
        Note: Manual overrides will revert to AI control after 10 minutes unless extended.
      </div>
    </div>
  );
};

export default ControlPanel;
