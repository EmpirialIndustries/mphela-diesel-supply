
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Factory, Fuel, Shield, Clock, ArrowRight, Target, Globe, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const ServicesOverview = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: Factory,
      title: "Industrial Bulk Supply",
      description: "Enterprise-grade diesel solutions for mining operations, manufacturing plants, and heavy industry with guaranteed quality and competitive pricing.",
      features: ["500,000L+ capacity deliveries", "0.005% & 0.05% sulphur options", "Custom blending available", "24/7 emergency supply"],
      industries: ["Mining & Extraction", "Manufacturing", "Power Generation", "Marine Operations"],
      gradient: "from-gray-800 to-black"
    },
    {
      icon: Truck,
      title: "Fleet & Transport Solutions",
      description: "Comprehensive fuel management for commercial transport fleets, logistics companies, and distribution networks across South Africa.",
      features: ["Fleet fuel cards", "Real-time consumption tracking", "Multi-location delivery", "Preventive maintenance oils"],
      industries: ["Transport & Logistics", "Construction", "Agriculture", "Emergency Services"],
      gradient: "from-black to-gray-800"
    },
    {
      icon: Fuel,
      title: "Wholesale Distribution",
      description: "Strategic partnerships with fuel retailers, independent stations, and regional distributors with competitive wholesale rates and marketing support.",
      features: ["Volume-based pricing tiers", "Marketing & promotional support", "Technical training programs", "Credit facilities available"],
      industries: ["Fuel Retailers", "Independent Stations", "Rural Cooperatives", "Corporate Accounts"],
      gradient: "from-gray-700 to-black"
    },
    {
      icon: Shield,
      title: "Premium Quality Assurance",
      description: "ISO 9001 certified fuel with comprehensive testing, contamination prevention, and quality guarantees for mission-critical applications.",
      features: ["Laboratory-tested batches", "Contamination insurance", "Quality certificates", "Storage tank cleaning"],
      industries: ["Aerospace", "Healthcare", "Data Centers", "Precision Manufacturing"],
      gradient: "from-gray-900 to-black"
    }
  ];

  const capabilities = [
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Round-the-clock availability for critical fuel emergencies with guaranteed 4-hour response time.",
      stat: "< 4 Hours"
    },
    {
      icon: Target,
      title: "Precision Logistics",
      description: "GPS-tracked deliveries with real-time monitoring and predictive maintenance scheduling.",
      stat: "99.7% On-Time"
    },
    {
      icon: Globe,
      title: "National Coverage",
      description: "Strategic depot network covering all major industrial centers and remote mining locations.",
      stat: "9 Provinces"
    },
    {
      icon: Zap,
      title: "Digital Integration",
      description: "Advanced fuel management systems with API integration and automated reporting.",
      stat: "100% Digital"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(serviceInterval);
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-80 h-80 bg-gray-50 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gray-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Services Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-8 py-4 bg-black text-white rounded-full text-sm font-semibold tracking-wider">
              ENTERPRISE SOLUTIONS
            </span>
          </div>
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Comprehensive Fuel
            <span className="block gradient-text mt-2">Management Solutions</span>
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Leveraging six decades of industry expertise to deliver sophisticated fuel solutions 
            that power South Africa's most demanding industrial operations with precision and reliability.
          </p>
        </div>

        {/* Core Capabilities Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 group cursor-pointer bg-white hover:bg-black overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-white/20 transition-all duration-500 inline-block mb-6">
                    <Icon size={32} className="text-black group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-500">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 font-cormorant leading-relaxed mb-4 transition-colors duration-500">
                    {capability.description}
                  </p>
                  <div className="text-2xl font-bold gradient-text group-hover:text-white transition-colors duration-500">
                    {capability.stat}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Advanced Services Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-8">
              Tailored Solutions
              <span className="block text-3xl md:text-4xl text-gray-600 mt-2 font-cormorant italic">
                For Every Industry Challenge
              </span>
            </h3>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed font-cormorant">
              From the diamond mines of the Northern Cape to the automotive assembly lines of Port Elizabeth, 
              our specialized fuel solutions are engineered to meet the unique demands of South Africa's 
              diverse industrial landscape with unmatched precision and reliability.
            </p>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-700 border-2 ${
                    activeService === index 
                      ? 'bg-black text-white border-black shadow-2xl scale-105' 
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full mr-4 transition-all duration-500 ${
                      activeService === index ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      <service.icon size={24} className={`transition-colors duration-500 ${
                        activeService === index ? 'text-white' : 'text-black'
                      }`} />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold">
                      {service.title}
                    </h4>
                  </div>
                  
                  {activeService === index && (
                    <div className="space-y-4 animate-fade-in">
                      <p className="text-gray-200 font-cormorant leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2 text-white">Key Features:</h5>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 text-white">Target Industries:</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((industry, i) => (
                              <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full text-gray-200">
                                {industry}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-semibold transition-all duration-500 hover-lift group">
                <span className="flex items-center">
                  Explore All Services
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Selected Service Detail Card */}
            <Card className={`border-none shadow-2xl overflow-hidden bg-gradient-to-br ${services[activeService].gradient} text-white`}>
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-full bg-white/20 mr-6">
                    <services[activeService].icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold">
                    {services[activeService].title}
                  </h3>
                </div>
                
                <p className="text-gray-200 font-cormorant text-lg leading-relaxed mb-8">
                  {services[activeService].description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Advanced Features:</h4>
                    <div className="grid gap-3">
                      {services[activeService].features.map((feature, i) => (
                        <div key={i} className="flex items-center p-3 bg-white/10 rounded-lg">
                          <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                          <span className="font-cormorant">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Specialized Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {services[activeService].industries.map((industry, i) => (
                        <span key={i} className="bg-white/20 px-4 py-2 rounded-full text-sm font-cormorant">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Navigation Indicators */}
            <div className="flex justify-center space-x-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-500 ${
                    activeService === index ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
