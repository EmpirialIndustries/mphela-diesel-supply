
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Zap, Award, TrendingUp, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentMetric, setCurrentMetric] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const industryMetrics = [
    { value: "60+ Years", label: "Combined Industry Experience" },
    { value: "2B+ Litres", label: "Lifetime Fuel Distribution" },
    { value: "ISO 9001", label: "Quality Management Certified" },
    { value: "24/7/365", label: "Operational Excellence" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const metricInterval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % industryMetrics.length);
    }, 4000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(metricInterval);
    };
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Enterprise-grade background with sophisticated gradients */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-gray-800 via-black to-black opacity-60"
        style={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(75, 85, 99, 0.12), transparent 70%)`
        }}
      />
      
      {/* Professional parallax background */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=6000&auto=format&fit=crop')`,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/85"></div>
        
        {/* Sophisticated floating elements representing industry expertise */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-24 left-16 w-36 h-36 border-2 border-white/8 rotate-45 float">
            <Award size={20} className="absolute top-4 left-4 text-white/15" />
          </div>
          <div className="absolute top-48 right-24 w-28 h-28 border-2 border-white/8 rounded-full float" style={{ animationDelay: '2.5s' }}>
            <TrendingUp size={16} className="absolute top-3 right-3 text-white/15" />
          </div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-white/8 rotate-12 float" style={{ animationDelay: '5s' }}>
            <Zap size={12} className="absolute top-2 right-2 text-white/20" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className={`transition-all duration-1200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="mb-10">
              <span className="inline-flex items-center px-8 py-4 bg-white/8 backdrop-blur-xl rounded-full text-sm font-semibold border border-white/15 mb-8 hover:bg-white/12 transition-all duration-500 glass">
                <Award size={16} className="mr-2" />
                Six Decades of Fuel Industry Leadership
              </span>
            </div>
            
            <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-10 leading-tight tracking-wide">
              <span className="block text-white mb-4">
                Mphela Industries
              </span>
              <span className="block gradient-text font-cormorant italic text-5xl md:text-7xl">
                Fuel Excellence Since 1964
              </span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1200 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="font-cormorant text-xl md:text-2xl mb-12 max-w-5xl mx-auto text-gray-200 font-light leading-relaxed">
              As South Africa's most trusted diesel wholesale partner, we combine six decades of industry mastery 
              with cutting-edge logistics technology. Our legacy of excellence powers the nation's mining, 
              transport, and industrial sectors with unparalleled reliability and competitive pricing.
            </p>
          </div>

          <div className={`transition-all duration-1200 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-black px-16 py-8 text-lg font-semibold font-inter transition-all duration-500 transform hover:scale-105 shadow-2xl btn-micro hover-lift group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Request Enterprise Quote
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-16 py-8 text-lg font-semibold font-inter transition-all duration-500 bg-transparent btn-micro hover-lift glass group"
              >
                <Play size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Industry Overview
              </Button>
            </div>

            {/* Enhanced industry metrics with professional animations */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {industryMetrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`glass p-8 rounded-xl hover-lift group cursor-pointer relative overflow-hidden transition-all duration-700 ${
                    currentMetric === index ? 'scale-105 bg-white/10' : ''
                  }`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-bold font-playfair mb-3 group-hover:scale-110 transition-transform duration-500 gradient-text">
                      {metric.value}
                    </div>
                    <div className="text-gray-300 font-cormorant text-sm leading-relaxed">
                      {metric.label}
                    </div>
                  </div>
                  {currentMetric === index && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        style={{
          transform: `translateX(-50%) translateY(${Math.sin(Date.now() * 0.002) * 3}px)`
        }}
      >
        <div className="flex flex-col items-center space-y-3 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white/80 text-sm font-cormorant tracking-wider">Discover More</div>
          <ArrowDown className="text-white group-hover:text-gray-300 transition-colors duration-300" size={24} />
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent group-hover:from-gray-300 transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
