"use client";

import { School, CheckCircle, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Impact() {
  const highlights = [
    {
      title: "School Outreach",
      count: "National",
      label: "Schools Reached",
      desc: "Encouraging students to explore education pathways, leadership, and future opportunities across Nigeria.",
      icon: <School className="text-white" size={28} />,
      color: "bg-[#2D1B69]",
    },
    {
      title: "Student Scholarships",
      count: "Ongoing",
      label: "Scholarship Support",
      desc: "Supporting Deaf students who need assistance to continue their education and pursue their goals.",
      icon: <CheckCircle className="text-white" size={28} />,
      color: "bg-[#C4953A]",
    },
    {
      title: "Community Awareness",
      count: "Growing",
      label: "Conversations Started",
      desc: "Promoting conversations about accessibility, Deaf culture, and communication inclusion nationwide.",
      icon: <Globe className="text-white" size={28} />,
      color: "bg-[#5B8C5A]",
    }
  ];

  return (
    <div className="pt-[72px] md:pt-[80px]">
      {/* Header — Gold Block */}
      <section className="bg-[#F5E6C8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#2D1B69] tracking-tight">Our Impact</h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">Creating tangible change through focused initiatives and community-driven advocacy.</p>
        </div>
      </section>

      {/* Impact Cards — White */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-[#C4953A] hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-2 text-[#2D1B69]">{item.title}</h3>
                <div className="text-4xl font-black text-[#C4953A] mb-4">{item.count}</div>
                <p className="text-muted-foreground leading-relaxed text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight — Navy Block */}
      <section className="bg-[#2D1B69] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C4953A] inline-block px-4 py-2 rounded-lg text-sm font-bold text-white mb-6">Case Study</div>
            <h2 className="text-3xl md:text-5xl font-black mb-8">IDPD at Ijokodo High School</h2>
            <p className="text-xl leading-relaxed text-white/70 mb-10 italic max-w-3xl text-justify">
              &quot;At Ijokodo High School in Ibadan, students participated in activities highlighting accessibility and inclusion, marking the International Day of Persons with Disabilities. This event served as a model for our national expansion.&quot;
            </p>
            <div className="flex gap-4">
              <span className="bg-white/10 px-6 py-2 rounded-lg text-sm font-bold text-white">Ibadan, Nigeria</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
