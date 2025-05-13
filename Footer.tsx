import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MediScan. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Made with</span>
            <Heart size={14} className="text-error-500 fill-error-500" />
            <span>for a healthier world</span>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary-500">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400">
          <p>This application is for educational purposes only. Always consult a healthcare professional for medical advice.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;