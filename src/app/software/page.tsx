"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Database, Globe, Smartphone, Layers, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Code2, title: "Web Development", id: "web", desc: "Modern, responsive web applications built with React, Next.js, and Angular. Scalable, performant, and secure.", features: ["React/Next.js development", "Progressive Web Apps", "E-commerce solutions", "Content management systems"] },
  { icon: Smartphone, title: "Mobile Apps", id: "mobile", desc: "Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.", features: ["iOS (Swift)", "Android (Kotlin)", "React Native", "Flutter development"] },
  { icon: Layers, title: "SaaS Platforms", id: "saas", desc: "Multi-tenant SaaS platforms with subscription management, analytics, and enterprise-grade security.", features: ["Multi-tenant architecture", "Subscription management", "Usage analytics", "Enterprise SSO"] },
  { icon: Globe, title: "AI Solutions", id: "ai", desc: "Machine learning and AI integration for intelligent automation, predictive analytics, and decision support.", features: ["Machine learning", "Natural language processing", "Predictive analytics", "Intelligent automation"] },
  { icon: Cloud, title: "Cloud Solutions", id: "cloud", desc: "AWS, Azure, and GCP cloud architecture, migration, and managed services for scalable infrastructure.", features: ["Cloud migration", "Kubernetes/Docker", "Serverless architecture", "DevOps automation"] },
  { icon: Database, title: "Enterprise Applications", id: "enterprise", desc: "Custom enterprise software solutions for complex business logic and mission-critical operations.", features: ["ERP systems", "CRM platforms", "Data analytics", "API integration"] },
];

const tech = {
  "Frontend": ["React", "Next.js", "Angular", "TypeScript", "Vue.js", "Tailwind"],
  "Backend": ["Node.js", "Python", "Java", "Go", "Spring Boot", ".NET"],
  "Cloud": ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
  "Database": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Snowflake"],
};

export default function SoftwarePage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80")'}} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-white">Software Development</span>
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">Enterprise Software & AI Solutions</h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              From legacy modernization to AI-driven applications, we architect scalable systems that power enterprise growth. Full-cycle development with dedicated engineering teams.
            </p>
            <Link href="/contact" className="px-8 py-4 text-base font-bold text-white blue-gradient rounded-xl hover:shadow-xl transition-all flex items-center gap-2 w-fit">
              Start a Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-sm font-semibold text-[#2563EB]">What We Do</span>
            </span>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Development <span className="gradient-text-dark">Services</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                id={s.id} className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all card-equal-height">
                <div className="w-14 h-14 rounded-xl blue-gradient flex items-center justify-center mb-6">
                  <s.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{s.title}</h3>
                <p className="text-[#64748B] mb-6 leading-relaxed">{s.desc}</p>
                <div className="space-y-2">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <CheckCircle size={14} className="text-[#2563EB]" /> {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-[#0EA5E9]">Our Expertise</span>
            </span>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Technology <span className="gradient-text-dark">Stack</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(tech).map(([category, items]) => (
              <motion.div key={category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-[#F8FAFC] rounded-full text-sm text-[#64748B] font-medium">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Great?</h2>
            <p className="text-lg text-white/60 mb-10">Let's discuss your project and create a roadmap for success.</p>
            <Link href="/contact" className="px-10 py-5 text-lg font-bold text-white blue-gradient rounded-2xl hover:shadow-2xl hover:shadow-[#2563EB]/40 transition-all inline-block">
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}