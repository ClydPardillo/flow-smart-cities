
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend
} from "recharts";

// Sample data for charts
const trafficData = [
  { time: '8 AM', vehicles: 1200, congestion: 40, optimized: 25 },
  { time: '9 AM', vehicles: 1800, congestion: 72, optimized: 45 },
  { time: '10 AM', vehicles: 1400, congestion: 50, optimized: 30 },
  { time: '11 AM', vehicles: 1300, congestion: 45, optimized: 25 },
  { time: '12 PM', vehicles: 1520, congestion: 55, optimized: 32 },
  { time: '1 PM', vehicles: 1600, congestion: 60, optimized: 35 },
  { time: '2 PM', vehicles: 1450, congestion: 52, optimized: 28 },
  { time: '3 PM', vehicles: 1700, congestion: 65, optimized: 38 },
  { time: '4 PM', vehicles: 2000, congestion: 80, optimized: 48 },
  { time: '5 PM', vehicles: 2200, congestion: 90, optimized: 55 },
  { time: '6 PM', vehicles: 1900, congestion: 75, optimized: 45 },
];

const PerformanceCharts = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Traffic Flow (24hr)</h3>
          <div className="h-64 bg-slate-50 rounded-lg p-4">
            <ChartContainer config={{
              traffic: { color: "#3E92CC" }
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3E92CC" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3E92CC" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    width={30}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="vehicles" 
                    name="traffic"
                    stroke="#3E92CC" 
                    fillOpacity={1}
                    fill="url(#colorTraffic)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Congestion Reduction</h3>
          <div className="h-64 bg-slate-50 rounded-lg p-4">
            <ChartContainer config={{
              before: { color: "#EF4444" },
              after: { color: "#22C55E" }
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    width={30}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar 
                    dataKey="congestion" 
                    name="before"
                    fill="#EF4444" 
                    radius={[4, 4, 0, 0]} 
                  />
                  <Bar 
                    dataKey="optimized" 
                    name="after"
                    fill="#22C55E" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </div>
      
      {/* Weekly trends */}
      <div>
        <h3 className="text-sm font-medium mb-2">Weekly AI Optimization Performance</h3>
        <div className="h-64 bg-slate-50 rounded-lg p-4">
          <ChartContainer config={{
            waitTime: { color: "#F59E0B" },
            fuelSaved: { color: "#3E92CC" }
          }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={[
                  { day: 'Mon', waitTime: 65, fuelSaved: 18 },
                  { day: 'Tue', waitTime: 59, fuelSaved: 22 },
                  { day: 'Wed', waitTime: 80, fuelSaved: 15 },
                  { day: 'Thu', waitTime: 55, fuelSaved: 24 },
                  { day: 'Fri', waitTime: 78, fuelSaved: 17 },
                  { day: 'Sat', waitTime: 40, fuelSaved: 30 },
                  { day: 'Sun', waitTime: 35, fuelSaved: 33 }
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis 
                  yAxisId="left"
                  axisLine={false}
                  tickLine={false}
                  width={30}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  axisLine={false}
                  tickLine={false}
                  width={30}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="waitTime" 
                  name="waitTime"
                  stroke="#F59E0B" 
                  strokeWidth={2} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="fuelSaved" 
                  name="fuelSaved"
                  stroke="#3E92CC" 
                  strokeWidth={2} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCharts;
