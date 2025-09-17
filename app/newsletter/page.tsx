"use client"
import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Email Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100 rounded-full p-6">
            <Mail className="h-12 w-12 text-blue-600" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          Join Our Newsletter
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Get exclusive access to newly listed premium domains, market insights, and
          special promotions delivered right to your inbox.
        </p>

        {/* Email Form */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 px-6 py-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
          <button
            onClick={handleSubmit}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}