"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Clock, Shield, Award, Globe, ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";

const staffingTypes = [
  {
    id: "contract",
    icon: Clock,
    title: "Contract Staffing",
    desc: "Flexible workforce solutions for project-based needs. Scale your team quickly with pre-vetted professionals within 48 hours.",
    features: ["Short & long-term contracts", "Quick deployment within 48 hours", "Scalable team expansion", "Cost-effective project staffing", "No long-term commitments"],
  },
  {
    id: "permanent",
    icon: Users,
    title: "Permanent Staffing",
    desc: "Find the perfect long-term fit for your organization. Thorough vetting ensures quality hires that stay and grow with your company.",
    features: ["Direct hire placement", "Background verification", "Cultural fit assessment", "Reference checks", "Guaranteed replacement"],
  },
  {
    id: "h1b",
    icon: Shield,
    title: "H1B Transfer Support",
    desc: "Expert H1B visa transfer services with legal guidance. Retain your talent without employment gaps during the transfer process.",
    features: ["Seamless H1B transfer", "Expert legal consultation", "Quick processing timeline", "Work continuity", "USCIS compliance"],
  },
  {
    id: "gc",
    icon: Award,
    title: "GC Processing Support",
    desc: "Green Card processing guidance for eligible candidates. Navigate the complex immigration process with confidence.",
    features: ["PERM certification", "I-140 petition filing", "I-485 adjustment", "Priority date tracking", "Attorney coordination"],
  },
  {
    id: "executive",
    icon: Briefcase,
    title: "Executive Search",
    desc: "Specialized headhunting for CTO, VP Engineering, and Director-level technology leadership roles across industries.",
    features: ["C-suite placement", "VP & Director search", "Confidential campaigns", "Industry mapping", "Retained search"],
  },
  {
    id: "bench",
    icon: Globe,
    title: "Bench Sales",
    desc: "Quick placement of available technical professionals currently on bench. Immediate availability for urgent client requirements.",
    features: ["Immediate availability", "Pre-screened candidates", "Rate negotiation", "Quick onboarding", "Dedicated support"],
  },
];

const processSteps = [
  { num: "01", title: "Consultation", desc: "Understanding your requirements, team culture, and technical needs" },
  { num: "02", title: "Talent Search", desc: "Scanning our 5,000+ candidate database and active sourcing" },
  { num: "03", title: "Screening", desc: "Technical assessments, cultural fit evaluation, and background checks" },
  { num: "04", title: "Presentation", desc: "Shortlist of qualified candidates with detailed profiles" },
  { num: "05", title: "Interview", desc: "Coordinating interviews and providing feedback on both sides" },
  { num: "06", title: "Onboarding", desc: "Offer negotiation, onboarding support, and post-placement care" },
];

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80")'}} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-white">Recruitment Services</span>
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">Elite Technical Staffing for American Companies</h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              From H1B transfers to permanent placements, we connect you with world-class IT professionals. 
              Our 48-hour placement guarantee ensures you get the right talent, fast.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 text-base font-bold text-white blue-gradient rounded-xl hover:shadow-xl transition-all flex items-center gap-2">
                Request Talent <ArrowRight size={20} />
              </Link>
              <a href="tel:+17035990008" className="px-8 py-4 text-base font-bold text-white border border-white/20 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5,000+", label: "Technical Candidates" },
              { value: "48hrs", label: "Average Placement" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "500+", label: "Companies Served" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-bold gradient-text-dark mb-2">{s.value}</div>
                <div className="text-[#64748B] font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing Types */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-sm font-semibold text-[#2563EB]">Staffing Solutions</span>
            </span>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Comprehensive <span className="gradient-text-dark">Recruitment Options</span></h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">Tailored staffing solutions to meet your unique business requirements</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffingTypes.map((type, i) => (
              <motion.div key={type.id} id={type.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all card-equal-height">
                <div className="w-14 h-14 rounded-xl blue-gradient flex items-center justify-center mb-6">
                  <type.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{type.title}</h3>
                <p className="text-[#64748B] mb-6 leading-relaxed">{type.desc}</p>
                <div className="space-y-3">
                  {type.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#64748B]">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-[#0EA5E9]">Our Process</span>
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">How We <span className="gradient-text">Deliver</span></h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">A streamlined 6-step process ensuring quality placements every time</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-dark rounded-2xl p-8 border border-white/10">
                <div className="text-5xl font-bold text-white/10 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Need to Hire Technical Talent?</h2>
            <p className="text-xl text-[#64748B] mb-10">Contact us today for a free consultation. Our experts are ready to help you find the perfect candidate.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+17035990008" className="px-8 py-4 text-base font-bold text-white blue-gradient rounded-xl hover:shadow-xl transition-all flex items-center gap-2">
                <Phone size={20} /> Call +1 (703) 599-0008
              </a>
              <a href="mailto:samala@shreetek.com" className="px-8 py-4 text-base font-bold text-[#0F172A] border-2 border-[#0F172A] rounded-xl hover:bg-[#0F172A] hover:text-white transition-all flex items-center gap-2">
                <Mail size={20} /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}