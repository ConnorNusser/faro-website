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
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div className="flex flex-col">
            <ListHeader>Company</ListHeader>
            <div className="space-y-3">
              <Link href="/company" className="text-white/70 hover:text-white transition-colors block">
                About Us
              </Link>
              <Link href="/careers" className="text-white/70 hover:text-white transition-colors block">
                Careers
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col">
            <ListHeader>Support</ListHeader>
            <div className="space-y-3">
              <Link href="/community-guidelines" className="text-white/70 hover:text-white transition-colors block">
                Community Guidelines
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <ListHeader>Legal</ListHeader>
            <div className="space-y-3">
              <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors block">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/70 hover:text-white transition-colors block">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <ListHeader>Contact</ListHeader>
            <div className="space-y-3">
              <a href="mailto:contact@mastic.ai" className="text-white/70 hover:text-white transition-colors block">
                contact@mastic.ai
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Mastic LLC. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;