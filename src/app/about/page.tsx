"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Users, ArrowRight, Award, Clock, Globe, MapPin } from "lucide-react";
import Link from "next/link";

const timeline = [
  { year: "2015", title: "Founded in Virginia", desc: "Established in Aldie, VA with a vision to transform technical recruitment in the USA" },
  { year: "2018", title: "Service Expansion", desc: "Expanded to include software development, cloud solutions, and enterprise applications" },
  { year: "2020", title: "Rapid Growth", desc: "Achieved 500+ successful placements and expanded staffing operations into new industry verticals" },
  { year: "2023", title: "Industry Leadership", desc: "Recognized as a premier IT staffing partner serving Fortune 500 companies nationwide" },
  { year: "2024", title: "AI-Powered Innovation", desc: "Integrated AI-powered recruitment tools and expanded software development capabilities" },
];

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Connecting exceptional talent with transformative opportunities across the USA" },
  { icon: Shield, title: "Integrity First", desc: "Transparent processes, honest communication, and ethical business practices" },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing cutting-edge technology to deliver faster, smarter solutions" },
  { icon: Users, title: "People First", desc: "Building lasting relationships with candidates and clients alike" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80")'}} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-white">About Shreetek</span>
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">Building America's Tech Future</h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Shreetek Inc. is a premier US-based technology solutions company specializing in elite technical staffing 
              and custom software development. Headquartered in Sterling, Virginia, we bridge the gap between world-class
              IT professionals and American companies that need them most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-2xl blue-gradient flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Mission</h2>
              <p className="text-lg text-[#64748B] leading-relaxed">
                To empower American businesses with exceptional technical talent and innovative software solutions.
                We strive to be the most trusted recruitment partner in the US, delivering quality hires that drive
                lasting business success for every client we serve.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center mb-6">
                <Lightbulb size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Vision</h2>
              <p className="text-lg text-[#64748B] leading-relaxed">
                To become the leading US-based technology solutions company, recognized for excellence in recruitment, 
                software development, and client satisfaction. We envision a future where every company has access 
                to the talent they need to innovate and grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-sm font-semibold text-[#2563EB]">Our Values</span>
            </span>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">What Drives Us</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all card-equal-height">
                <div className="w-14 h-14 rounded-xl blue-gradient flex items-center justify-center mb-6">
                  <v.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{v.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-[#0EA5E9]">Our Journey</span>
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">Years of <span className="gradient-text">Excellence</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-dark rounded-2xl p-8 border border-white/10">
                <div className="text-3xl font-bold gradient-text mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5,000+", label: "Placements", icon: Users },
              { value: "98%", label: "Client Satisfaction", icon: Award },
              { value: "11+", label: "Years Experience", icon: Clock },
              { value: "500+", label: "Companies", icon: Globe },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={28} className="text-[#2563EB]" />
                </div>
                <div className="text-4xl font-bold gradient-text-dark mb-2">{s.value}</div>
                <div className="text-[#64748B] font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                <span className="text-sm font-semibold text-[#0EA5E9]">Headquarters</span>
              </span>
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Based in Virginia's Tech Corridor</h2>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                Located in Sterling, Virginia, in the heart of the Dulles tech corridor, Shreetek benefits from proximity
                to top technology companies, universities, and talent pools across the Washington D.C. metropolitan area.
              </p>
              <div className="flex items-center gap-4">
                <MapPin size={24} className="text-[#2563EB]" />
                <div>
                  <div className="font-bold text-[#0F172A]">Shreetek Inc.</div>
                  <div className="text-[#64748B]">22375 Broderick Drive, Suite 165 – A109, Sterling, VA 20166</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2563EB]/20 to-[#0EA5E9]/20 border border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe size={64} className="text-[#2563EB]/30 mx-auto mb-4" />
                  <p className="text-[#64748B]">Serving Clients Nationwide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}