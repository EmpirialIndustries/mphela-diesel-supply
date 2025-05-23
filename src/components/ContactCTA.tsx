
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Partner With Us?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Get competitive pricing and reliable diesel supply for your business. 
          Contact our team today for a customized quote.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
              Get Quote Now
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4">
            <Phone size={20} className="mr-2" />
            Call: +27 11 123 4567
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Emergency Supply</h3>
            <p className="text-gray-200">24/7 emergency diesel delivery available across major South African cities.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Market Updates</h3>
            <p className="text-gray-200">Stay informed with our monthly diesel market price updates and forecasts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
