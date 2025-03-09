import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { BsTelegram, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#1B1F3B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex justify-between items-center">
          {/* Brand Logo Section */}
          <div>
            <span className="text-2xl font-bold text-white">Stay Vista</span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <BsTelegram size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              <BsGithub size={20} />
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-semibold text-[#1B1F3B]">Company</h3>
            <ul className="space-y-4 mt-4">
              <li>
                <a
                  href="/about-us"
                  className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#1B1F3B]">
              Quick Links
            </h3>
            <ul className="space-y-4 mt-4">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-[#1B1F3B]">Contact</h3>
            <ul className="space-y-4 mt-4">
              <li>
                <p className="text-white">Email: support@stayvista.com</p>
              </li>
              <li>
                <p className="text-white">Phone: +1 234 567 890</p>
              </li>
              <li>
                <p className="text-white">
                  Address: Arif Nagar , Los Santash, Tangail
                </p>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold text-[#1B1F3B]">Newsletter</h3>
            <p className="text-white mt-4">
              Stay updated with the latest news and offers
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 rounded-md w-full text-gray-700"
              />
              <button className="bg-[#1B1F3B] text-white mt-4 p-3 rounded-md w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8">
        <p>&copy; Copyright Stay Vista 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
