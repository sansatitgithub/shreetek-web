"use client";

import { motion } from "framer-motion";
import { Building2, Heart, CreditCard, Factory, ShoppingCart, Wifi, Cpu, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

const industries = [
  { icon: Cpu, name: "Technology", desc: "Full-cycle software development and IT staffing for tech companies of all sizes.", services: ["Software Development", "IT Staffing", "Cloud Solutions", "DevOps"] },
  { icon: Heart, name: "Healthcare", desc: "HIPAA-compliant solutions, medical staffing, and healthcare technology implementation.", services: ["Healthcare IT", "Medical Staffing", "Compliance", "Telehealth"] },
  { icon: CreditCard, name: "BFSI", desc: "Secure financial software, compliance solutions, and fintech development for banking.", services: ["Fintech", "Banking Solutions", "Risk Management", "Compliance"] },
  { icon: Factory, name: "Manufacturing", desc: "Automation solutions, supply chain software, and industrial IoT implementations.", services: ["Automation", "Supply Chain", "IoT", "ERP Systems"] },
  { icon: ShoppingCart, name: "Retail & E-Commerce", desc: "E-commerce platforms, POS systems, and omnichannel retail solutions.", services: ["E-commerce", "POS Systems", "Inventory", "CRM"] },
  { icon: Wifi, name: "Telecom", desc: "Telecommunications infrastructure, network solutions, and digital transformation.", services: ["Network Solutions", "Infrastructure", "5G", "IoT"] },
  { icon: Truck, name: "Logistics", desc: "Supply chain optimization, fleet management, and logistics technology solutions.", services: ["Supply Chain", "Fleet Management", "Warehousing", "Analytics"] },
  { icon: Building2, name: "Enterprise", desc: "Comprehensive enterprise technology solutions for large-scale organizations.", services: ["Enterprise IT", "Digital Transformation", "Cloud", "Security"] },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80")'}} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-white">Industries</span>
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">Expertise Across Industries</h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">Tailored solutions for every sector. From healthcare to finance, we understand each industry's unique challenges and deliver results.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all card-equal-height">
                <div className="w-14 h-14 rounded-xl blue-gradient flex items-center justify-center mb-6">
                  <ind.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{ind.name}</h3>
                <p className="text-[#64748B] mb-6 leading-relaxed">{ind.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.services.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-[#F8FAFC] rounded-full text-sm text-[#64748B] font-medium">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Don't See Your Industry?</h2>
            <p className="text-xl text-[#64748B] mb-10">We have experience across many sectors. Let's discuss your specific needs.</p>
            <Link href="/contact" className="px-10 py-5 text-lg font-bold text-white blue-gradient rounded-2xl hover:shadow-2xl hover:shadow-[#2563EB]/40 transition-all inline-flex items-center gap-2">
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}