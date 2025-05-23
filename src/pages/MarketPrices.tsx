
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, TrendingDown, DollarSign, Globe, BarChart3, Activity } from "lucide-react";

const MarketPrices = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [priceAnimation, setPriceAnimation] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BRENT",
      "interval": "D",
      "timezone": "Africa/Johannesburg",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#ffffff",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_chart"
    });

    if (chartRef.current) {
      chartRef.current.appendChild(script);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Animate prices on load
    setTimeout(() => setPriceAnimation(true), 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (chartRef.current) {
        chartRef.current.innerHTML = '';
      }
    };
  }, []);

  const currentPrices = {
    inland: 18.90,
    coastal: 18.11,
    lastUpdated: "May 2025"
  };

  const priceFactors = [
    { icon: Globe, label: "International crude oil prices (Brent Crude)", impact: "+2.3%" },
    { icon: TrendingUp, label: "USD/ZAR exchange rate fluctuations", impact: "-1.2%" },
    { icon: DollarSign, label: "Refinery processing costs and margins", impact: "+0.8%" },
    { icon: BarChart3, label: "Transportation and logistics costs", impact: "+0.5%" },
    { icon: Activity, label: "Regional supply and demand dynamics", impact: "-0.3%" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      
      {/* Floating cursor effect */}
      <div 
        className="fixed w-6 h-6 border border-black/20 rounded-full pointer-events-none z-50 transition-transform duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(1.2)`
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=6000&auto=format&fit=crop')`,
              transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            }}
          />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 border border-white/10 rotate-45 float" />
          <div className="absolute top-40 right-20 w-32 h-32 border border-white/10 rounded-full float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-32 left-1/3 w-24 h-24 border border-white/10 rotate-12 float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Market
              <span className="block gradient-text font-cormorant italic text-5xl md:text-7xl mt-4">
                Intelligence
              </span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="font-cormorant text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Real-time insights into global crude oil markets and South African diesel pricing dynamics
            </p>
          </div>
        </div>
      </section>

      {/* Current Diesel Prices */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <span className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold">
                Live Pricing
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8">
              Current Diesel
              <span className="block gradient-text">Wholesale Prices</span>
            </h2>
            <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto">
              Updated monthly based on Department of Mineral Resources data
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="border-none shadow-2xl bg-white hover:bg-black hover:text-white transition-all duration-700 group cursor-pointer relative overflow-hidden hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Animated particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(12)].map((_, i) => (
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
              
              <CardContent className="p-12 text-center relative z-10">
                <div className="mb-8">
                  <div className="p-6 rounded-full bg-gray-100 group-hover:bg-white/20 transition-all duration-500 inline-block">
                    <TrendingUp size={40} className="text-black group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                
                <h3 className="font-playfair text-4xl font-bold text-black group-hover:text-white mb-6 transition-colors duration-500">
                  Inland Regions
                </h3>
                
                <div className={`text-7xl font-bold text-black group-hover:text-white mb-6 font-cormorant transition-all duration-700 ${priceAnimation ? 'scale-110' : 'scale-100'}`}>
                  R{currentPrices.inland}
                </div>
                
                <p className="text-gray-600 group-hover:text-gray-200 text-xl mb-6 font-cormorant transition-colors duration-500">
                  per litre (0.05% sulphur)
                </p>
                
                <div className="bg-gray-50 group-hover:bg-white/10 p-4 rounded-lg transition-all duration-500">
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 font-cormorant transition-colors duration-500">
                    Johannesburg, Pretoria, Durban inland areas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl bg-white hover:bg-black hover:text-white transition-all duration-700 group cursor-pointer relative overflow-hidden hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Animated particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(12)].map((_, i) => (
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
              
              <CardContent className="p-12 text-center relative z-10">
                <div className="mb-8">
                  <div className="p-6 rounded-full bg-gray-100 group-hover:bg-white/20 transition-all duration-500 inline-block">
                    <TrendingDown size={40} className="text-black group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                
                <h3 className="font-playfair text-4xl font-bold text-black group-hover:text-white mb-6 transition-colors duration-500">
                  Coastal Regions
                </h3>
                
                <div className={`text-7xl font-bold text-black group-hover:text-white mb-6 font-cormorant transition-all duration-700 ${priceAnimation ? 'scale-110' : 'scale-100'}`}>
                  R{currentPrices.coastal}
                </div>
                
                <p className="text-gray-600 group-hover:text-gray-200 text-xl mb-6 font-cormorant transition-colors duration-500">
                  per litre (0.05% sulphur)
                </p>
                
                <div className="bg-gray-50 group-hover:bg-white/10 p-4 rounded-lg transition-all duration-500">
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 font-cormorant transition-colors duration-500">
                    Cape Town, Durban, Port Elizabeth
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-20">
            <div className="glass p-6 rounded-xl inline-block">
              <p className="text-gray-600 font-cormorant text-lg">
                <strong>Last Updated:</strong> {currentPrices.lastUpdated} | 
                <strong> Source:</strong> Department of Mineral Resources & Energy, Central Energy Fund
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Crude Oil Chart */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <span className="px-6 py-3 bg-white text-black rounded-full text-sm font-semibold">
                Live Data
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8">
              Brent Crude Oil
              <span className="block gradient-text">Market Analysis</span>
            </h2>
            <p className="font-cormorant text-xl text-gray-200 max-w-3xl mx-auto">
              Track global crude oil prices that directly influence South African diesel costs
            </p>
          </div>

          <Card className="border-none shadow-2xl bg-white hover:bg-gray-900 hover:text-white transition-all duration-700 group overflow-hidden">
            <CardContent className="p-8">
              <div 
                id="tradingview_chart" 
                ref={chartRef}
                style={{ height: '600px', width: '100%' }}
                className="rounded-lg overflow-hidden"
              ></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Price Explanation */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block mb-8">
                <span className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold">
                  Market Intelligence
                </span>
              </div>
              
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8">
                Understanding
                <span className="block gradient-text">Diesel Pricing</span>
              </h2>
              
              <p className="text-gray-600 mb-8 text-xl leading-relaxed font-cormorant">
                South African diesel prices are influenced by several key factors, with international 
                crude oil prices being the primary driver. Our pricing structure reflects these 
                global market conditions while maintaining competitive rates for our customers.
              </p>
              
              <h3 className="font-playfair text-2xl font-semibold text-black mb-8">Key Price Factors:</h3>
              
              <div className="space-y-6">
                {priceFactors.map((factor, index) => {
                  const Icon = factor.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer border border-gray-100"
                    >
                      <div className="p-4 rounded-full bg-gray-100 group-hover:bg-black transition-all duration-500 mr-6">
                        <Icon size={24} className="text-black group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div className="flex-1">
                        <p className="font-cormorant text-gray-700 group-hover:text-black transition-colors duration-500 text-lg">
                          {factor.label}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          factor.impact.startsWith('+') 
                            ? 'bg-gray-100 text-gray-800' 
                            : 'bg-gray-800 text-white'
                        }`}>
                          {factor.impact}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="border-none shadow-2xl bg-white hover:bg-black hover:text-white transition-all duration-700 group overflow-hidden hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <CardContent className="p-12 relative z-10">
                <h3 className="font-playfair text-3xl font-bold text-black group-hover:text-white mb-8 transition-colors duration-500">
                  Price Trends & Forecast
                </h3>
                
                <div className="space-y-8">
                  <div className="glass-dark group-hover:bg-white/10 p-8 rounded-xl transition-all duration-500">
                    <h4 className="font-semibold text-black group-hover:text-white mb-4 text-xl font-playfair transition-colors duration-500">
                      Recent Trend
                    </h4>
                    <p className="text-gray-700 group-hover:text-gray-200 font-cormorant text-lg leading-relaxed transition-colors duration-500">
                      Diesel prices have stabilized following global market adjustments, 
                      with coastal regions maintaining a R0.79 per litre advantage over inland areas.
                    </p>
                  </div>
                  
                  <div className="glass-dark group-hover:bg-white/10 p-8 rounded-xl transition-all duration-500">
                    <h4 className="font-semibold text-black group-hover:text-white mb-4 text-xl font-playfair transition-colors duration-500">
                      Market Outlook
                    </h4>
                    <p className="text-gray-700 group-hover:text-gray-200 font-cormorant text-lg leading-relaxed transition-colors duration-500">
                      Market analysts project moderate price stability through Q2 2025, 
                      subject to global economic conditions and OPEC production decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketPrices;
