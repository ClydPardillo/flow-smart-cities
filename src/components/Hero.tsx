
import { Button } from '@/components/ui/button';
import { Brain, Cpu, Network } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-smartcity-blue via-smartcity-blue/90 to-smartcity-teal/80 overflow-hidden">
      {/* Decorative dots/circles in the background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute top-60 left-10 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-48 h-48 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-20 right-60 w-28 h-28 bg-white/5 rounded-full"></div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <ScrollFadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Smarter Streets, <br />
                <span className="text-smartcity-green">Smoother Cities</span>
              </h1>
            </ScrollFadeIn>
            
            <ScrollFadeIn delay={200}>
              <p className="text-lg md:text-xl text-gray-100">
                Revolutionizing urban mobility by reducing congestion using
                cutting-edge AI and IoT technologies that adapt to real traffic conditions.
              </p>
            </ScrollFadeIn>
            
            <ScrollFadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-smartcity-green hover:bg-smartcity-green/90 text-white">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn delay={600}>
              <div className="flex items-center space-x-6 pt-8">
                <div className="flex items-center">
                  <div className="h-1 w-8 bg-smartcity-green rounded mr-2"></div>
                  <span className="text-gray-200">AI-Powered</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-8 bg-smartcity-green rounded mr-2"></div>
                  <span className="text-gray-200">IoT-Connected</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-8 bg-smartcity-green rounded mr-2"></div>
                  <span className="text-gray-200">Real-Time Data</span>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
          
          <div className="relative">
            <ScrollFadeIn delay={300}>
              <div className="relative w-full h-80 lg:h-96">
                {/* City grid with animated elements */}
                <div className="absolute inset-0 bg-smartcity-teal/20 rounded-lg border border-white/10 backdrop-blur-sm p-6">
                  <div className="relative h-full w-full">
                    {/* Abstract city grid representation */}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1.5">
                      {Array(64).fill(0).map((_, i) => (
                        <div 
                          key={i} 
                          className={`
                            ${i % 9 === 0 ? 'bg-smartcity-green/40' : 'bg-white/10'}
                            ${i % 7 === 0 ? 'animate-pulse-light' : ''}
                            rounded-sm
                          `}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Animated icons */}
                    <div className="absolute top-1/4 left-1/4 animate-float">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 animate-pulse-light">
                      <Cpu className="w-10 h-10 text-smartcity-green" />
                    </div>
                    <div className="absolute top-1/3 right-1/4">
                      <Network className="w-8 h-8 text-white/70" />
                    </div>
                    
                    {/* Connecting lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line 
                        x1="25%" y1="25%" 
                        x2="75%" y2="75%" 
                        stroke="rgba(255,255,255,0.2)" 
                        strokeWidth="1" 
                        strokeDasharray="5,5" 
                        className="animate-data-flow"
                      />
                      <line 
                        x1="30%" y1="30%" 
                        x2="70%" y2="30%" 
                        stroke="rgba(68,207,108,0.3)" 
                        strokeWidth="1" 
                        strokeDasharray="5,5"
                        className="animate-data-flow"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
            
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-smartcity-green/40 via-smartcity-green to-smartcity-teal/40 p-1 px-6 rounded-full">
              <span className="text-white text-sm font-medium">Smart City Network</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
