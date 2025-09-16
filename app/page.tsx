"use client";
import React, { useState } from "react";

const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 sm:py-24 ">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-display font-semibold text-6xl md:text-7xl lg:text-8xl text-slate-900 mb-8 leading-none">
                  <span className="block text-[#0F172A]">Premium</span>
                  <span className="block text-[#DFA928] ">Domains</span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Discover premium domain names that define the future of
                  digital real estate. Your perfect digital address awaits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
