"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Users, Code2, Cloud, Brain, Shield, Clock, Globe, Award, CheckCircle, Target, Lightbulb, Handshake, Zap } from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    badge: "Transforming Workforce & Technology",
    title: "Enterprise Solutions for Modern Business",
    desc: "Shreetek Inc. delivers elite technical staffing and bespoke software solutions, empowering American businesses with world-class talent and enterprise-grade engineering.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
    badge: "Elite Technical Recruitment",
    title: "Premier Staffing Partner for US Companies",
    desc: "Contract staffing, permanent hiring, and contract-to-hire placements — a streamlined process built to get you the right talent, fast.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    badge: "Enterprise Software Engineering",
    title: "Scalable Systems for Enterprise Growth",
    desc: "From legacy modernization to AI-driven applications, we architect scalable systems that power enterprise growth with dedicated engineering teams.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80",
    badge: "Client-First Partnership",
    title: "A Staffing Partner Invested in Your Success",
    desc: "Dedicated account managers, transparent communication, and flexible engagement models built around your hiring goals from day one.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    badge: "USA-Based Operations",
    title: "Your Trusted Domestic Tech Partner",
    desc: "Based in Sterling, VA, we provide the accountability, timezone alignment, and regulatory compliance that global outsourcing can't match.",
  },
];

const stats = [
  { value: "5,000+", label: "Technical Professionals" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "11+", label: "Years of Experience" },
  { value: "500+", label: "Companies Served" },
];

const services = [
  { icon: Users, title: "IT Staffing", desc: "Contract, permanent, and executive placement for technical roles", href: "/recruitment" },
  { icon: Shield, title: "Contract-to-Hire", desc: "Trial-to-permanent staffing that lets you evaluate talent before committing", href: "/recruitment#contract-to-hire" },
  { icon: Award, title: "Recruitment Process Outsourcing", desc: "Fully outsourced hiring pipeline, from sourcing through onboarding, run by our dedicated recruiting team", href: "/recruitment#rpo" },
  { icon: Code2, title: "Software Development", desc: "Full-cycle enterprise software and SaaS development", href: "/software" },
  { icon: Cloud, title: "Cloud Solutions", desc: "AWS, Azure, and GCP cloud architecture and migration", href: "/software#cloud" },
  { icon: Brain, title: "AI & Automation", desc: "Machine learning and intelligent automation solutions", href: "/software#ai" },
];

