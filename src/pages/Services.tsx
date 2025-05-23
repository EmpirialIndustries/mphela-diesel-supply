
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Bulk Diesel Supply",
      description: "High-volume diesel delivery for industrial operations, mining companies, and large transport fleets.",
      features: [
        "0.05% sulphur diesel (EN590 compliant)",
        "0.005% sulphur diesel for Euro 5/6 vehicles",
        "Minimum delivery quantities from 10,000L",
        "Flexible delivery scheduling",
        "Emergency supply available 24/7"
      ],
      sectors: ["Mining", "Transport & Logistics", "Construction", "Agriculture"]
    },
    {
      title: "Wholesale Distribution",
      description: "Competitive wholesale pricing for fuel retailers and distribution networks across South Africa.",
      features: [
        "Competitive wholesale rates",
        "Volume-based pricing tiers",
        "Monthly price adjustments",
        "Credit facilities available",
        "Marketing and promotional support"
      ],
      sectors: ["Fuel Retailers", "Independent Stations", "Corporate Accounts"]
    },
    {
      title: "Custom Fuel Solutions",
      description: "Tailored fuel supply contracts designed to meet specific operational requirements and budget constraints.",
      features: [
        "Customized pricing models",
        "Flexible payment terms",
        "Long-term supply agreements",
        "Fuel management consulting",
        "Usage reporting and analytics"
      ],
      sectors: ["Corporate Fleets", "Government", "Industrial Facilities"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive diesel supply solutions tailored to South Africa's diverse industrial needs.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Target Sectors:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.sectors.map((sector, sectorIndex) => (
                        <span key={sectorIndex} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                    Request Quote
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <Card className="border-none shadow-xl">
                    <CardContent className="p-0">
                      <img 
                        src={`https://images.unsplash.com/photo-148859449${3 + index}-2429e8be8625?q=80&w=6000&auto=format&fit=crop`}
                        alt={service.title}
                        className="rounded-lg w-full h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diesel Grades Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Diesel Grades Available</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We supply various diesel grades to meet different vehicle and equipment requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Diesel 0.05% Sulphur</h3>
                <p className="text-gray-600 mb-6">
                  Standard diesel for most commercial vehicles and equipment. EN590 compliant with excellent performance characteristics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Suitable for Euro 3/4 vehicles
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Mining and construction equipment
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Marine and generator applications
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Diesel 0.005% Sulphur</h3>
                <p className="text-gray-600 mb-6">
                  Ultra-low sulphur diesel for modern Euro 5/6 vehicles with advanced emission control systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Euro 5/6 compliant vehicles
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    DPF-equipped vehicles
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Reduced environmental impact
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
