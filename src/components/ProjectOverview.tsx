import ScrollFadeIn from './ScrollFadeIn';
import { MapPin, Server, Network, Route } from 'lucide-react';

const ProjectOverview = () => {
  return (
    <section id="overview" className="py-20 bg-smartcity-lightgray">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-smartcity-blue mb-4">Project Overview</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our AI-Powered IoT system creates a network of intelligent devices that collect, analyze, and optimize traffic flow in real-time,
              reducing congestion and improving city mobility.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <ScrollFadeIn>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="relative w-full h-96">
                  {/* Smart City Infographic */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-br from-smartcity-blue to-smartcity-teal/70">
                    {/* City outline */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        {/* City skyline silhouette */}
                        <path 
                          d="M0,250 L30,250 L30,200 L60,200 L60,220 L90,220 L90,180 L120,180 L120,200 L150,200 L150,150 L170,150 L170,120 L190,120 L190,170 L220,170 L220,140 L240,140 L240,190 L270,190 L270,220 L300,220 L300,170 L330,170 L330,200 L360,200 L360,230 L400,230 L400,250 L0,250" 
                          fill="rgba(255,255,255,0.1)" 
                        />
                        
                        {/* Roads */}
                        <line x1="50" y1="120" x2="50" y2="250" stroke="rgba(255,255,255,0.5)" strokeWidth="4" />
                        <line x1="150" y1="100" x2="150" y2="250" stroke="rgba(255,255,255,0.5)" strokeWidth="4" />
                        <line x1="250" y1="130" x2="250" y2="250" stroke="rgba(255,255,255,0.5)" strokeWidth="4" />
                        <line x1="350" y1="150" x2="350" y2="250" stroke="rgba(255,255,255,0.5)" strokeWidth="4" />
                        <line x1="0" y1="180" x2="400" y2="180" stroke="rgba(255,255,255,0.5)" strokeWidth="6" />
                        
                        {/* Traffic signals */}
                        <circle cx="50" cy="180" r="8" fill="#44CF6C" className="animate-pulse-light" />
                        <circle cx="150" cy="180" r="8" fill="#44CF6C" className="animate-pulse-light" />
                        <circle cx="250" cy="180" r="8" fill="#44CF6C" className="animate-pulse-light" />
                        <circle cx="350" cy="180" r="8" fill="#44CF6C" className="animate-pulse-light" />
                        
                        {/* Data flow lines */}
                        <path 
                          d="M50,180 C100,120 200,100 250,180" 
                          fill="none" 
                          stroke="rgba(68,207,108,0.6)" 
                          strokeWidth="2" 
                          strokeDasharray="5,5" 
                          className="animate-data-flow" 
                        />
                        <path 
                          d="M150,180 C200,140 250,140 350,180" 
                          fill="none" 
                          stroke="rgba(68,207,108,0.6)" 
                          strokeWidth="2" 
                          strokeDasharray="5,5" 
                          className="animate-data-flow" 
                        />
                      </svg>
                    </div>
                    
                    {/* Text overlays */}
                    <div className="absolute top-4 left-4 text-white font-bold text-xl">Smart City Network</div>
                    <div className="absolute bottom-4 right-4 bg-smartcity-blue/80 p-2 rounded text-white text-sm">
                      Real-time data collection & processing
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <ScrollFadeIn>
              <h3 className="text-2xl font-bold text-smartcity-blue">How Our System Works</h3>
              <p className="text-gray-600 mb-6">
                Our proprietary system creates a mesh network of interconnected devices that monitor, analyze, and optimize traffic patterns
                using artificial intelligence and machine learning algorithms.
              </p>
            </ScrollFadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ScrollFadeIn delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-smartcity-teal">
                  <div className="flex items-center mb-4">
                    <div className="bg-smartcity-teal/10 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-smartcity-teal" />
                    </div>
                    <h4 className="text-lg font-semibold">IoT Sensor Network</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Strategically placed sensors collect real-time traffic data at key intersections and thoroughfares.
                  </p>
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-smartcity-blue">
                  <div className="flex items-center mb-4">
                    <div className="bg-smartcity-blue/10 p-3 rounded-lg mr-4">
                      <Server className="h-6 w-6 text-smartcity-blue" />
                    </div>
                    <h4 className="text-lg font-semibold">Edge Computing</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Local processing units analyze data to make immediate signal timing adjustments with minimal latency.
                  </p>
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-smartcity-green">
                  <div className="flex items-center mb-4">
                    <div className="bg-smartcity-green/10 p-3 rounded-lg mr-4">
                      <Network className="h-6 w-6 text-smartcity-green" />
                    </div>
                    <h4 className="text-lg font-semibold">Cloud Integration</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    All data is synchronized to our cloud platform for deeper analysis and system-wide optimization.
                  </p>
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-smartcity-teal">
                  <div className="flex items-center mb-4">
                    <div className="bg-smartcity-teal/10 p-3 rounded-lg mr-4">
                      <Route className="h-6 w-6 text-smartcity-teal" />
                    </div>
                    <h4 className="text-lg font-semibold">Adaptive Control</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Traffic signals automatically adjust their timing based on current conditions and predictive modeling.
                  </p>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
