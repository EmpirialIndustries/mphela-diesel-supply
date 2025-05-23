
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-rolex-green-900 via-rolex-green-800 to-rolex-green-700 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div 
        className="relative bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rolex-green-900/95 to-rolex-green-800/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-wide">
            Premium Bulk Diesel Supply
            <span className="block text-rolex-gold-400 font-cormorant italic">
              Across South Africa
            </span>
          </h1>
          <p className="font-cormorant text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-rolex-cream-100 font-light leading-relaxed">
            Your distinguished partner for wholesale diesel distribution. Exceptional quality fuel, competitive pricing, and impeccable delivery for mining, transport, and retail sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-rolex-gold-500 hover:bg-rolex-gold-600 text-rolex-green-900 px-10 py-4 text-lg font-semibold font-inter transition-all duration-300 transform hover:scale-105 shadow-lg border border-rolex-gold-400"
            >
              Request Exclusive Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-rolex-cream-200 text-rolex-cream-100 hover:bg-rolex-cream-100 hover:text-rolex-green-900 px-10 py-4 text-lg font-semibold font-inter transition-all duration-300 bg-transparent"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-rolex-gold-400" size={28} />
      </div>
    </section>
  );
};

export default Hero;
