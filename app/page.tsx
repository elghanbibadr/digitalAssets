"use client";
import React from "react";
import NoDomainsFound from "./componenets/NoDomaineFound";

const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 sm:py-24 ">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="">
                  <span className="block text-[#0F172A]">Premium</span>
                  <span className="block text-[#DFA928] ">Domains</span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="max-w-4xl subtitle mx-auto">
                  <span className=" block">
                  Discover premium domain names that define the future of
                  digital real estate. Your perfect digital address awaits.
                </span>
              </div>
            </div>
          </div>
        </div>
        <NoDomainsFound/>
      </main>

    </div>
  );
};

export default Home;
