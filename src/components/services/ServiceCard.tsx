
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    industries: string[];
    gradient: string;
  };
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard = ({ service, isActive, onClick }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <div 
      className={`p-6 rounded-xl cursor-pointer transition-all duration-700 border-2 ${
        isActive 
          ? 'bg-black text-white border-black shadow-2xl scale-105' 
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full mr-4 transition-all duration-500 ${
          isActive ? 'bg-white/20' : 'bg-gray-100'
        }`}>
          <Icon size={24} className={`transition-colors duration-500 ${
            isActive ? 'text-white' : 'text-black'
          }`} />
        </div>
        <h4 className="font-playfair text-xl font-semibold">
          {service.title}
        </h4>
      </div>
      
      {isActive && (
        <div className="space-y-4 animate-fade-in">
          <p className="text-gray-200 font-cormorant leading-relaxed">
            {service.description}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold mb-2 text-white">Key Features:</h5>
              <ul className="space-y-1 text-sm text-gray-300">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-white">Target Industries:</h5>
              <div className="flex flex-wrap gap-2">
                {service.industries.map((industry, i) => (
                  <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full text-gray-200">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
