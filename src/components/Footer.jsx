import { Mail, Phone, MapPin } from "lucide-react"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-[#0a2a7a] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - Logo & Description */}
          <div>
            <img src="src/assets/soniclogo.jpg" alt="Sonic" className="w-32 mb-4" />
            <p className="text-sm opacity-90">
              Imagine coming home from a long day at work to a pristine, aromatic home.
              If you require our support, just click the link.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-white opacity-80 hover:opacity-100">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Details</h3>
            <p className="flex items-center space-x-2 mb-2">
              <MapPin size={16} className="text-yellow-400" />
              <span>Gra, Nigeria, 18670</span>
            </p>
            <p className="flex items-center space-x-2 mb-2">
              <Mail size={16} className="text-yellow-400" />
              <span>Sonicservice@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone size={16} className="text-yellow-400" />
              <span>+44-5460-0891-65</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="http://localhost:5173/" className=" no-underline">Home</a></li>
              <li><a href="http://localhost:5173/aboutus" className=" no-underline">About Us</a></li>
              <li><a href="http://localhost:5173/services" className="no-underline">Services</a></li>
              <li><a href="http://localhost:5173/login" className=" no-underline">Contacts Us</a></li>
            </ul>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-lg font-bold mb-4">Latest News</h3>
            <div className="flex items-start space-x-3 mb-3">
              <img src="public/kitchen.jpg" alt="News 1" className="w-16 h-16 object-cover rounded-lg" />
              <div>
                <p className="text-sm font-semibold"> <a href="https://squeakycleannigeria.com/" className=" no-underline">How to stay clean from the first time.</a></p>
                <p className="text-xs opacity-80">10 April 2023</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <img src="public/master3.jpg" alt="News 2" className="w-16 h-16 object-cover rounded-lg" />
              <div>
                <p className="text-sm font-semibold"> <a href="https://qmclean.com.ng/" className=" no-underline">Our proprietary enables quality.</a></p>
                <p className="text-xs opacity-80">10 Feb 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-sm mt-8 border-t border-white/20 pt-4">
          © 2023 Sonic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
