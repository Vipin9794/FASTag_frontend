import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">BuildEase</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Your trusted partner for seamless house construction and renovation
            work. Connect directly with verified professionals and save time
            and money.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">About</a></li>
            <li><a href="#" className="hover:text-yellow-300">Services</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-200 text-sm">
            📍 Jaipur, Rajasthan, India
          </p>
          <p className="text-gray-200 text-sm mt-1">
            📧 support@buildease.com
          </p>
          <p className="text-gray-200 text-sm mt-1">
            📞 +91 98765 43210
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-yellow-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" mt-10 pt-5 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">BuildEase</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
