
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Zap, Shield, Target } from "lucide-react";

const ServicesOverview = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Bulk Diesel Supply",
      description: "High-volume diesel delivery for mining operations, transport fleets, and industrial facilities.",
      features: ["0.05% & 0.005% sulphur diesel", "Flexible delivery schedules", "Competitive wholesale pricing"],
      icon: Zap,
      gradient: "from-black to-gray-800"
    },
    {
      title: "Retail Fuel Solutions", 
      description: "Comprehensive fuel supply for retail outlets and fuel stations across South Africa.",
      features: ["Consistent supply guarantee", "Quality assurance testing", "Marketing support"],
      icon: Shield,
      gradient: "from-gray-800 to-black"
    },
    {
      title: "Custom Fuel Contracts",
      description: "Tailored fuel supply agreements designed to meet your specific operational requirements.",
      features: ["Flexible pricing models", "Volume-based discounts", "Long-term partnerships"],
      icon: Target,
      gradient: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black to-transparent opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 font-playfair">
            Comprehensive Fuel
            <span className="block gradient-text">Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cormorant leading-relaxed">
            From bulk supply to retail solutions, we provide the full spectrum of diesel services 
            tailored to South Africa's diverse industrial needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <Card 
                key={index} 
                className="border-none shadow-lg bg-white hover:bg-black hover:text-white transition-all duration-700 group cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Icon with glow effect */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-white/20 transition-all duration-500 group-hover:shadow-2xl">
                      <Icon 
                        size={32} 
                        className="text-black group-hover:text-white transition-all duration-500 group-hover:scale-110" 
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black group-hover:text-white mb-4 font-playfair transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-200 mb-6 leading-relaxed font-cormorant transition-colors duration-500">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-gray-600 group-hover:text-gray-200 transition-colors duration-500"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-black group-hover:bg-white rounded-full mr-3 transition-colors duration-500 group-hover:animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Interactive button */}
                  <div className="flex justify-center">
                    <button className="flex items-center text-black group-hover:text-white font-semibold transition-all duration-500 group-hover:scale-110">
                      Learn More
                      <ArrowRight 
                        size={16} 
                        className="ml-2 transform group-hover:translate-x-2 transition-transform duration-500" 
                      />
                    </button>
                  </div>
                </CardContent>
                
                {/* Border animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-700" />
              </Card>
            );
          })}
        </div>

        {/* Call to action with magnetic effect */}
        <div className="text-center">
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl btn-micro group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View All Services
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
