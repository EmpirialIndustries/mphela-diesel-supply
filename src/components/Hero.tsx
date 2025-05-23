
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      {/* Parallax background image */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000&auto=format&fit=crop')`,
          transform: `translateY(${mousePosition.y * 0.02}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45 float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/10 rounded-full float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-white/10 rotate-12 float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-wide text-reveal">
              Premium Bulk Diesel Supply
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-black px-12 py-6 text-lg font-semibold font-inter transition-all duration-300 transform hover:scale-105 shadow-2xl btn-micro hover-lift"
              >
                Request Exclusive Quote
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg font-semibold font-inter transition-all duration-300 bg-transparent btn-micro hover-lift glass"
              >
                <Play size={20} className="mr-3" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats section */}
          <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mt-20`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass p-6 rounded-lg hover-lift">
                <div className="text-4xl font-bold font-playfair mb-2">500M+</div>
                <div className="text-gray-300 font-cormorant">Litres Delivered</div>
              </div>
              <div className="glass p-6 rounded-lg hover-lift">
                <div className="text-4xl font-bold font-playfair mb-2">24/7</div>
                <div className="text-gray-300 font-cormorant">Emergency Service</div>
              </div>
              <div className="glass p-6 rounded-lg hover-lift">
                <div className="text-4xl font-bold font-playfair mb-2">50+</div>
                <div className="text-gray-300 font-cormorant">Fleet Vehicles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ArrowDown className="text-white" size={28} />
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
