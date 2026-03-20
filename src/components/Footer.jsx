

import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Logo + Tagline */}
        <div>
          <img 
            src={logo} 
            alt="HelloQ Logo" 
            className="w-32 object-contain"
          />
          <p className="mt-4 text-sm text-gray-400">
            Where everyone belongs.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Download</li>
            <li className="hover:text-white cursor-pointer">Updates</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Safety</li>
            <li className="hover:text-white cursor-pointer">Community Guidelines</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">TikTok</li>
            <li className="hover:text-white cursor-pointer">Discord</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HelloQ. All rights reserved.
        <span className="ml-2">Made with love for everyone 🌈</span>
      </div>

    </footer>
  );
}

export default Footer;