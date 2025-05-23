
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-rolex-green-900 to-rolex-green-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rolex-green-950/50 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 text-rolex-cream-50">
          Ready to Partner With Excellence?
        </h2>
        <p className="font-cormorant text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-rolex-cream-100 font-light leading-relaxed">
          Experience competitive pricing and unwavering diesel supply reliability for your distinguished business. 
          Contact our dedicated team today for a bespoke quote.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link to="/contact">
            <Button size="lg" className="bg-rolex-gold-500 hover:bg-rolex-gold-600 text-rolex-green-900 px-10 py-4 font-semibold font-inter shadow-lg border border-rolex-gold-400">
              Get Premium Quote
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-2 border-rolex-cream-200 text-rolex-cream-100 hover:bg-rolex-cream-100 hover:text-rolex-green-900 px-10 py-4 font-semibold font-inter bg-transparent">
            <Phone size={20} className="mr-3" />
            Call: +27 11 123 4567
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-rolex-green-800/40 rounded-xl p-8 backdrop-blur-sm border border-rolex-gold-400/20">
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-rolex-gold-400">Emergency Supply</h3>
            <p className="font-cormorant text-rolex-cream-100 text-lg font-light leading-relaxed">24/7 emergency diesel delivery available across major South African cities with uncompromising service standards.</p>
          </div>
          <div className="bg-rolex-green-800/40 rounded-xl p-8 backdrop-blur-sm border border-rolex-gold-400/20">
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-rolex-gold-400">Market Intelligence</h3>
            <p className="font-cormorant text-rolex-cream-100 text-lg font-light leading-relaxed">Stay informed with our exclusive monthly diesel market price updates and professional forecasts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
