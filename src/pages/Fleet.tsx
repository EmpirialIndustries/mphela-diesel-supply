
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Fleet = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-32 mt-16 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 border border-white/5 rounded-full float"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 border border-white/5 rotate-45 float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-8 text-white text-reveal">
            Fleet & Logistics
          </h1>
          <p className="font-cormorant text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 font-light leading-relaxed">
            Distinguished fleet and comprehensive logistics network ensuring impeccable diesel delivery across South Africa.
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8 gradient-text">
              Our Fleet Capabilities
            </h2>
            <p className="font-cormorant text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Professional fleet management and nationwide delivery infrastructure of the highest caliber.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="border-none shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 border-t-4 border-t-black hover-lift cursor-pointer"
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-10 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full border-4 border-black flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === 0 ? 'bg-black text-white' : 'bg-white text-black'
                }`}>
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-black mb-6">Vehicles</h3>
                <p className="font-cormorant text-gray-700 text-lg font-light leading-relaxed">
                  Distinguished tanker fleet with capacities ranging from 10,000L to 40,000L, maintained to the highest standards
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-none shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 border-t-4 border-t-black hover-lift cursor-pointer"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-10 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full border-4 border-black flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === 1 ? 'bg-black text-white' : 'bg-white text-black'
                }`}>
                  <span className="text-lg font-bold">SA</span>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-black mb-6">Nationwide Coverage</h3>
                <p className="font-cormorant text-gray-700 text-lg font-light leading-relaxed">
                  Comprehensive delivery network covering all major South African cities and industrial areas with precision
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-none shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 border-t-4 border-t-black hover-lift cursor-pointer"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-10 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full border-4 border-black flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === 2 ? 'bg-black text-white' : 'bg-white text-black'
                }`}>
                  <span className="text-lg font-bold">24/7</span>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-black mb-6">Operations</h3>
                <p className="font-cormorant text-gray-700 text-lg font-light leading-relaxed">
                  Round-the-clock logistics support for emergency and scheduled deliveries with unwavering reliability
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional features section */}
          <div className="mt-20 bg-black text-white rounded-2xl p-12 hover-lift">
            <div className="text-center mb-12">
              <h3 className="font-playfair text-4xl font-bold mb-6">Advanced Fleet Technology</h3>
              <p className="font-cormorant text-xl text-gray-300 max-w-3xl mx-auto">
                Our fleet is equipped with cutting-edge technology for optimal performance and safety.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center glass-dark p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">GPS Tracking</div>
                <div className="text-gray-400 text-sm">Real-time monitoring</div>
              </div>
              <div className="text-center glass-dark p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">Safety Systems</div>
                <div className="text-gray-400 text-sm">Advanced protection</div>
              </div>
              <div className="text-center glass-dark p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">Route Optimization</div>
                <div className="text-gray-400 text-sm">Efficient delivery</div>
              </div>
              <div className="text-center glass-dark p-6 rounded-lg">
                <div className="text-2xl font-bold mb-2">Digital Logging</div>
                <div className="text-gray-400 text-sm">Complete transparency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;
