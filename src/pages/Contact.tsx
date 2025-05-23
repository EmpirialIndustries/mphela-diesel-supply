
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    volume: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Quote Request Submitted",
      description: "We'll contact you within 24 hours with a competitive quote.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      volume: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Get in touch for competitive diesel pricing and reliable supply solutions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Request a Quote</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will provide you with a competitive quote 
                tailored to your specific diesel supply requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name*</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address*</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Company Name*</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Service Type*</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select Service</option>
                      <option value="bulk-supply">Bulk Diesel Supply</option>
                      <option value="wholesale">Wholesale Distribution</option>
                      <option value="retail">Retail Fuel Solutions</option>
                      <option value="custom">Custom Contract</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Monthly Volume (Litres)</label>
                    <Input
                      type="text"
                      name="volume"
                      value={formData.volume}
                      onChange={handleInputChange}
                      placeholder="e.g., 50,000L"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Additional Details</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your specific requirements, delivery locations, or any special needs..."
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4"
                >
                  Submit Quote Request
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-center">
                    <Phone className="text-orange-600 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900">Phone</h3>
                      <p className="text-gray-600">+27 11 123 4567</p>
                      <p className="text-sm text-gray-500">24/7 Emergency Line: +27 82 987 6543</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-center">
                    <Mail className="text-orange-600 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <p className="text-gray-600">info@mphelaindustries.co.za</p>
                      <p className="text-sm text-gray-500">quotes@mphelaindustries.co.za</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-center">
                    <MapPin className="text-orange-600 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900">Head Office</h3>
                      <p className="text-gray-600">123 Industrial Drive<br />Johannesburg, 2000<br />South Africa</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-center">
                    <Clock className="text-orange-600 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-slate-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 8:00 AM - 2:00 PM</p>
                      <p className="text-sm text-gray-500">Emergency deliveries available 24/7</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map placeholder */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Johannesburg Head Office Location</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
