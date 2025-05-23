
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const words = ["Premium", "Reliable", "Quality", "Trusted"];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Dynamic background with mouse-following gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-gray-800 via-black to-black opacity-50"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(75, 85, 99, 0.15), transparent 80%)`
        }}
      />
      
      {/* Parallax background image */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000&auto=format&fit=crop')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        
        {/* Advanced floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45 float">
            <div className="w-4 h-4 bg-white/5 absolute top-2 left-2 rounded-full"></div>
          </div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/10 rounded-full float" style={{ animationDelay: '2s' }}>
            <div className="w-2 h-2 bg-white/10 absolute top-3 left-3 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-white/10 rotate-12 float" style={{ animationDelay: '4s' }}>
            <Zap size={12} className="absolute top-2 right-2 text-white/20" />
          </div>
          
          {/* Particle system */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-semibold border border-white/20 mb-8 hover:bg-white/20 transition-all duration-300">
                🚛 South Africa's Leading Diesel Supplier
              </span>
            </div>
            
            <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-wide">
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                {words[currentWord]}
              </span>
              <span className="block text-5xl md:text-7xl mt-4">
                Bulk Diesel Supply
              </span>
              <span className="block gradient-text font-cormorant italic text-5xl md:text-7xl mt-4">
                Across South Africa
              </span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="font-cormorant text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 font-light leading-relaxed">
              Your distinguished partner for wholesale diesel distribution. Exceptional quality fuel, 
              competitive pricing, and impeccable delivery for mining, transport, and retail sectors.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-black px-12 py-6 text-lg font-semibold font-inter transition-all duration-300 transform hover:scale-105 shadow-2xl btn-micro hover-lift group relative overflow-hidden"
              >
                <span className="relative z-10">Request Exclusive Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg font-semibold font-inter transition-all duration-300 bg-transparent btn-micro hover-lift glass group"
              >
                <Play size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Enhanced Stats with Animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: "500M+", label: "Litres Delivered" },
                { value: "24/7", label: "Emergency Service" },
                { value: "50+", label: "Fleet Vehicles" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="glass p-6 rounded-lg hover-lift group cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="text-4xl font-bold font-playfair mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 font-cormorant">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with magnetic effect */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        style={{
          transform: `translateX(-50%) translateY(${Math.sin(Date.now() * 0.003) * 5}px)`
        }}
      >
        <div className="flex flex-col items-center space-y-2 group-hover:scale-110 transition-transform duration-300">
          <ArrowDown className="text-white group-hover:text-gray-300 transition-colors duration-300" size={28} />
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent group-hover:from-gray-300 transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
