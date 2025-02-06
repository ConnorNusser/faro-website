import React from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

interface ListHeaderProps {
  children: React.ReactNode;
}

const ListHeader: React.FC<ListHeaderProps> = ({ children }) => {
  return (
    <h3 className="text-lg font-medium text-white mb-2">
      {children}
    </h3>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a3340]"> {/* Slightly lighter than #082832 for subtle contrast */}

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Argos LLC. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <div className="flex flex-col">
            <div className="space-y-12 mt-2">
              <a href="mailto:contact@withargos.com" className="text-white/70 hover:text-white transition-colors block text-sm">
                Contact us: contact@withargos.com
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;