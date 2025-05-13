
import ScrollFadeIn from './ScrollFadeIn';
import AnimatedCounter from './AnimatedCounter';
import { Car, BarChart2, Bike } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-smartcity-blue to-smartcity-teal text-white">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming City Mobility
            </h2>
            <p className="text-gray-100 max-w-3xl mx-auto">
              Our AI-powered system delivers measurable improvements to urban traffic flow, creating a more efficient,
              sustainable and livable city environment.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollFadeIn delay={100}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
              <Car className="h-12 w-12 mx-auto mb-6 text-smartcity-green" />
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={28} suffix="%" />
              </div>
              <p className="text-xl font-medium mb-2">Reduced Travel Time</p>
              <p className="text-gray-200 text-sm">
                Average commute times decrease significantly with optimized traffic signals and routing.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
              <BarChart2 className="h-12 w-12 mx-auto mb-6 text-smartcity-green" />
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={32} suffix="%" />
              </div>
              <p className="text-xl font-medium mb-2">Less Pollution</p>
              <p className="text-gray-200 text-sm">
                Reduced idle time and smoother traffic flow lead to significant emissions reductions.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={300}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
              <Bike className="h-12 w-12 mx-auto mb-6 text-smartcity-green" />
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={45} suffix="%" />
              </div>
              <p className="text-xl font-medium mb-2">Improved Safety</p>
              <p className="text-gray-200 text-sm">
                Intelligent traffic management reduces accidents and creates safer streets for all users.
              </p>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Additional benefits */}
        <ScrollFadeIn delay={400}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-smartcity-green">Long-Term City Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-smartcity-green/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-smartcity-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-100">
                      <strong className="font-medium">Enhanced Urban Planning</strong> - Data-driven insights guide future infrastructure development.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-smartcity-green/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-smartcity-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-100">
                      <strong className="font-medium">Economic Growth</strong> - Businesses benefit from improved logistics and commute times.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-smartcity-green/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-smartcity-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-100">
                      <strong className="font-medium">Energy Savings</strong> - Lower fuel consumption and more efficient energy use across the transportation system.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-smartcity-green">Citizen Experience</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-smartcity-green/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-smartcity-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-100">
                      <strong className="font-medium">Reduced Stress</strong> - Less time spent in traffic means happier, more productive citizens.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-smartcity-green/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-smartcity-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-100">
                      <strong className="font-medium">Real-Time Information</strong> - Access to traffic updates through companion mobile applications.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-smartcity-green/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-smartcity-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-100">
                      <strong className="font-medium">Better Air Quality</strong> - Healthier urban environment with reduced vehicle emissions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Benefits;
