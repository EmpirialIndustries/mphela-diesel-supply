
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Quality = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Quality Assurance</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Rigorous quality control processes ensuring premium diesel supply from trusted refineries.
          </p>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Quality Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality assurance from source to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Certified Refineries</h3>
                <p className="text-gray-600 mb-4">
                  Sourcing exclusively from certified South African refineries with proven track records.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• EN590 compliance certification</li>
                  <li>• Regular refinery audits</li>
                  <li>• Quality documentation tracking</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Testing Protocols</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive fuel testing at multiple stages of the supply chain.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pre-delivery quality testing</li>
                  <li>• Laboratory analysis reports</li>
                  <li>• Customer quality guarantees</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;