const whyUs = [
  { icon: Clock, title: "Rapid Placement Process", desc: "Dedicated staff assignment and a streamlined process built for urgent hiring needs" },
  { icon: Shield, title: "High Retention Rate", desc: "Placements that stay — client tenure that beats industry benchmarks" },
  { icon: Target, title: "Quality Vetting", desc: "4-tier evaluation process ensuring top-tier professionals" },
  { icon: Globe, title: "US-Based", desc: "Full timezone alignment and US jurisdiction compliance" },
  { icon: Handshake, title: "Dedicated Support", desc: "Direct access to experienced account managers" },
  { icon: Zap, title: "Flexible Models", desc: "Contract, direct-hire, or project-based engagement" },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "Understanding your requirements, team culture, and technical needs" },
  { num: "02", title: "Talent Search", desc: "Scanning our 5,000+ candidate database and active sourcing" },
  { num: "03", title: "Screening", desc: "Technical assessments, cultural fit evaluation, and background checks" },
  { num: "04", title: "Presentation", desc: "Shortlist of qualified candidates with detailed profiles" },
  { num: "05", title: "Interview", desc: "Coordinating interviews and providing feedback on both sides" },
  { num: "06", title: "Onboarding", desc: "Offer negotiation, onboarding support, and post-placement care" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section - Image Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/30" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white/10 border border-white/20 mb-6 lg:mb-8">
                <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
                <span className="text-xs lg:text-sm font-medium text-white">{heroSlides[currentSlide].badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>

              <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
                {heroSlides[currentSlide].desc}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12">
                <Link
                  href="/recruitment"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-xl hover:shadow-xl hover:shadow-[#2563EB]/30 transition-all flex items-center justify-center gap-2"
                >
                  Explore Services <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white border border-white/20 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 lg:gap-6">
                {[
                  { icon: Users, text: "5,000+ Talent Pool" },
                  { icon: Award, text: "98% Success Rate" },
                  { icon: Globe, text: "Nationwide Reach" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 lg:gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon size={14} className="lg:w-[18px] lg:h-[18px] text-[#0EA5E9]" />
                    </div>
                    <span className="text-xs lg:text-sm text-white/80 font-medium whitespace-nowrap">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-0 right-0 glass-dark rounded-2xl p-6 w-64"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/60 text-sm">Active Placements</span>
                    <span className="text-emerald-400 text-sm">+24%</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">1,247</div>
                  <div className="flex gap-1">
                    {[40, 55, 45, 70, 60, 85, 75, 90].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-[#2563EB] to-[#0EA5E9] rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute bottom-20 left-0 glass-dark rounded-2xl p-6 w-56"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center">
                      <Users size={20} className="text-[#0EA5E9]" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Technical Talent</div>
                      <div className="text-white/60 text-sm">Available Now</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">892+</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 7, repeat: Infinity }}
                  className="absolute top-1/2 left-1/3 glass-dark rounded-2xl p-5 w-48"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={16} className="text-emerald-400" />
                    <span className="text-white font-medium">Client Retention</span>
                  </div>
                  <div className="text-xl font-bold text-white">95%+</div>
                  <div className="text-white/40 text-xs">Renew Year Over Year</div>
                </motion.div>

                <div className="w-80 h-80 mx-auto">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border border-white/10 rounded-full" />
                    <div className="absolute inset-8 border border-white/5 rounded-full" />
                    <div className="absolute inset-16 border border-white/5 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">AI</div>
                        <div className="text-xs text-white/60">Powered</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 lg:gap-4 z-20">
          <button
            onClick={prevSlide}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={16} className="lg:w-5 lg:h-5" />
          </button>
          
          <div className="flex gap-1.5 lg:gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? "bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] w-5 lg:w-8" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight size={16} className="lg:w-5 lg:h-5" />
          </button>
        </div>
      </section>

      {/* Stats Section - White */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#0F172A] mb-2">{stat.value}</div>
                <div className="text-[#64748B] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Light Grey */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-sm font-semibold text-[#2563EB]">Our Services</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
              Comprehensive <span className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-base lg:text-lg text-[#64748B] max-w-2xl mx-auto">
              From recruitment to software development, we provide end-to-end solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group bg-white rounded-[20px] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300 hover:-translate-y-1.5 card-equal-height relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 via-[#0EA5E9]/0 to-[#2563EB]/0 group-hover:from-[#2563EB]/5 group-hover:via-[#0EA5E9]/5 group-hover:to-[#2563EB]/5 transition-all duration-500" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <service.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#64748B] leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-[#2563EB] font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Navy */}
      <section id="why-us" className="py-16 lg:py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-[#0EA5E9]">Why Shreetek</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              The <span className="bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">Shreetek</span> Advantage
            </h2>
            <p className="text-base lg:text-lg text-white/60 max-w-2xl mx-auto">
              Why leading companies choose us for their recruitment and technology needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-dark rounded-[20px] p-8 border border-white/10 hover:border-[#0EA5E9]/40 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 group-hover:bg-[#0EA5E9]/20 flex items-center justify-center mb-6 transition-colors duration-300">
                  <item.icon size={24} className="text-[#0EA5E9] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0EA5E9] transition-colors duration-300">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - White */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-sm font-semibold text-[#2563EB]">Our Process</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
              How We <span className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent">Deliver</span>
            </h2>
            <p className="text-base lg:text-lg text-[#64748B] max-w-2xl mx-auto">
              A streamlined 6-step process ensuring quality placements every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-[#F8FAFC] rounded-[20px] p-8 border border-slate-100 hover:shadow-lg hover:shadow-[#2563EB]/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#2563EB]/10 absolute top-4 right-4">{step.num}</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Light Grey */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg lg:text-xl text-[#64748B] mb-10 leading-relaxed">
              Whether you need to hire top talent or build custom software, Shreetek is your trusted partner for excellence.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-2xl hover:shadow-2xl hover:shadow-[#2563EB]/40 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/recruitment"
                className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg font-bold text-[#0F172A] border-2 border-[#0F172A] rounded-2xl hover:bg-[#0F172A] hover:text-white transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}