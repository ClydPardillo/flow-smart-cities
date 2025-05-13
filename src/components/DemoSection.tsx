
import { Button } from '@/components/ui/button';
import ScrollFadeIn from './ScrollFadeIn';

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-smartcity-lightgray">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-smartcity-blue/10 text-smartcity-blue rounded-full text-sm font-medium mb-4">
              See It in Action
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-smartcity-blue mb-4">
              Watch Our System Transform Traffic
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our simulation shows how AI-powered traffic management can dramatically improve flow at busy intersections.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative">
              {/* Placeholder for video */}
              <div className="absolute inset-0 bg-smartcity-blue/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-smartcity-blue flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-smartcity-blue/90 transition-colors">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-smartcity-blue font-medium">Play Demo Video</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-smartcity-blue mb-2">Before Implementation</h4>
                  <img 
                    src="https://via.placeholder.com/300x200?text=Traffic+Congestion" 
                    alt="Before Traffic Optimization" 
                    className="rounded-lg w-full h-auto mb-3"
                  />
                  <p className="text-sm text-gray-600">Heavy congestion during peak hours</p>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-smartcity-blue mb-2">During Implementation</h4>
                  <img 
                    src="https://via.placeholder.com/300x200?text=System+Integration" 
                    alt="During System Integration" 
                    className="rounded-lg w-full h-auto mb-3"
                  />
                  <p className="text-sm text-gray-600">AI analyzing traffic patterns</p>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-smartcity-green mb-2">After Implementation</h4>
                  <img 
                    src="https://via.placeholder.com/300x200?text=Improved+Flow" 
                    alt="After Traffic Optimization" 
                    className="rounded-lg w-full h-auto mb-3"
                  />
                  <p className="text-sm text-gray-600">Smooth traffic flow achieved</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={300}>
          <div className="mt-12 text-center">
            <Button className="bg-smartcity-blue hover:bg-smartcity-blue/90 text-white">
              Request Full Demo
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default DemoSection;
