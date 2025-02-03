'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Building2, Users, Layout, Upload, LogIn, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from '../components/auth/provider';
import { useRouter } from 'next/navigation';
import supabaseClient from '@/app/db/client';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  badge?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, badge }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  return (
    <Link href={href}>
      <motion.div
        className="relative flex items-center px-4 py-2 text-medium font-medium text-white/90 rounded-md group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center gap-2">
          {children}
          {badge && (
            <Badge 
              className="bg-cyan-400/10 text-cyan-400 text-[10px] px-2 py-0.5 absolute -top-2 -right-2"
            >
              Beta
            </Badge>
          )}
        </span>
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </Link>
  );
};

interface NavItem {
  href: string;
  label: string;
  badge?: boolean;
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isLogoutHovered, setIsLogoutHovered] = useState<boolean>(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await supabaseClient.auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const publicNavItems: NavItem[] = [
    { href: "/beta", label: "Partnership", badge: true },
    { href: "/company", label: "Company" }
  ];

  const authenticatedNavItems: NavItem[] = [
    { href: "/overview", label: "Overview" },
    { href: "/uploads", label: "Uploads" }
  ];

  const navItems = user ? authenticatedNavItems : publicNavItems;

  if (loading) {
    return <div className="h-16 bg-[#082832]" />; // Loading skeleton
  }

  return (
    <motion.div
      className={`fixed w-full z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#082832]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/5' 
          : 'bg-[#082832]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <motion.img
            src="/images/mastic-logo.jpeg"
            alt="Faro Logo"
            className="h-5 w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} badge={item.badge}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="ml-auto flex items-center space-x-4">
          {user ? (
            <motion.div
              onHoverStart={() => setIsLogoutHovered(true)}
              onHoverEnd={() => setIsLogoutHovered(false)}
              className="relative"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-white"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: isLogoutHovered ? '100%' : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ) : (
            <Link href="/login">
              <Button
                variant="default"
                size="sm"
                className="bg-white text-black hover:bg-gray-100"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-white/90">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] backdrop-blur-xl bg-[#082832]/95"
            >
              <div className="flex flex-col h-full">
                <motion.nav 
                  className="flex flex-col gap-4 pt-8 flex-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.href}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative"
                    >
                      <Link 
                        href={item.href}
                        className="flex items-center px-2 py-3 text-lg text-white/90 hover:text-white"
                      >
                        {item.label}
                        {item.badge && (
                          <Badge 
                            className="ml-2 bg-cyan-400/10 text-cyan-400 text-xs"
                          >
                            Beta
                          </Badge>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative mt-4"
                  >
                    {user ? (
                      <Button
                        variant="ghost"
                        size="lg"
                        onClick={handleLogout}
                        className="w-full flex items-center justify-start px-2 py-3 text-lg text-white/90 hover:text-white"
                      >
                        <LogOut className="mr-2 h-5 w-5" />
                        Logout
                      </Button>
                    ) : (
                      <Link href="/login" className="w-full">
                        <Button
                          variant="default"
                          size="lg"
                          className="w-full flex items-center justify-start px-2 py-3 text-lg bg-white text-black hover:bg-gray-100"
                        >
                          <LogIn className="mr-2 h-5 w-5" />
                          Login
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                </motion.nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;