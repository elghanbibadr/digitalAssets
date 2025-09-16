import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-slate-900 border-t border-slate-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">👑</span>
                </div>
                <span className="text-white font-bold">DigitalEstates</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
          Your trusted marketplace for premium domain names. Discover, acquire, and invest in digital real estate.
              </p>
            </div>
       
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400 text-base">
                <li><a href="#" className="hover:text-white transition-colors">hello@digitalestates.com
</a></li>
   
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-slate-400 text-base">
                <li className='flex gap-x-6'><a href="#" className="hover:text-white  flex transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter w-5 h-5" data-filename="layout" data-linenumber="444" data-visual-selector-id="layout444" data-source-location="layout:444:18" data-dynamic-content="false"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  <span className='block ml-2'>Follow us on X</span>
                  </a></li>
            
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm md:text-base">
              © 2025 DigitalEstates. Premium domains for exceptional brands.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer