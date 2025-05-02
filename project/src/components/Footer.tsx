import React from 'react';
import { Leaf, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Leaf className="h-6 w-6 text-primary-600" />
              <span className="ml-2 text-lg font-bold text-gray-900">PlantDoctor</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Helping you identify and treat plant diseases with AI technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-primary-600">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-primary-600">Plant Care Guides</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-primary-600">Disease Database</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PlantDoctor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;