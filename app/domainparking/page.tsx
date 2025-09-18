import React from "react";
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Globe,
  Zap,
  Target,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function DomainParkingPage() {
  return (
    <div >
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#1C2638] overflow-hidden">
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-green-500/20 rounded-full">
            <DollarSign className="w-10 h-10 text-green-400" />
          </div>

          <h1 className=" text-white mb-6 ">
            Domain Parking
          </h1>

          <p className=" text-slate-300 subtitle">
            Turn your unused domains into revenue streams. Our advanced parking
            platform monetizes your dormant digital assets through targeted
            advertising and smart optimization.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 ">
        <div className=" mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-2">
            How Domain Parking Works
          </h2>

          <p className="subtitle  text-center text-slate-600 max-w-2xl mx-auto">
            Transform your unused domains into passive income with our
            intelligent parking system
          </p>

          <div className="grid mt-20 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Globe className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Add Your Domains
              </h3>
              <p className="text-slate-600">
                Simply point your unused domains to our parking platform. We
                handle all the technical setup automatically.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Smart Ad Placement
              </h3>
              <p className="text-slate-600">
                Our AI analyzes your domain keywords and visitor behavior to
                display the most relevant, high-paying advertisements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                <DollarSign className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Earn Revenue
              </h3>
              <p className="text-slate-600">
                Get paid monthly with competitive revenue sharing. The more
                traffic your domains receive, the more you earn.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white ">
        <div className=" p-4 mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-800 mb-10">
              Maximize Your Domain Revenue
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Features List */}
              <div className="space-y-12">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Real-time Analytics
                    </h3>
                    <p className="text-slate-600 subtitle text-base">
                      Track clicks, impressions, and earnings with detailed
                      reporting and insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Automatic Optimization
                    </h3>
                    <p className="text-slate-600 subtitle text-base">
                      Our system continuously optimizes ad placement and
                      keywords for maximum revenue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Competitive Payouts
                    </h3>
                    <p className="text-slate-600 subtitle text-base font-normal">
                      Earn up to 80% revenue share with monthly payments and low
                      minimum thresholds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Revenue Calculator */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">
                  Revenue Calculator
                </h3>

                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-base font-normal">
                      Daily Visitors:
                    </span>
                    <span className="font-bold text-slate-800 text-lg">
                      1,000
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-base font-normal">Click Rate:</span>
                    <span className="font-bold text-slate-800 text-lg">3%</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-base font-normal">
                      Cost Per Click:
                    </span>
                    <span className="font-bold text-slate-800 text-lg">
                      $0.50
                    </span>
                  </div>

                  <hr className="border-gray-300 my-6" />

                  <div className="flex justify-between items-center py-2">
                    <span className="text-green-600 font-bold text-xl">
                      Monthly Earnings:
                    </span>
                    <span className="font-bold text-green-600 text-2xl">
                      ~$360
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E293B]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
Start Parking Your Domains Today
          </h2>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of domain owners already earning passive income
            through our parking platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-8 h-14 text-lg rounded-xl bg-white text-slate-900 hover:bg-slate-100">
              Get Started Now <ArrowRight height={4} width={4} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
