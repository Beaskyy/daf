"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went default. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to connect. Please check your internet.");
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#2D1B69] p-8 md:p-16 lg:p-20 shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C4953A] rounded-full mix-blend-multiply opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B5CF6] rounded-full mix-blend-multiply opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Content Text */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Stay updated with <br /> 
                <span className="text-[#C4953A]">DAF Newsletter</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">
                Join our community to receive the latest news, success stories, and updates on our initiatives across Nigeria.
              </p>
              
              <div className="flex flex-wrap gap-4 text-white/50 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C4953A]" />
                  Monthly updates
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C4953A]" />
                  Impact stories
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C4953A]" />
                  Program announcements
                </div>
              </div>
            </motion.div>

            {/* Signup Form */}
            <motion.div 
              className="lg:w-1/2 w-full max-w-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10 shadow-xl">
                <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                    className={cn(
                      "w-full bg-transparent px-6 py-4 text-white placeholder:text-white/40 focus:outline-none rounded-xl transition-all",
                      status === "error" && "border-red-500/50"
                    )}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className={cn(
                      "md:w-auto w-full px-8 py-4 bg-[#C4953A] text-[#2D1B69] font-bold rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap",
                      "hover:bg-white hover:text-black hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                    )}
                  >
                    {status === "loading" ? (
                      <div className="w-5 h-5 border-2 border-[#2D1B69] border-t-transparent rounded-full animate-spin" />
                    ) : status === "success" ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex items-center gap-2 text-green-400 font-medium bg-green-400/10 p-4 rounded-xl border border-green-400/20"
                  >
                    <CheckCircle2 size={20} />
                    <p>{message}</p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex items-center gap-2 text-red-400 font-medium bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                  >
                    <AlertCircle size={20} />
                    <p>{message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <p className="mt-4 text-white/30 text-xs text-center md:text-left">
                We care about your data. Read our <a href="#" className="underline hover:text-white/50 transition-colors">Privacy Policy</a>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
