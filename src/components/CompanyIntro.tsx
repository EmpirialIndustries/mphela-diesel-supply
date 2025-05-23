
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Truck, Clock } from "lucide-react";

const CompanyIntro = () => {
  const features = [
    {
      icon: <Shield className="text-orange-600" size={48} />,
      title: "Quality Assurance",
      description: "Certified diesel sourced from trusted refineries with rigorous quality control."
    },
    {
      icon: <Truck className="text-orange-600" size={48} />,
      title: "Reliable Logistics",
      description: "Professional fleet ensuring safe and timely delivery across South Africa."
    },
    {
      icon: <Clock className="text-orange-600" size={48} />,
      title: "Timely Delivery",
      description: "On-time delivery guarantee with flexible scheduling to meet your needs."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Leading Diesel Wholesale Supply
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mphela Industries has established itself as a trusted partner in South Africa's fuel industry. 
            We provide comprehensive bulk diesel solutions with an unwavering commitment to quality, 
            reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Partnership You Can Trust
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With strategic partnerships across certified refineries and a robust logistics network, 
                we ensure consistent supply of high-quality diesel products. Our customer-centric approach 
                means flexible contracts, competitive pricing, and solutions tailored to your specific requirements.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Certified refinery partnerships
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Nationwide delivery coverage
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  24/7 customer support
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=3498&auto=format&fit=crop"
                alt="Professional logistics and delivery"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
