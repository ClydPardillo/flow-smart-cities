
import ScrollFadeIn from './ScrollFadeIn';
import { Brain, Network, TrafficCone, Cpu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Network className="h-12 w-12 text-smartcity-blue" />,
      title: "Real-time Traffic Data Collection",
      description: "Our network of IoT sensors collects comprehensive traffic data including vehicle counts, speeds, and congestion levels at key points throughout the city.",
      color: "blue"
    },
    {
      icon: <Brain className="h-12 w-12 text-smartcity-teal" />,
      title: "AI-Driven Signal Control",
      description: "Advanced machine learning algorithms dynamically adjust traffic signal timing based on current conditions and historical patterns.",
      color: "teal"
    },
    {
      icon: <Cpu className="h-12 w-12 text-smartcity-green" />,
      title: "Dynamic Route Optimization",
      description: "Our system calculates optimal traffic flows and rerouting suggestions to distribute vehicles efficiently across the transportation network.",
      color: "green"
    },
    {
      icon: <TrafficCone className="h-12 w-12 text-smartcity-blue" />,
      title: "Predictive Congestion Management",
      description: "Using pattern recognition, our AI predicts traffic bottlenecks before they occur and implements preventative measures.",
      color: "blue"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-smartcity-blue/10 text-smartcity-blue rounded-full text-sm font-medium mb-4">
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-smartcity-blue mb-4">
              Smart Technology for Smoother Traffic
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our integrated system combines cutting-edge hardware and software to create an intelligent traffic management solution that evolves with your city's needs.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollFadeIn key={index} delay={index * 100}>
              <Card className={`border-l-4 border-smartcity-${feature.color} h-full transition-transform hover:scale-[1.02] duration-300`}>
                <CardHeader>
                  <div className={`bg-smartcity-${feature.color}/10 p-3 rounded-lg inline-block mb-3`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-smartcity-blue">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
