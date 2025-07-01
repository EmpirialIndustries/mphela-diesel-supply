
import { Truck, Factory, Fuel, Shield, Clock, Target, Globe, Zap } from "lucide-react";

export const services = [
  {
    icon: Factory,
    title: "Industrial Bulk Supply",
    description: "Enterprise-grade diesel solutions for mining operations, manufacturing plants, and heavy industry with guaranteed quality and competitive pricing.",
    features: ["500,000L+ capacity deliveries", "0.005% & 0.05% sulphur options", "Custom blending available", "24/7 emergency supply"],
    industries: ["Mining & Extraction", "Manufacturing", "Power Generation", "Marine Operations"],
    gradient: "from-gray-800 to-black"
  },
  {
    icon: Truck,
    title: "Fleet & Transport Solutions",
    description: "Comprehensive fuel management for commercial transport fleets, logistics companies, and distribution networks across South Africa.",
    features: ["Fleet fuel cards", "Real-time consumption tracking", "Multi-location delivery", "Preventive maintenance oils"],
    industries: ["Transport & Logistics", "Construction", "Agriculture", "Emergency Services"],
    gradient: "from-black to-gray-800"
  },
  {
    icon: Fuel,
    title: "Wholesale Distribution",
    description: "Strategic partnerships with fuel retailers, independent stations, and regional distributors with competitive wholesale rates and marketing support.",
    features: ["Volume-based pricing tiers", "Marketing & promotional support", "Technical training programs", "Credit facilities available"],
    industries: ["Fuel Retailers", "Independent Stations", "Rural Cooperatives", "Corporate Accounts"],
    gradient: "from-gray-700 to-black"
  },
  {
    icon: Shield,
    title: "Premium Quality Assurance",
    description: "ISO 9001 certified fuel with comprehensive testing, contamination prevention, and quality guarantees for mission-critical applications.",
    features: ["Laboratory-tested batches", "Contamination insurance", "Quality certificates", "Storage tank cleaning"],
    industries: ["Aerospace", "Healthcare", "Data Centers", "Precision Manufacturing"],
    gradient: "from-gray-900 to-black"
  }
];

export const capabilities = [
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Round-the-clock availability for critical fuel emergencies with guaranteed 4-hour response time.",
    stat: "< 4 Hours"
  },
  {
    icon: Target,
    title: "Precision Logistics",
    description: "GPS-tracked deliveries with real-time monitoring and predictive maintenance scheduling.",
    stat: "99.7% On-Time"
  },
  {
    icon: Globe,
    title: "National Coverage",
    description: "Strategic depot network covering all major industrial centers and remote mining locations.",
    stat: "9 Provinces"
  },
  {
    icon: Zap,
    title: "Digital Integration",
    description: "Advanced fuel management systems with API integration and automated reporting.",
    stat: "100% Digital"
  }
];
