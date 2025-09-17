'use client'
import React, { useState } from 'react';
import { Target, Users, Zap, Handshake, Send, CheckCircle, TrendingUp } from 'lucide-react';

export default function SellWithUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    domainName: '',
    askingPrice: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#182235] text-white relative ">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div> */}
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-yellow-500/20 rounded-full">
            <Handshake className="w-10 h-10 text-yellow-400" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Sell Your Premium Domain
          </h1>
          <p className="text-xl md:text-2xl pb-10 text-slate-300 max-w-5xl mx-auto leading-relaxed">
            Partner with DigitalEstates to connect your high-value domains with a global network 
            of qualified buyers. Submit your domain for a confidential review by our expert team.
          </p>
        </div>
      </section>
       {/* Domain Submission Form Section */}
      <section className="  bg-[#F8FAFC]">
        <div className=" mx-auto px-6">
          <div className="max-w-4xl mx-auto">
     

            <div className="bg-white w-fit relative -top-20 mx-auto rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
              <div className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black text-black">
                      Full Name
                    </label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black text">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black text">
                    Phone Number (Optional)
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
                  />
                </div>

                {/* Domain and Price Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black text">
                      Domain Name
                    </label>
                    <input 
                      type="text"
                      name="domainName"
                      value={formData.domainName}
                      onChange={handleInputChange}
                      placeholder="e.g., example.com"
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black text">
                      Asking Price (USD)
                    </label>
                    <input 
                      type="text"
                      name="askingPrice"
                      value={formData.askingPrice}
                      onChange={handleInputChange}
                      placeholder="e.g., 5000 or 'Negotiable'"
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black text">
                    Additional Information (Optional)
                  </label>
                  <textarea 
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us more about the domain, its history, or why it's valuable."
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical text-lg"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Submit Domain
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Partner with DigitalEstates?
            </h2>
            <p className="text-xl text-slate-600 mb-16">
              Leverage our expertise and reach to achieve the best possible price for your asset.
            </p>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Qualified Buyers</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your domain is presented to a curated network of entrepreneurs, investors, and 
                  brands actively seeking premium digital assets.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Expert Negotiation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our experienced brokers can handle negotiations on your behalf to maximize 
                  your sale price and ensure a smooth transaction.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Market Insight</h3>
                <p className="text-slate-600 leading-relaxed">
                  We use real-time market data to accurately value your domain and position it for a 
                  successful sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



     

    </div>
  );
}