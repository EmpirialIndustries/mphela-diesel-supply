
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CapabilityCardProps {
  capability: {
    icon: LucideIcon;
    title: string;
    description: string;
    stat: string;
  };
  index: number;
}

const CapabilityCard = ({ capability, index }: CapabilityCardProps) => {
  const Icon = capability.icon;

  return (
    <Card 
      className="border-none shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 group cursor-pointer bg-white hover:bg-black overflow-hidden"
    >
      <CardContent className="p-8 text-center">
        <div className="p-4 rounded-full bg-gray-100 group-hover:bg-white/20 transition-all duration-500 inline-block mb-6">
          <Icon size={32} className="text-black group-hover:text-white transition-colors duration-500" />
        </div>
        <h3 className="font-playfair text-xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-500">
          {capability.title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-200 font-cormorant leading-relaxed mb-4 transition-colors duration-500">
          {capability.description}
        </p>
        <div className="text-2xl font-bold gradient-text group-hover:text-white transition-colors duration-500">
          {capability.stat}
        </div>
      </CardContent>
    </Card>
  );
};

export default CapabilityCard;
