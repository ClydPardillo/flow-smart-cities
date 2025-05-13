
import { Button } from '@/components/ui/button';
import ScrollFadeIn from './ScrollFadeIn';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="bg-gradient-to-br from-smartcity-blue to-smartcity-teal rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your City's Traffic?</h2>
                <p className="text-lg text-gray-100 mb-8">
                  Join the growing network of smart cities using our AI-powered IoT solution to reduce congestion, 
                  lower emissions, and improve quality of life for all citizens.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-smartcity-green hover:bg-smartcity-green/90 text-white font-semibold">
                    Request Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Abstract city representation */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full"></div>
                  
                  <svg viewBox="0 0 400 300" className="w-full h-auto">
                    {/* Connected city illustration */}
                    <circle cx="200" cy="150" r="70" fill="rgba(255,255,255,0.1)" />
                    <circle cx="200" cy="150" r="40" fill="rgba(255,255,255,0.15)" />
                    
                    {/* Dots representing IoT devices */}
                    <circle cx="140" cy="100" r="8" fill="#44CF6C" className="animate-pulse-light" />
                    <circle cx="260" cy="120" r="8" fill="#44CF6C" className="animate-pulse-light" />
                    <circle cx="220" cy="220" r="8" fill="#44CF6C" className="animate-pulse-light" />
                    <circle cx="160" cy="190" r="8" fill="#44CF6C" className="animate-pulse-light" />
                    <circle cx="200" cy="150" r="15" fill="#FFFFFF" className="animate-pulse-light" />
                    
                    {/* Connection lines */}
                    <line x1="140" y1="100" x2="200" y2="150" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="260" y1="120" x2="200" y2="150" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="220" y1="220" x2="200" y2="150" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="160" y1="190" x2="200" y2="150" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-white font-bold">Your City</div>
                    <div className="text-smartcity-green text-sm">Connected</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                </div>
                <div>
                  <blockquote className="text-white italic mb-2">
                    "Implementing this system reduced our downtown congestion by 35% and dramatically improved air quality. 
                    It's been a game-changer for our community."
                  </blockquote>
                  <div className="text-white font-medium">Mayor Alex Johnson</div>
                  <div className="text-white/70 text-sm">Metropolis Smart City Initiative</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default CTA;
