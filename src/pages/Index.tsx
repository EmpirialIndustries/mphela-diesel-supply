
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import ServicesOverview from "@/components/ServicesOverview";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CompanyIntro />
      <ServicesOverview />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
