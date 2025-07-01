
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import ServiceCard from "./services/ServiceCard";
import CapabilityCard from "./services/CapabilityCard";
import ServiceDetailCard from "./services/ServiceDetailCard";
import { services, capabilities } from "./services/ServicesData";

const ServicesOverview = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(serviceInterval);
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-80 h-80 bg-gray-50 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gray-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} capability={capability} index={index} />
          ))}
        </div>

        {/* Services Showcase */}
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
                <ServiceCard
                  key={index}
                  service={service}
                  isActive={activeService === index}
                  onClick={() => setActiveService(index)}
                />
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
            <ServiceDetailCard service={services[activeService]} />

            {/* Navigation Indicators */}
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
