
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceDetailCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    industries: string[];
    gradient: string;
  };
}

const ServiceDetailCard = ({ service }: ServiceDetailCardProps) => {
  const Icon = service.icon;

  return (
    <Card className={`border-none shadow-2xl overflow-hidden bg-gradient-to-br ${service.gradient} text-white`}>
      <CardContent className="p-10">
        <div className="flex items-center mb-6">
          <div className="p-4 rounded-full bg-white/20 mr-6">
            <Icon size={32} className="text-white" />
          </div>
          <h3 className="font-playfair text-3xl font-bold">
            {service.title}
          </h3>
        </div>
        
        <p className="text-gray-200 font-cormorant text-lg leading-relaxed mb-8">
          {service.description}
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 text-lg">Advanced Features:</h4>
            <div className="grid gap-3">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center p-3 bg-white/10 rounded-lg">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="font-cormorant">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Specialized Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {service.industries.map((industry, i) => (
                <span key={i} className="bg-white/20 px-4 py-2 rounded-full text-sm font-cormorant">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceDetailCard;
