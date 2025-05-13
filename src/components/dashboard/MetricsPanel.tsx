
import { Gauge, ChartBar } from "lucide-react";

const METRICS = [
  {
    label: "Vehicle Count",
    value: "2,458",
    change: "+12%",
    status: "increase",
    icon: ChartBar,
  },
  {
    label: "Average Speed",
    value: "34 mph",
    change: "-3%",
    status: "decrease",
    icon: Gauge,
  },
  {
    label: "Wait Time",
    value: "45 sec",
    change: "-15%",
    status: "decrease",
    icon: ChartBar,
  },
];

const MetricsPanel = () => {
  return (
    <div className="space-y-4">
      {METRICS.map((metric) => (
        <div key={metric.label} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-smartcity-blue/10 flex items-center justify-center mr-3">
              <metric.icon className="h-5 w-5 text-smartcity-blue" />
            </div>
            <div>
              <p className="text-sm font-medium">{metric.label}</p>
              <p className="text-2xl font-bold">{metric.value}</p>
            </div>
          </div>
          <div className={`text-sm font-medium ${metric.status === "increase" ? "text-green-600" : "text-red-600"}`}>
            {metric.change}
          </div>
        </div>
      ))}
      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
        <p className="text-sm font-medium text-green-800">System Efficiency</p>
        <div className="mt-2 relative h-2 bg-green-200 rounded-full">
          <div className="absolute top-0 left-0 h-full w-[85%] bg-green-500 rounded-full"></div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-green-800">
          <span>0%</span>
          <span className="font-medium">85%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;
