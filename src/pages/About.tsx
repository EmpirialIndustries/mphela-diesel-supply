
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Award, Globe, Shield, Zap, Users, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  const stats = [
    { number: "500M+", label: "Litres Delivered", count: 500 },
    { number: "15+", label: "Years Experience", count: 15 },
    { number: "500+", label: "Happy Clients", count: 500 },
    { number: "99.9%", label: "Uptime Guarantee", count: 99.9 }
  ];

  const values = [
    { 
      icon: Shield, 
      title: "Integrity", 
      description: "Unwavering commitment to honest business practices and transparent operations.",
    },
    { 
      icon: Target, 
      title: "Reliability", 
      description: "Consistent delivery excellence that powers South Africa's industries.",
    },
    { 
      icon: Zap, 
      title: "Innovation", 
      description: "Cutting-edge logistics solutions that redefine fuel distribution.",
    },
    { 
      icon: Heart, 
      title: "Sustainability", 
      description: "Environmental responsibility at the core of our operations.",
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsInView(true);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      
      {/* Floating cursor effect */}
      <div 
        className="fixed w-6 h-6 border border-black/20 rounded-full pointer-events-none z-50 transition-transform duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${activeSection > 0 ? 1.5 : 1})`
        }}
      />
      
      {/* Hero Section with Parallax */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=6000&auto=format&fit=crop')`,
              transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Floating geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 border border-white/10 rotate-45 float" />
          <div className="absolute top-40 right-20 w-32 h-32 border border-white/10 rounded-full float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-32 left-1/3 w-24 h-24 border border-white/10 rotate-12 float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="font-playfair text-7xl md:text-9xl font-bold mb-8 leading-tight tracking-wide">
              About
              <span className="block gradient-text font-cormorant italic text-6xl md:text-8xl mt-4">
                Mphela Industries
              </span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="font-cormorant text-2xl md:text-3xl mb-12 max-w-4xl mx-auto text-gray-200 font-light leading-relaxed">
              Building South Africa's fuel infrastructure through reliable partnerships and exceptional service.
            </p>
          </div>

          {/* Animated Stats */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-lg hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl font-bold font-playfair mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-cormorant text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story with Morphing Cards */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h2 className="text-6xl font-bold text-black mb-8 font-playfair text-reveal">Our Story</h2>
              </div>
              <div className="space-y-6 text-gray-600 font-cormorant text-xl leading-relaxed">
                <p className="hover:text-black transition-colors duration-500 cursor-default">
                  Founded with a vision to transform South Africa's diesel supply chain, Mphela Industries 
                  has grown from a regional supplier to a national leader in bulk fuel distribution.
                </p>
                <p className="hover:text-black transition-colors duration-500 cursor-default">
                  Our commitment to quality, reliability, and customer satisfaction has earned us the trust of 
                  mining companies, transport fleets, and retail partners across the country.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-black to-gray-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=6000&auto=format&fit=crop"
                alt="Modern fuel industry operations"
                className="relative rounded-lg shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Values Grid with Hover Effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="border-none shadow-lg bg-white hover:bg-black hover:text-white transition-all duration-500 group cursor-pointer hover:scale-105 hover:shadow-2xl"
                  onMouseEnter={() => setActiveSection(index + 1)}
                  onMouseLeave={() => setActiveSection(0)}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center">
                        <div className="p-4 rounded-full bg-gray-100 group-hover:bg-white/20 transition-colors duration-500">
                          <Icon size={32} className="text-black group-hover:text-white transition-colors duration-500" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-black group-hover:text-white mb-4 font-playfair transition-colors duration-500">
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed font-cormorant transition-colors duration-500">
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
                      <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement with Interactive Elements */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
            Our Mission
          </h2>
          
          <div className="glass p-12 rounded-2xl hover-lift group cursor-pointer">
            <p className="text-2xl md:text-3xl font-light leading-relaxed font-cormorant group-hover:scale-105 transition-transform duration-500">
              "To provide reliable, high-quality diesel supply solutions that power South Africa's 
              economic growth while maintaining the highest standards of safety and environmental responsibility."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
