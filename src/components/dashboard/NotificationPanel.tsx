
import { CircleAlert } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const NOTIFICATIONS = [
  {
    id: 1,
    type: "alert",
    title: "Traffic Congestion",
    message: "Unusual congestion detected at Broadway & 7th St",
    time: "5 min ago",
    read: false,
  },
  {
    id: 2,
    type: "warning",
    title: "Sensor Malfunction",
    message: "Traffic sensor offline at Central Ave & Park Rd",
    time: "20 min ago",
    read: true,
  },
  {
    id: 3,
    type: "info",
    title: "AI Optimization",
    message: "Traffic light timing adjusted at 5 intersections",
    time: "1 hr ago",
    read: true,
  },
];

const NotificationPanel = () => {
  const unreadCount = NOTIFICATIONS.filter(n => !n.read).length;
  
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Recent Notifications</span>
        {unreadCount > 0 && (
          <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
            {unreadCount} unread
          </span>
        )}
      </div>

      <div className="space-y-2 max-h-80 overflow-auto">
        {NOTIFICATIONS.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-2 rounded-lg border ${notification.type === 'alert' 
              ? 'bg-red-50 border-red-200' 
              : notification.type === 'warning' 
                ? 'bg-yellow-50 border-yellow-200' 
                : 'bg-blue-50 border-blue-200'} ${notification.read ? 'opacity-70' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <CircleAlert className={`h-4 w-4 mr-2 ${notification.type === 'alert' 
                    ? 'text-red-500' 
                    : notification.type === 'warning' 
                      ? 'text-yellow-500' 
                      : 'text-blue-500'}`} />
                <span className="font-medium text-sm">{notification.title}</span>
              </div>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-xs ml-6 mt-1">{notification.message}</p>
          </div>
        ))}
      </div>
      
      <div className="pt-2 text-center">
        <Button variant="ghost" size="sm" className="text-xs">
          View All Notifications
        </Button>
      </div>
    </div>
  );
};

export default NotificationPanel;
