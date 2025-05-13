
import { Gauge, Route, Clock } from "lucide-react";

const METRICS = [
  {
    label: "Vehicle Count",
    value: "2,458",
    change: "+12%",
    status: "increase",
    icon: Route,
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
    icon: Clock,
  },
];

const MetricsPanel = () => {
  return (
    <div className="space-y-4">
      {METRICS.map((metric) => (
        <div key={metric.label} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-smartcity-teal/10 flex items-center justify-center mr-3">
              <metric.icon className="h-5 w-5 text-smartcity-teal" />
            </div>
            <div>
              <p className="text-sm font-medium text-smartcity-darkgray">{metric.label}</p>
              <p className="text-2xl font-bold text-smartcity-blue">{metric.value}</p>
            </div>
          </div>
          <div className={`text-sm font-medium ${metric.status === "increase" ? "text-smartcity-green" : "text-red-500"}`}>
            {metric.change}
          </div>
        </div>
      ))}
      <div className="bg-white border border-slate-100 rounded-lg p-4 mt-4 shadow-sm">
        <p className="text-sm font-medium text-smartcity-blue">System Efficiency</p>
        <div className="mt-2 relative h-2 bg-slate-100 rounded-full">
          <div className="absolute top-0 left-0 h-full w-[85%] bg-smartcity-green rounded-full"></div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-smartcity-darkgray">
          <span>0%</span>
          <span className="font-medium">85%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;
