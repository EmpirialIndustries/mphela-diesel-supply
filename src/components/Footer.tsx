
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Mphela Industries
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              South Africa's trusted diesel wholesale supplier. Quality fuel, reliable delivery, 
              and competitive pricing for all your bulk diesel needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin size={20} className="mr-3 text-orange-500" />
                123 Industrial Drive, Johannesburg, 2000
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={20} className="mr-3 text-orange-500" />
                +27 11 123 4567
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={20} className="mr-3 text-orange-500" />
                info@mphelaindustries.co.za
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/fleet" className="text-gray-300 hover:text-orange-500 transition-colors">Fleet & Logistics</Link></li>
              <li><Link to="/quality" className="text-gray-300 hover:text-orange-500 transition-colors">Quality Assurance</Link></li>
              <li><Link to="/prices" className="text-gray-300 hover:text-orange-500 transition-colors">Market Prices</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Bulk Diesel Supply</li>
              <li>Wholesale Distribution</li>
              <li>Retail Fuel Solutions</li>
              <li>Custom Contracts</li>
              <li>Emergency Delivery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Mphela Industries Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
