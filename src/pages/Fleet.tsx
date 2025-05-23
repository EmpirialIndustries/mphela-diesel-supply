
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Fleet = () => {
  return (
    <div className="min-h-screen bg-rolex-cream-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rolex-green-900 to-rolex-green-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-8 text-rolex-cream-50">Fleet & Logistics</h1>
          <p className="font-cormorant text-xl md:text-2xl max-w-4xl mx-auto text-rolex-cream-100 font-light leading-relaxed">
            Distinguished fleet and comprehensive logistics network ensuring impeccable diesel delivery across South Africa.
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rolex-green-900 mb-8">Our Fleet Capabilities</h2>
            <p className="font-cormorant text-xl text-rolex-green-700 max-w-4xl mx-auto font-light leading-relaxed">
              Professional fleet management and nationwide delivery infrastructure of the highest caliber.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 border-t-4 border-t-rolex-gold-400">
              <CardContent className="p-10 text-center">
                <h3 className="font-playfair text-3xl font-bold text-rolex-green-900 mb-6">50+ Vehicles</h3>
                <p className="font-cormorant text-rolex-green-700 text-lg font-light leading-relaxed">
                  Distinguished tanker fleet with capacities ranging from 10,000L to 40,000L, maintained to the highest standards
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 border-t-4 border-t-rolex-gold-400">
              <CardContent className="p-10 text-center">
                <h3 className="font-playfair text-3xl font-bold text-rolex-green-900 mb-6">Nationwide Coverage</h3>
                <p className="font-cormorant text-rolex-green-700 text-lg font-light leading-relaxed">
                  Comprehensive delivery network covering all major South African cities and industrial areas with precision
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 border-t-4 border-t-rolex-gold-400">
              <CardContent className="p-10 text-center">
                <h3 className="font-playfair text-3xl font-bold text-rolex-green-900 mb-6">24/7 Operations</h3>
                <p className="font-cormorant text-rolex-green-700 text-lg font-light leading-relaxed">
                  Round-the-clock logistics support for emergency and scheduled deliveries with unwavering reliability
                </p>
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
