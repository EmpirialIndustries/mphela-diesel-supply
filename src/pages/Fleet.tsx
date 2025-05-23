
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Fleet = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Fleet & Logistics</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Modern fleet and comprehensive logistics network ensuring reliable diesel delivery across South Africa.
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Fleet Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional fleet management and nationwide delivery infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">50+ Vehicles</h3>
                <p className="text-gray-600">Modern tanker fleet with capacities ranging from 10,000L to 40,000L</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nationwide Coverage</h3>
                <p className="text-gray-600">Delivery network covering all major South African cities and industrial areas</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">24/7 Operations</h3>
                <p className="text-gray-600">Round-the-clock logistics support for emergency and scheduled deliveries</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;
