"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Users, Heart, Briefcase, Shield } from "lucide-react";
import Link from "next/link";

const positions = [
  { title: "Senior Full Stack Engineer", location: "Remote / Virginia", type: "Full-time", dept: "Engineering", exp: "5+ years" },
  { title: "DevOps Engineer", location: "Remote / Virginia", type: "Full-time", dept: "Infrastructure", exp: "3+ years" },
  { title: "Data Scientist - AI/ML", location: "Remote / Virginia", type: "Full-time", dept: "AI & Analytics", exp: "4+ years" },
  { title: "Cloud Architect", location: "Remote / Virginia", type: "Full-time", dept: "Architecture", exp: "6+ years" },
  { title: "Technical Recruiter", location: "Virginia, USA", type: "Full-time", dept: "Recruitment", exp: "3+ years" },
  { title: "Frontend Engineer - React", location: "Remote / Virginia", type: "Full-time", dept: "Engineering", exp: "3+ years" },
];

const benefits = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health, dental, and vision insurance" },
  { icon: Users, title: "Remote-First", desc: "Work from anywhere with flexible hours" },
  { icon: Briefcase, title: "Career Growth", desc: "Clear career paths and continuous learning" },
  { icon: Shield, title: "401(k) Match", desc: "4% retirement contribution from day one" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80")'}} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-white">Careers</span>
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">Build Your Future at Shreetek</h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">Join a team of innovators working on cutting-edge projects. We offer competitive compensation, remote flexibility, and growth opportunities.</p>
            <a href="#openings" className="px-8 py-4 text-base font-bold text-white blue-gradient rounded-xl hover:shadow-xl transition-all inline-flex items-center gap-2">
              View Open Positions <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="w-14 h-14 rounded-xl blue-gradient flex items-center justify-center mx-auto mb-4"><b.icon size={24} className="text-white" /></div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{b.title}</h3>
                <p className="text-[#64748B] text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-sm font-semibold text-[#2563EB]">Open Positions</span>
            </span>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Join Our <span className="gradient-text-dark">Team</span></h2>
          </motion.div>

          <div className="space-y-4">
            {positions.map((job, i) => (
              <motion.div key={job.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#64748B]">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    <span>{job.type}</span>
                    <span>{job.dept}</span>
                    <span>{job.exp}</span>
                  </div>
                </div>
                <Link href="/resume#submit-form" className="px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-lg hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap">
                  Apply Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2>
            <p className="text-lg text-white/60 mb-10">Submit your resume and we'll reach out when we have a position that matches your skills.</p>
            <Link href="/resume#submit-form" className="px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-2xl hover:shadow-2xl hover:shadow-[#2563EB]/40 transition-all inline-block">
              Submit Your Resume
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}