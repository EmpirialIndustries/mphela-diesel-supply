
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      title: "Bulk Diesel Supply",
      description: "High-volume diesel delivery for mining operations, transport fleets, and industrial facilities.",
      features: ["0.05% & 0.005% sulphur diesel", "Flexible delivery schedules", "Competitive wholesale pricing"]
    },
    {
      title: "Retail Fuel Solutions",
      description: "Comprehensive fuel supply for retail outlets and fuel stations across South Africa.",
      features: ["Consistent supply guarantee", "Quality assurance testing", "Marketing support"]
    },
    {
      title: "Custom Fuel Contracts",
      description: "Tailored fuel supply agreements designed to meet your specific operational requirements.",
      features: ["Flexible pricing models", "Volume-based discounts", "Long-term partnerships"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Fuel Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From bulk supply to retail solutions, we provide the full spectrum of diesel services 
            tailored to South Africa's diverse industrial needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-orange-300 transition-colors duration-300 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
