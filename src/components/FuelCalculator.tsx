
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Fuel, TrendingUp, MapPin } from "lucide-react";

const FuelCalculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    fuelType: "",
    volume: "",
    location: "",
    deliveryFrequency: ""
  });
  
  const [results, setResults] = useState<{
    estimatedCost: number;
    monthlySavings: number;
    annualVolume: number;
  } | null>(null);

  // Mock pricing data - in real implementation, this would come from an API
  const pricingData = {
    "diesel-005": { basePrice: 18.50, name: "Diesel 0.05% Sulphur" },
    "diesel-0005": { basePrice: 19.20, name: "Diesel 0.005% Sulphur" },
    "premium-blend": { basePrice: 19.80, name: "Premium Custom Blend" }
  };

  const locationMultipliers = {
    "gauteng": 1.0,
    "western-cape": 1.05,
    "kwazulu-natal": 1.02,
    "eastern-cape": 1.08,
    "northern-cape": 1.12,
    "free-state": 1.06,
    "mpumalanga": 1.04,
    "limpopo": 1.10,
    "north-west": 1.07
  };

  const handleInputChange = (field: string, value: string) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCosts = () => {
    if (!calculatorData.fuelType || !calculatorData.volume || !calculatorData.location) {
      return;
    }

    const volume = parseFloat(calculatorData.volume);
    const fuelData = pricingData[calculatorData.fuelType as keyof typeof pricingData];
    const locationMultiplier = locationMultipliers[calculatorData.location as keyof typeof locationMultipliers];
    
    if (!fuelData || !locationMultiplier) return;

    // Calculate base cost
    const basePrice = fuelData.basePrice * locationMultiplier;
    
    // Volume discounts
    let discount = 0;
    if (volume >= 100000) discount = 0.15; // 15% for 100k+ litres
    else if (volume >= 50000) discount = 0.10; // 10% for 50k+ litres
    else if (volume >= 20000) discount = 0.05; // 5% for 20k+ litres

    const discountedPrice = basePrice * (1 - discount);
    const estimatedCost = volume * discountedPrice;
    
    // Calculate potential monthly savings vs retail
    const retailPrice = basePrice * 1.25; // Assume 25% markup at retail
    const monthlySavings = volume * (retailPrice - discountedPrice);
    
    // Calculate annual volume based on frequency
    const frequencyMultipliers = {
      "weekly": 52,
      "bi-weekly": 26,
      "monthly": 12,
      "quarterly": 4
    };
    
    const annualVolume = volume * (frequencyMultipliers[calculatorData.deliveryFrequency as keyof typeof frequencyMultipliers] || 12);

    setResults({
      estimatedCost: Math.round(estimatedCost),
      monthlySavings: Math.round(monthlySavings),
      annualVolume: Math.round(annualVolume)
    });
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full mb-6">
            <Calculator size={20} className="mr-2" />
            <span className="text-sm font-semibold tracking-wider">COST CALCULATOR</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Calculate Your
            <span className="block gradient-text mt-2">Fuel Savings</span>
          </h2>
          <p className="font-cormorant text-xl text-gray-300 max-w-3xl mx-auto">
            Get instant estimates for bulk diesel costs and discover potential savings 
            with our enterprise fuel solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl flex items-center">
                <Fuel className="mr-3" />
                Fuel Cost Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Fuel Type</label>
                <Select value={calculatorData.fuelType} onValueChange={(value) => handleInputChange("fuelType", value)}>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="Select diesel grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diesel-005">Diesel 0.05% Sulphur (Standard)</SelectItem>
                    <SelectItem value="diesel-0005">Diesel 0.005% Sulphur (Euro 5/6)</SelectItem>
                    <SelectItem value="premium-blend">Premium Custom Blend</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Volume Required (Litres per delivery)</label>
                <Input
                  type="number"
                  value={calculatorData.volume}
                  onChange={(e) => handleInputChange("volume", e.target.value)}
                  placeholder="e.g., 10000"
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Delivery Location</label>
                <Select value={calculatorData.location} onValueChange={(value) => handleInputChange("location", value)}>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gauteng">Gauteng</SelectItem>
                    <SelectItem value="western-cape">Western Cape</SelectItem>
                    <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                    <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                    <SelectItem value="northern-cape">Northern Cape</SelectItem>
                    <SelectItem value="free-state">Free State</SelectItem>
                    <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                    <SelectItem value="limpopo">Limpopo</SelectItem>
                    <SelectItem value="north-west">North West</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Delivery Frequency</label>
                <Select value={calculatorData.deliveryFrequency} onValueChange={(value) => handleInputChange("deliveryFrequency", value)}>
                  <SelectTrigger className="bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="How often do you need delivery?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateCosts}
                className="w-full bg-white text-black hover:bg-gray-100 py-3 font-semibold transition-all duration-300"
              >
                Calculate Costs
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {results ? (
              <>
                <Card className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border-white/30 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="mr-3 text-green-400" size={24} />
                      <h3 className="font-playfair text-xl font-bold">Cost Estimate</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="font-cormorant">Estimated Cost per Delivery:</span>
                        <span className="text-2xl font-bold">R{results.estimatedCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="font-cormorant">Monthly Savings vs Retail:</span>
                        <span className="text-xl font-bold text-green-400">R{results.monthlySavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-cormorant">Estimated Annual Volume:</span>
                        <span className="text-lg font-semibold">{results.annualVolume.toLocaleString()}L</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-white/20 text-white">
                  <CardContent className="p-6">
                    <h4 className="font-playfair text-lg font-bold mb-3 flex items-center">
                      <MapPin className="mr-2" size={20} />
                      Included Services
                    </h4>
                    <ul className="space-y-2 text-sm font-cormorant">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        GPS-tracked delivery to your location
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Quality certification and testing
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        24/7 emergency support
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Flexible payment terms
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardContent className="p-12 text-center">
                  <Calculator size={48} className="mx-auto mb-4 text-white/60" />
                  <h3 className="font-playfair text-xl font-bold mb-2">Ready to Calculate?</h3>
                  <p className="font-cormorant text-gray-300">
                    Fill in your requirements to get an instant cost estimate 
                    and discover your potential savings with our bulk diesel solutions.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelCalculator;
