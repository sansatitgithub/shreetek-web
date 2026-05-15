"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Briefcase, Code2, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Services",
    href: "/recruitment",
    hasDropdown: true,
    dropdownItems: [
      { name: "Recruitment Services", href: "/recruitment", icon: Briefcase },
      { name: "Software Development", href: "/software", icon: Code2 },
      { name: "Why Choose Us", href: "/#why-us", icon: Star },
    ]
  },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-dark shadow-lg shadow-black/20"
          : "bg-[#0F172A]/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="url(#logoGrad)" />
                <path d="M20 6C14 6 10 10 10 16c0 4 2 7 10 17 8-10 10-13 10-17 0-6-4-10-10-10z" fill="rgba(255,255,255,0.2)" />
                <path d="M6 20h28M20 6v28" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                <circle cx="20" cy="20" r="6" fill="white" />
                <text x="20" y="24" textAnchor="middle" fill="#2563EB" fontSize="14" fontWeight="bold">S</text>
              </svg>
            </div>
            <span className="text-xl font-bold text-white whitespace-nowrap">
              Shreetek<span className="text-[#2563EB]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href || '/'}
                  className="flex items-center gap-1 px-4 py-2 text-[15px] font-semibold text-white/80 hover:text-white transition-colors relative group"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] group-hover:w-full transition-all duration-300" />
                </Link>

                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden"
                  >
                    <div className="p-3 space-y-1">
                      {item.dropdownItems.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-[#2563EB]/10 rounded-xl transition-all group/item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center group-hover/item:bg-[#2563EB]/20 transition-colors">
                            <subItem.icon size={16} className="text-[#0EA5E9]" />
                          </div>
                          <span className="font-medium">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/resume#submit-form"
              className="px-6 py-2.5 text-[15px] font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-xl hover:shadow-lg hover:shadow-[#2563EB]/30 transition-all"
            >
              Submit Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0F172A] border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href || '/'}
                    className="block px-4 py-3 text-white font-medium hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdownItems && (
                    <div className="ml-6 space-y-1 pb-2">
                      {item.dropdownItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  href="/resume#submit-form"
                  className="block w-full px-4 py-3 text-center text-white font-bold bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Submit Resume
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}