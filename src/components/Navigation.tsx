
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Fleet & Logistics", path: "/fleet" },
    { name: "Quality", path: "/quality" },
    { name: "Market Intelligence", path: "/prices" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/96 backdrop-blur-xl shadow-xl border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={`text-2xl font-bold font-playfair transition-all duration-500 hover:scale-105 group ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              <span className="relative">
                Mphela Industries
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></div>
              </span>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-500 group ${
                    location.pathname === item.path
                      ? isScrolled 
                        ? "text-black bg-gray-100 shadow-md" 
                        : "text-white bg-white/20 shadow-lg"
                      : isScrolled
                        ? "text-gray-700 hover:text-black hover:bg-gray-50"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center text-sm font-cormorant ${
              isScrolled ? 'text-gray-600' : 'text-gray-300'
            }`}>
              <Phone size={16} className="mr-2" />
              +27 11 856 7890
            </div>
            <Button className={`transition-all duration-500 btn-micro hover-lift font-semibold px-8 py-3 ${
              isScrolled 
                ? 'bg-black hover:bg-gray-800 text-white shadow-lg' 
                : 'bg-white hover:bg-gray-100 text-black shadow-xl'
            }`}>
              Enterprise Quote
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-3 glass rounded-lg mt-4 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-4 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-black text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center text-gray-600 mb-4 font-cormorant">
                <Phone size={16} className="mr-2" />
                +27 11 856 7890
              </div>
              <Button className="w-full bg-black hover:bg-gray-800 text-white btn-micro py-4">
                Enterprise Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
