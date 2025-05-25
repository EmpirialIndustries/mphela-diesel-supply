
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Award, Globe, Users, ArrowRight, Shield, Target, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const CompanyIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const achievements = [
    {
      icon: Award,
      title: "Industry Pioneer",
      description: "Leading South Africa's fuel distribution revolution since 1964 with innovative wholesale solutions.",
      stats: "60+ Years Excellence"
    },
    {
      icon: Globe,
      title: "National Reach",
      description: "Comprehensive distribution network spanning all nine provinces with strategic depot locations.",
      stats: "9 Provinces Covered"
    },
    {
      icon: Truck,
      title: "Fleet Excellence", 
      description: "State-of-the-art fleet with GPS tracking, real-time monitoring, and emergency response capabilities.",
      stats: "150+ Vehicles"
    },
    {
      icon: Users,
      title: "Trusted Partnership",
      description: "Serving over 2,500 industrial clients including mining giants, transport companies, and retail chains.",
      stats: "2,500+ Clients"
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Uncompromising Quality",
      description: "ISO 9001 certified processes ensuring every litre meets the highest industry standards."
    },
    {
      icon: Target,
      title: "Precision Delivery",
      description: "Advanced logistics systems guaranteeing on-time delivery with 99.7% reliability rate."
    },
    {
      icon: Zap,
      title: "Innovation Leadership",
      description: "Pioneering digital solutions and sustainable practices that define tomorrow's fuel industry."
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const cardInterval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % achievements.length);
    }, 5000);

    return () => clearInterval(cardInterval);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gray-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gray-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Summary Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-8 py-4 bg-black text-white rounded-full text-sm font-semibold tracking-wider">
              EXECUTIVE OVERVIEW
            </span>
          </div>
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Six Decades of
            <span className="block gradient-text mt-2">Fuel Industry Mastery</span>
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From humble beginnings in 1964 to becoming South Africa's premier diesel wholesale distributor, 
            Mphela Industries represents the gold standard in fuel logistics, quality assurance, and client partnership.
          </p>
        </div>

        {/* Achievement Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-8">
              Transforming Industries
              <span className="block text-3xl md:text-4xl text-gray-600 mt-2 font-cormorant italic">
                Through Fuel Excellence
              </span>
            </h3>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed font-cormorant">
              Our expertise spans mining operations in the Witwatersrand, agricultural fleets across KwaZulu-Natal, 
              and commercial transport networks from Cape Town to Johannesburg. Every partnership is built on 
              decades of refined processes, cutting-edge technology, and an unwavering commitment to operational excellence.
            </p>

            <div className="space-y-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group cursor-pointer border border-gray-100"
                  >
                    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-black transition-all duration-500 mr-6 flex-shrink-0">
                      <Icon size={24} className="text-black group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-black mb-2 group-hover:text-gray-900 transition-colors duration-500">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 font-cormorant text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <Button className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-semibold transition-all duration-500 hover-lift group">
                <span className="flex items-center">
                  Explore Our Legacy
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index}
                  className={`border-none shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group cursor-pointer overflow-hidden ${
                    activeCard === index ? 'scale-105 bg-black text-white' : 'bg-white hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className={`p-4 rounded-full mr-6 transition-all duration-500 ${
                        activeCard === index ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-black'
                      }`}>
                        <Icon size={28} className={`transition-colors duration-500 ${
                          activeCard === index ? 'text-white' : 'text-black group-hover:text-white'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className={`font-playfair text-2xl font-bold transition-colors duration-500 ${
                            activeCard === index ? 'text-white' : 'text-black'
                          }`}>
                            {achievement.title}
                          </h3>
                          <span className={`text-sm font-semibold px-3 py-1 rounded-full transition-all duration-500 ${
                            activeCard === index ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {achievement.stats}
                          </span>
                        </div>
                        <p className={`font-cormorant text-lg leading-relaxed transition-colors duration-500 ${
                          activeCard === index ? 'text-gray-200' : 'text-gray-600'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Industry Leadership Statement */}
        <div className="text-center bg-black text-white py-20 px-8 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="relative z-10">
            <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
              The Fuel Behind South Africa's Growth
            </h3>
            <p className="font-cormorant text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
              "In an industry where precision means the difference between operational success and costly downtime, 
              Mphela Industries stands as the unwavering foundation upon which South Africa's most critical 
              industries build their success."
            </p>
            <div className="text-gray-400 font-cormorant">
              — Industry Recognition, South African Petroleum Association
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
