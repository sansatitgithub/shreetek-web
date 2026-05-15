"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, HelpCircle, Briefcase, CheckCircle2, XCircle } from "lucide-react";
import { useState, useRef, FormEvent } from "react";

const contactCards = [
  { icon: MapPin, title: "Office Address", value: "41642 Bostonian Place, Aldie, VA 20105", color: "#2563EB" },
  { icon: Phone, title: "Phone", value: "+1 (703) 599-0008", color: "#0EA5E9" },
  { icon: Mail, title: "Email", value: "info@shreetek.com", color: "#7C3AED" },
  { icon: Clock, title: "Business Hours", value: "Mon-Fri: 9AM - 6PM EST", color: "#10B981" },
];

const quickSupport = [
  { icon: MessageSquare, title: "General Inquiries", desc: "For general questions about our services", email: "info@shreetek.com" },
  { icon: Briefcase, title: "Recruitment Services", desc: "For hiring and staffing needs", email: "Jay@shreetek.com" },
  { icon: HelpCircle, title: "Technical Support", desc: "For existing client support", email: "Jay@shreetek.com" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification(null);

    const body = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      email: emailRef.current?.value || '',
      phone: phoneRef.current?.value || '',
      service: serviceRef.current?.value || '',
      message: messageRef.current?.value || '',
    };

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        setNotification({ type: 'success', message: data.message || 'Message sent successfully!' });
        if (firstNameRef.current) firstNameRef.current.value = '';
        if (lastNameRef.current) lastNameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (phoneRef.current) phoneRef.current.value = '';
        if (serviceRef.current) serviceRef.current.value = 'Select a service...';
        if (messageRef.current) messageRef.current.value = '';
      } else {
        setNotification({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch {
      setNotification({ type: 'error', message: 'Network error. Please check your connection and try again.' });
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
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80")'}} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              <span className="text-sm font-semibold text-white">Contact Us</span>
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">Let&apos;s Connect</h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Ready to transform your business? Get in touch with our team for a free consultation.
              Whether you need to hire talent or build software, we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#F8FAFC] rounded-2xl p-8 text-center border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${card.color}15` }}>
                  <card.icon size={24} style={{ color: card.color }} />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-[#64748B]">{card.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Quick Support */}
      <section className="py-24 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">First Name *</label>
                      <input ref={firstNameRef} type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">Last Name *</label>
                      <input ref={lastNameRef} type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email *</label>
                      <input ref={emailRef} type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">Phone</label>
                      <input ref={phoneRef} type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Service Interested In</label>
                    <select ref={serviceRef} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all">
                      <option>Select a service...</option>
                      <option>IT Staffing</option>
                      <option>Permanent Hiring</option>
                      <option>Contract Staffing</option>
                      <option>H1B Transfer Support</option>
                      <option>GC Processing</option>
                      <option>Software Development</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Message *</label>
                    <textarea ref={messageRef} rows={5} required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFC] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none"></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] rounded-xl hover:shadow-2xl hover:shadow-[#2563EB]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Sending... <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                    ) : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Why Contact Us</h2>
                <p className="text-[#64748B] leading-relaxed">
                  Our team of experts is ready to understand your requirements and provide tailored solutions 
                  for your business needs. We pride ourselves on responsive communication and dedicated support.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0F172A]">Quick Support</h3>
                {quickSupport.map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0F172A] mb-1">{item.title}</h4>
                        <p className="text-[#64748B] text-sm mb-2">{item.desc}</p>
                        <a href={`mailto:${item.email}`} className="text-[#2563EB] font-semibold text-sm hover:underline">{item.email}</a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <MapPin size={48} className="text-[#2563EB] mx-auto mb-4" />
                <p className="text-[#0F172A] font-bold">Aldie, Virginia</p>
                <p className="text-[#64748B] text-sm">Serving clients nationwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}