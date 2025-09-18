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
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 bg-[#182235] text-white relative ">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div> */}
        <div className="relative mb-14 container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-yellow-500/20 rounded-full">
            <Handshake className="w-10 h-10 text-yellow-400" />
          </div>
          
          <h1 className='text-white' >
            Sell Your Premium Domain
          </h1>
          <p className="subtitle text-slate-300">
            Partner with DigitalEstates to connect your high-value domains with a global network 
            of qualified buyers. Submit your domain for a confidential review by our expert team.
          </p>
        </div>
      </section>
       {/* Domain Submission Form Section */}
      <section className="  ">
        <div className=" mx-auto px-6">
          <div className="max-w-4xl mx-auto">
     

            <div className=" md:w-[70%] relative -top-20 mx-auto rounded-3xl p-8  shadow-xl border border-gray-200 bg-white p-8 rounded-2xl shadow-xl border space-y-6">
              <div className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label >
                      Full Name
                    </label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label >
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label >
                    Phone Number (Optional)
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Domain and Price Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label >
                      Domain Name
                    </label>
                    <input 
                      type="text"
                      name="domainName"
                      value={formData.domainName}
                      onChange={handleInputChange}
                      placeholder="e.g., example.com"
                    />
                  </div>
                  
                  <div>
                    <label >
                      Asking Price (USD)
                    </label>
                    <input 
                      type="text"
                      name="askingPrice"
                      value={formData.askingPrice}
                      onChange={handleInputChange}
                      placeholder="e.g., 5000 or 'Negotiable'"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label >
                    Additional Information (Optional)
                  </label>
                  <textarea 
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us more about the domain, its history, or why it's valuable."
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 text-slate-700  text-sm focus:border-transparent outline-none transition-all resize-vertical text-lg"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform  flex items-center justify-center"
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
      <section className="py-20 ">
        <div className=" mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Partner with DigitalEstates?
            </h2>
            <p className="text-xl text-slate-600 mb-16">
              Leverage our expertise and reach to achieve the best possible price for your asset.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="">Qualified Buyers</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your domain is presented to a curated network of entrepreneurs, investors, and 
                  brands actively seeking premium digital assets.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="">Expert Negotiation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our experienced brokers can handle negotiations on your behalf to maximize 
                  your sale price and ensure a smooth transaction.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="">Market Insight</h3>
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