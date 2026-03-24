"use client";

import Section from "@/components/Section";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto px-6">We welcome enquiries from individuals, organisations, and partners.</p>
      </section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="bg-secondary/20 p-4 rounded-2xl h-fit">
                  <Mail className="text-secondary" size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Email</h4>
                  <a href="mailto:deafaccessfoundation@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    deafaccessfoundation@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-secondary/20 p-4 rounded-2xl h-fit">
                  <MapPin className="text-secondary" size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Location</h4>
                  <p className="text-muted-foreground">Nigeria</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://www.instagram.com/deafaccessfoundation/" className="bg-primary/5 p-4 rounded-full text-primary hover:bg-primary hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="bg-primary/5 p-4 rounded-full text-primary hover:bg-primary hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-black/5">
              <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-60">Your Name</label>
                    <input type="text" className="w-full bg-primary/5 border-none rounded-2xl p-4 focus:ring-4 focus:ring-secondary/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-60">Email Address</label>
                    <input type="email" className="w-full bg-primary/5 border-none rounded-2xl p-4 focus:ring-4 focus:ring-secondary/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-60">Subject</label>
                  <input type="text" className="w-full bg-primary/5 border-none rounded-2xl p-4 focus:ring-4 focus:ring-secondary/20 outline-none transition-all" placeholder="How can we help?" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-60">Message</label>
                  <textarea rows={6} className="w-full bg-primary/5 border-none rounded-2xl p-4 focus:ring-4 focus:ring-secondary/20 outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="bg-primary text-white font-bold px-12 py-5 rounded-full text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 w-full md:w-auto">
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
