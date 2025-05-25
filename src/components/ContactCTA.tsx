
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";
import { useState, useEffect } from "react";

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const contactMethods = [
    {
      icon: Phone,
      title: "Executive Hotline",
      description: "Direct access to senior fuel specialists for immediate consultation and custom solutions.",
      contact: "+27 11 856 7890",
      availability: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      title: "Strategic Partnerships",
      description: "Connect with our business development team for enterprise contracts and long-term partnerships.",
      contact: "partnerships@mphelaindustries.co.za",
      availability: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Regional Operations",
      description: "Visit our state-of-the-art facilities and meet with regional distribution managers.",
      contact: "123 Industrial Drive, Johannesburg",
      availability: "Mon-Fri: 06:00-18:00"
    }
  ];

  const guarantees = [
    { icon: Clock, label: "4-Hour Emergency Response", description: "Guaranteed nationwide" },
    { icon: Shield, label: "Quality Assurance", description: "ISO 9001 certified processes" },
    { icon: Award, label: "Industry Leadership", description: "60+ years of excellence" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % contactMethods.length);
    }, 4000);

    return () => clearInterval(featureInterval);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive CTA Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-8 py-4 bg-black text-white rounded-full text-sm font-semibold tracking-wider">
              PARTNERSHIP INQUIRY
            </span>
          </div>
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Partner With Industry
            <span className="block gradient-text mt-2">Leaders Today</span>
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join South Africa's most trusted fuel partnership network. Experience the difference that 
            six decades of industry mastery, cutting-edge logistics, and unwavering commitment to excellence can make.
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-8">
              Ready to Transform
              <span className="block text-3xl md:text-4xl text-gray-600 mt-2 font-cormorant italic">
                Your Fuel Operations?
              </span>
            </h3>
            
            <p className="text-gray-700 mb-10 text-lg leading-relaxed font-cormorant">
              Whether you're managing a mining operation in Limpopo, running a transport fleet across provinces, 
              or operating retail fuel stations, our expertise and infrastructure are designed to optimize your 
              fuel costs, ensure reliable supply, and drive operational excellence.
            </p>

            {/* Service Guarantees */}
            <div className="space-y-4 mb-10">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-100">
                    <div className="p-3 rounded-full bg-black mr-4">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black font-playfair">{guarantee.label}</div>
                      <div className="text-gray-600 text-sm font-cormorant">{guarantee.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-semibold transition-all duration-500 hover-lift group flex-1"
              >
                <span className="flex items-center justify-center">
                  Request Enterprise Quote
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-6 text-lg font-semibold transition-all duration-500 hover-lift flex-1"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card 
                  key={index}
                  className={`border-none shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                    activeFeature === index 
                      ? 'bg-black text-white scale-105' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className={`p-4 rounded-full mr-6 transition-all duration-500 ${
                        activeFeature === index ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        <Icon size={28} className={`transition-colors duration-500 ${
                          activeFeature === index ? 'text-white' : 'text-black'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-playfair text-2xl font-bold mb-3 transition-colors duration-500 ${
                          activeFeature === index ? 'text-white' : 'text-black'
                        }`}>
                          {method.title}
                        </h3>
                        <p className={`font-cormorant text-lg leading-relaxed mb-4 transition-colors duration-500 ${
                          activeFeature === index ? 'text-gray-200' : 'text-gray-600'
                        }`}>
                          {method.description}
                        </p>
                        <div className="space-y-2">
                          <div className={`font-semibold transition-colors duration-500 ${
                            activeFeature === index ? 'text-white' : 'text-black'
                          }`}>
                            {method.contact}
                          </div>
                          <div className={`text-sm font-cormorant transition-colors duration-500 ${
                            activeFeature === index ? 'text-gray-300' : 'text-gray-500'
                          }`}>
                            {method.availability}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Executive Quote Section */}
        <div className="text-center bg-black text-white py-20 px-8 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
                "Excellence in fuel distribution isn't just our business—it's our legacy."
              </h3>
              <p className="font-cormorant text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                For six decades, we've powered South Africa's growth through unwavering quality, 
                innovative solutions, and partnerships built on trust and reliability.
              </p>
              <div className="text-gray-400 font-cormorant">
                — Mphela Industries Executive Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
