
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Mphela Industries</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Building South Africa's fuel infrastructure through reliable partnerships and exceptional service.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to transform South Africa's diesel supply chain, Mphela Industries 
                has grown from a regional supplier to a national leader in bulk fuel distribution. Our 
                commitment to quality, reliability, and customer satisfaction has earned us the trust of 
                mining companies, transport fleets, and retail partners across the country.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through strategic partnerships with certified refineries and continuous investment in 
                our logistics infrastructure, we ensure that South African businesses have access to 
                high-quality diesel when and where they need it most.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=6000&auto=format&fit=crop"
                alt="Modern fuel industry operations"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide reliable, high-quality diesel supply solutions that power South Africa's 
                  economic growth while maintaining the highest standards of safety and environmental responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading diesel wholesale supplier in Southern Africa, recognized for innovation, 
                  reliability, and exceptional customer service across all market segments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrity, reliability, innovation, and sustainability guide everything we do. We believe 
                  in building long-term partnerships based on trust and mutual success.
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

export default About;
