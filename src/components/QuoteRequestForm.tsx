
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Truck, Factory, Fuel, Shield } from "lucide-react";

const QuoteRequestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    volumeRequired: "",
    deliveryLocation: "",
    timeframe: "",
    additionalRequirements: ""
  });

  const serviceTypes = [
    { value: "bulk-supply", label: "Industrial Bulk Supply", icon: Factory },
    { value: "fleet-transport", label: "Fleet & Transport Solutions", icon: Truck },
    { value: "wholesale", label: "Wholesale Distribution", icon: Fuel },
    { value: "quality-assured", label: "Premium Quality Assurance", icon: Shield }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.serviceType) {
      toast({
        title: "Please fill in all required fields",
        description: "Company name, contact name, email, and service type are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Quote Request Submitted Successfully!",
      description: "Our team will contact you within 24 hours with a comprehensive quote.",
    });

    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      serviceType: "",
      volumeRequired: "",
      deliveryLocation: "",
      timeframe: "",
      additionalRequirements: ""
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-2xl border-none">
          <CardHeader className="bg-black text-white rounded-t-lg">
            <CardTitle className="text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Request Enterprise Quote
              </h2>
              <p className="font-cormorant text-lg text-gray-200">
                Get competitive pricing for your bulk diesel requirements
              </p>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <Input
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    placeholder="Your Company Name"
                    className="border-2 focus:border-black"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <Input
                    value={formData.contactName}
                    onChange={(e) => handleInputChange("contactName", e.target.value)}
                    placeholder="Your Full Name"
                    className="border-2 focus:border-black"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@company.com"
                    className="border-2 focus:border-black"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+27 XX XXX XXXX"
                    className="border-2 focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type *
                </label>
                <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                  <SelectTrigger className="border-2 focus:border-black">
                    <SelectValue placeholder="Select the service you need" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => {
                      const Icon = service.icon;
                      return (
                        <SelectItem key={service.value} value={service.value}>
                          <div className="flex items-center">
                            <Icon size={16} className="mr-2" />
                            {service.label}
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Volume Required (Litres/Month)
                  </label>
                  <Input
                    value={formData.volumeRequired}
                    onChange={(e) => handleInputChange("volumeRequired", e.target.value)}
                    placeholder="e.g., 50,000L"
                    className="border-2 focus:border-black"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Location
                  </label>
                  <Input
                    value={formData.deliveryLocation}
                    onChange={(e) => handleInputChange("deliveryLocation", e.target.value)}
                    placeholder="City, Province"
                    className="border-2 focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Required Timeframe
                </label>
                <Select value={formData.timeframe} onValueChange={(value) => handleInputChange("timeframe", value)}>
                  <SelectTrigger className="border-2 focus:border-black">
                    <SelectValue placeholder="When do you need delivery?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (Within 48 hours)</SelectItem>
                    <SelectItem value="week">Within 1 week</SelectItem>
                    <SelectItem value="month">Within 1 month</SelectItem>
                    <SelectItem value="ongoing">Ongoing contract</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Requirements
                </label>
                <Textarea
                  value={formData.additionalRequirements}
                  onChange={(e) => handleInputChange("additionalRequirements", e.target.value)}
                  placeholder="Please specify any special requirements, diesel grades needed, delivery preferences, or other details..."
                  className="border-2 focus:border-black min-h-[100px]"
                />
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Submit Quote Request
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  * Required fields. We'll respond within 24 hours with a comprehensive quote.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteRequestForm;
