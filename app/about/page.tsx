import React from "react";
import { Target, Users, Zap } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-white">
            The Future of Digital Real Estate
          </h1>
          <p className="subtitle text-slate-300 mb-8">
            We are building the premier platform for discovering, acquiring, and
            investing in high-value domain names.
          </p>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="bg-white w-[80%] mx-auto py-10 px-6 rounded-2xl shadow-xl -mt-32 relative z-10">
        <div className=" mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-black font-bold mb-6">Our Story</h2>

            <div>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-base leading-relaxed mb-6 text-[#475569]">
                  At DigitalEstates, we specialize in the discovery,
                  acquisition, and development of premium domain names and
                  digital real estate. What began as a carefully curated domain
                  portfolio worth millions has evolved into a platform designed
                  to connect businesses, investors, and innovators with the most
                  valuable names on the internet.
                </p>

                <p className="text-base leading-relaxed text-[#475569]">
                  Our mission is to unlock the full potential of digital real
                  estate. By combining human expertise with cutting-edge AI
                  technology, we streamline the way domains are sourced,
                  acquired, and monetized. Today, we showcase an exclusive
                  portfolio of high-value domains. Tomorrow, we&apos;re building
                  something bigger: a platform that will redefine how people
                  search for, trade, and build on domains at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className=" mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-5 text-3xl font-bold text-slate-800">
              Our Philosophy
            </h2>
            <p className="text-slate-600">
              Simplicity, transparency, and forward-thinking are at our core.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Purpose-Driven */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="">
                Purpose-Driven
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Every domain we acquire is chosen with purpose—anticipating
                trends, industries, and global shifts to give you a competitive
                edge.
              </p>
            </div>

            {/* Customer-Centric */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="">
                Customer-Centric
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Whether you&apos;re an entrepreneur or a major brand, we&apos;re here to
                help you secure the digital assets that define your future.
              </p>
            </div>

            {/* Foundation for the Future */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="">
                Foundation for the Future
              </h3>
              <p className="text-slate-600 leading-relaxed">
                This is more than a portfolio. It&apos;s the foundation for the
                future of how digital real estate is built and traded.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
