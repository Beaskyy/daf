"use client";

import { FileText, Lightbulb, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Resources() {
  const resourceList = [
    {
      title: "Educational Materials",
      desc: "Comprehensive guides and materials tailored for Deaf students and educators across Nigeria.",
      icon: <FileText className="text-white" size={24} />,
      color: "bg-[#2D1B69]",
    },
    {
      title: "School Outreach Insights",
      desc: "Key findings and reports from our nationwide school engagement activities and programmes.",
      icon: <Lightbulb className="text-white" size={24} />,
      color: "bg-[#C4953A]",
    },
    {
      title: "Accessibility Guidance",
      desc: "Practical steps for organisations to improve communication and accessibility for the Deaf community.",
      icon: <ShieldCheck className="text-white" size={24} />,
      color: "bg-[#5B8C5A]",
    },
    {
      title: "Community Updates",
      desc: "Latest reports and news from our community-based initiatives and programmes in Nigeria.",
      icon: <Zap className="text-white" size={24} />,
      color: "bg-[#8B5CF6]",
    }
  ];

  return (
    <div className="pt-[72px] md:pt-[80px]">
      {/* Header — Green Block */}
      <section className="bg-[#D9E5C3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#2D1B69] tracking-tight">Resources</h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">Tools, insights, and guidance for improving communication access and supporting Deaf communities.</p>
        </div>
      </section>

      {/* Resources — White */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <p className="text-xl text-muted-foreground max-w-3xl mb-16 leading-relaxed text-justify">
            Deaf Access Foundation shares resources that support understanding of Deaf culture, sign language, and communication accessibility for educators, organisations, and individuals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceList.map((res, i) => (
              <motion.div 
                key={i} 
                className="flex gap-6 p-8 bg-white border border-border rounded-2xl hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`${res.color} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}>
                  {res.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#2D1B69]">{res.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">{res.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Navy Block */}
      <section className="bg-[#2D1B69] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Need specific guidance?</h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our goal is to support everyone interested in improving communication access. Contact our team for bespoke resource support.
          </p>
          <a href="mailto:info@deafaccessfoundation.com" className="bg-[#C4953A] text-white font-bold px-10 py-4 rounded-lg text-lg hover:bg-[#C4953A]/90 transition-all inline-block">
            Request Resources
          </a>
        </div>
      </section>
    </div>
  );
}
