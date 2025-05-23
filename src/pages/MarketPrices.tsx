
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const MarketPrices = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BRENT",
      "interval": "D",
      "timezone": "Africa/Johannesburg",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_chart"
    });

    if (chartRef.current) {
      chartRef.current.appendChild(script);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.innerHTML = '';
      }
    };
  }, []);

  const currentPrices = {
    inland: 18.90,
    coastal: 18.11,
    lastUpdated: "May 2025"
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Market Prices</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Stay informed with real-time crude oil prices and current South African diesel wholesale rates.
          </p>
        </div>
      </section>

      {/* Current Diesel Prices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Current Diesel Wholesale Prices</h2>
            <p className="text-xl text-gray-600">Updated monthly based on Department of Mineral Resources data</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Inland Regions</h3>
                <div className="text-5xl font-bold text-orange-600 mb-4">R{currentPrices.inland}</div>
                <p className="text-gray-600 text-lg">per litre (0.05% sulphur)</p>
                <p className="text-sm text-gray-500 mt-4">Johannesburg, Pretoria, Durban inland areas</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Coastal Regions</h3>
                <div className="text-5xl font-bold text-orange-600 mb-4">R{currentPrices.coastal}</div>
                <p className="text-gray-600 text-lg">per litre (0.05% sulphur)</p>
                <p className="text-sm text-gray-500 mt-4">Cape Town, Durban, Port Elizabeth</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> {currentPrices.lastUpdated} | 
              <strong> Source:</strong> Department of Mineral Resources & Energy, Central Energy Fund
            </p>
          </div>
        </div>
      </section>

      {/* Live Crude Oil Chart */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Live Brent Crude Oil Prices</h2>
            <p className="text-xl text-gray-600">
              Track global crude oil prices that directly influence South African diesel costs
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div 
                id="tradingview_chart" 
                ref={chartRef}
                style={{ height: '500px', width: '100%' }}
              ></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Price Explanation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Understanding Diesel Pricing</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                South African diesel prices are influenced by several key factors, with international 
                crude oil prices being the primary driver. Our pricing structure reflects these 
                global market conditions while maintaining competitive rates for our customers.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Price Factors:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  International crude oil prices (Brent Crude)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  USD/ZAR exchange rate fluctuations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Refinery processing costs and margins
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Transportation and logistics costs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Regional supply and demand dynamics
                </li>
              </ul>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Price Trends & Forecast</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Recent Trend</h4>
                    <p className="text-green-700 text-sm">
                      Diesel prices have stabilized following global market adjustments, 
                      with coastal regions maintaining a R0.79 per litre advantage over inland areas.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Outlook</h4>
                    <p className="text-blue-700 text-sm">
                      Market analysts project moderate price stability through Q2 2025, 
                      subject to global economic conditions and OPEC production decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketPrices;
