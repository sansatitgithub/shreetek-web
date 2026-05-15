"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Globe, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "IT Staffing", href: "/recruitment#it-staffing" },
    { name: "Permanent Hiring", href: "/recruitment#permanent" },
    { name: "Contract Staffing", href: "/recruitment#contract" },
    { name: "H1B Transfer Support", href: "/recruitment#h1b" },
    { name: "GC Processing", href: "/recruitment#gc" },
    { name: "Software Development", href: "/software" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Industries", href: "/industries" },
    { name: "Contact Us", href: "/contact" },
    { name: "Submit Resume", href: "/resume#submit-form" },
  ],
  industries: [
    { name: "Technology", href: "/industries" },
    { name: "Healthcare", href: "/industries" },
    { name: "Finance", href: "/industries" },
    { name: "Manufacturing", href: "/industries" },
    { name: "Retail", href: "/industries" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <defs>
                    <linearGradient id="logoGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#0EA5E9" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#logoGradFooter)" />
                  <path d="M20 6C14 6 10 10 10 16c0 4 2 7 10 17 8-10 10-13 10-17 0-6-4-10-10-10z" fill="rgba(255,255,255,0.2)" />
                  <path d="M6 20h28M20 6v28" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                  <circle cx="20" cy="20" r="6" fill="white" />
                  <text x="20" y="24" textAnchor="middle" fill="#2563EB" fontSize="14" fontWeight="bold">S</text>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Shreetek <span className="text-[#0EA5E9]">Inc</span>
              </span>
            </Link>
            
            <p className="text-white/60 mb-8 leading-relaxed max-w-md">
              Shreetek Inc. delivers elite technical staffing and bespoke software solutions. Your trusted partner for recruitment and technology transformation in the USA.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={18} className="text-[#0EA5E9]" />
                <span>41642 Bostonian Place, Aldie, VA 20105</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone size={18} className="text-[#0EA5E9]" />
                <span>+1 (703) 599-0008</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Mail size={18} className="text-[#0EA5E9]" />
                <span>info@shreetek.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowRight size={12} className="text-[#0EA5E9]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowRight size={12} className="text-[#0EA5E9]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold mb-6">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowRight size={12} className="text-[#0EA5E9]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Shreetek Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Globe, label: "LinkedIn" },
              { icon: MessageCircle, label: "Twitter" },
              { icon: Share2, label: "Facebook" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}