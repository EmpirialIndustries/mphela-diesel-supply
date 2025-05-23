
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ContactCTA = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/5 rounded-full float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/5 rotate-45 float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="text-reveal">
          <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-8 text-white">
            Ready to Partner With
            <span className="block gradient-text font-cormorant italic">
              Excellence?
            </span>
          </h2>
        </div>
        
        <p className="font-cormorant text-xl md:text-2xl mb-16 max-w-4xl mx-auto text-gray-300 font-light leading-relaxed">
          Experience competitive pricing and unwavering diesel supply reliability for your distinguished business. 
          Contact our dedicated team today for a bespoke quote.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black px-12 py-6 font-semibold font-inter shadow-2xl btn-micro hover-lift group"
            >
              Get Premium Quote
              <ArrowRight size={20} className="ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 font-semibold font-inter bg-transparent btn-micro hover-lift glass group"
          >
            <Phone size={20} className="mr-3 transition-transform group-hover:rotate-12" />
            Call: +27 11 123 4567
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div 
            className="glass-dark rounded-xl p-8 backdrop-blur-sm border border-white/10 hover-lift smooth-transition cursor-pointer"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${
                hoveredCard === 0 ? 'bg-white text-black' : 'bg-transparent text-white'
              }`}>
                24
              </div>
              <h3 className="font-playfair text-2xl font-semibold ml-4 text-white">Emergency Supply</h3>
            </div>
            <p className="font-cormorant text-gray-300 text-lg font-light leading-relaxed">
              24/7 emergency diesel delivery available across major South African cities with uncompromising service standards.
            </p>
          </div>
          
          <div 
            className="glass-dark rounded-xl p-8 backdrop-blur-sm border border-white/10 hover-lift smooth-transition cursor-pointer"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${
                hoveredCard === 1 ? 'bg-white text-black' : 'bg-transparent text-white'
              }`}>
                <Mail size={20} />
              </div>
              <h3 className="font-playfair text-2xl font-semibold ml-4 text-white">Market Intelligence</h3>
            </div>
            <p className="font-cormorant text-gray-300 text-lg font-light leading-relaxed">
              Stay informed with our exclusive monthly diesel market price updates and professional forecasts.
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover-lift">
              <div className="text-3xl font-bold font-playfair mb-2">99.9%</div>
              <div className="text-gray-400 font-cormorant text-sm">Delivery Success</div>
            </div>
            <div className="hover-lift">
              <div className="text-3xl font-bold font-playfair mb-2">500+</div>
              <div className="text-gray-400 font-cormorant text-sm">Happy Clients</div>
            </div>
            <div className="hover-lift">
              <div className="text-3xl font-bold font-playfair mb-2">15+</div>
              <div className="text-gray-400 font-cormorant text-sm">Years Experience</div>
            </div>
            <div className="hover-lift">
              <div className="text-3xl font-bold font-playfair mb-2">24/7</div>
              <div className="text-gray-400 font-cormorant text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
