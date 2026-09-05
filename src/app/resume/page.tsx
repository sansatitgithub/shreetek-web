"use client";

import { motion } from "framer-motion";
import { Upload, Send, CheckCircle2, XCircle, FileText } from "lucide-react";
import { useState, useRef, FormEvent } from "react";

export default function ResumePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const skillsRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLSelectElement>(null);
  const visaRef = useRef<HTMLSelectElement>(null);
  const linkedinRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);


  function handleFileClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification(null);

    try {
      setNotification({ type: 'success', message: 'Details submitted! Now, please upload your resume in the next step.' });
      
      // Redirect to Google Form after a short delay
      setTimeout(() => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScqAtqBwMIunhMZDAcR0hB_qXEW_qLTQb_K6Ok7gKrTY_XXHA/viewform?usp=publish-editor', '_blank');
        setNotification(null);
      }, 3000);

      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (phoneRef.current) phoneRef.current.value = '';
      if (locationRef.current) locationRef.current.value = '';
      if (skillsRef.current) skillsRef.current.value = '';
      if (experienceRef.current) experienceRef.current.value = '';
      if (visaRef.current) visaRef.current.value = '';
      if (linkedinRef.current) linkedinRef.current.value = '';
    } catch {
      setNotification({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 6000);
    }
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&q=80")'}} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-white">Submit Resume</span>
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">Join Our Talent Network</h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Submit your resume and unlock opportunities with top US companies. We connect exceptional talent with transformative careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Why Join <span className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent">Shreetek</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Top US Companies", desc: "Access to Fortune 500 and leading technology companies" },
              { title: "Dedicated Recruiter Support", desc: "One-on-one guidance from application through offer and onboarding" },
              { title: "Career Growth", desc: "Resume review, interview prep, and career guidance" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#F8FAFC] rounded-2xl p-8 text-center border border-slate-100">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-[#64748B]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Form */}
      <section id="submit-form" className="py-24 bg-[#F8FAFC] relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {notification && (
            <div className={`fixed top-24 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all ${
              notification.type === 'success' 
                ? 'bg-emerald-900/90 border-emerald-500/30 text-white' 
                : 'bg-red-900/90 border-red-500/30 text-white'
            }`}>
              {notification.type === 'success' ? <CheckCircle2 size={20} className="text-emerald-400" /> : <XCircle size={20} className="text-red-400" />}
              <span className="text-sm font-medium">{notification.message}</span>
            </div>
          )}

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Submit Your Resume</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Full Name *</label>
                  <input ref={nameRef} type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email *</label>
                  <input ref={emailRef} type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Phone *</label>
                  <input ref={phoneRef} type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Location *</label>
                  <input ref={locationRef} type="text" placeholder="City, State" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Primary Skill Set *</label>
                  <input ref={skillsRef} type="text" placeholder="e.g., Python, React, Java, AWS" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Years of Experience *</label>
                  <select ref={experienceRef} required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all">
                    <option value="">Select...</option>
                    <option>0-1 Years</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years</option>
                    <option>5-10 Years</option>
                    <option>10+ Years</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Work Authorization</label>
                <select ref={visaRef} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all">
                  <option value="">Select...</option>
                  <option>No Sponsorship Required</option>
                  <option>Sponsorship Required</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <p className="text-sm text-blue-800 font-medium">
                  After clicking submit, you will be redirected to our secure upload portal to attach your resume.
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-xl hover:shadow-2xl hover:shadow-[#2563EB]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Submitting... <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                ) : (
                  <>Submit Details <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}