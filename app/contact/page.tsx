"use client"
import { BarChart3, TrendingUp, DollarSign, Globe, Zap, Target, Mail, Phone, HelpCircle, Briefcase, Wrench, ChevronDown, Send } from 'lucide-react';
import React, { useState } from 'react'

const Contact = () => {
      const [selectedSubject, setSelectedSubject] = useState('');

  return (
    <div>

          {/* Support Center Section */}
      <section className=" ">
        <div className=" mx-auto   px-6">
          <div className="text-center bg-white py-20 mb-16">
            <h1 >
              Support Center
            </h1>
            <p className="subtitle">
              We&apos;re here to help you make the most of your experience with Domain Parking. Our team 
              is ready to support you.
            </p>
          </div>

          <div className="mb-20 py-10 px-6 ">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
              How We Can Help
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white shadow-sm rounded-xl ">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">General Inquiries</h4>
                <p className="text-slate-600">
                  Questions about our portfolio or upcoming platform features.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white shadow-sm rounded-xl ">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Domain Acquisitions</h4>
                <p className="text-slate-600">
                  Guidance on purchasing or negotiating for one of our premium domains.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white shadow-sm rounded-xl ">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Partnerships</h4>
                <p className="text-slate-600">
                  Explore collaborations and business opportunities with Domain Parking.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white shadow-sm rounded-xl ">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Technical Support</h4>
                <p className="text-slate-600">
                  Help with navigating the site or accessing your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className=" mx-auto px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Info */}
              <div>
                <h1 className="text-4xl font-bold text-slate-800 mb-6">
                  Get in Touch
                </h1>
                <p className=" text-slate-600 mb-8">
                  Fill out the form or use one of the methods below to contact us. Our 
                  team typically responds within 24-48 hours, Monday through Friday.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className='block' >
                    📧
                    </span>
                    <div>
                      <span className="font-semibold text-slate-800">Email:</span>
                      <span className="text-slate-600 ml-2">support@namevault.com</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                       <span className='block'>📞</span>
                    <div>
                      <span className="font-semibold text-slate-800">Phone:</span>
                      <span className="text-slate-600 ml-2">+1 (800) 555-0199</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border space-y-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      className="flex  w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="flex  w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <select 
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="flex h-10 items-center justify-between rounded-md border border-input bg-white text-black px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full mt-2"
                      >
                        <option value="">Select a topic...</option>
                        <option value="general">General Inquiries</option>
                        <option value="domains">Domain Acquisitions</option>
                        <option value="partnerships">Partnerships</option>
                        <option value="technical">Technical Support</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={5}
                      className="flex  w-full rounded-md border border-input bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 resize-vertical"
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="inline-flex font-semibold items-center justify-center gap-2 whitespace-nowrap rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground px-4 py-2 w-full h-12 text-lg bg-slate-900 hover:bg-slate-800"
                  >
                    <Send/>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact