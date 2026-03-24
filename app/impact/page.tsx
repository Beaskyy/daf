"use client";

import Section from "@/components/Section";
import { CheckCircle, School, UserPlus, Globe } from "lucide-react";

export default function Impact() {
  const highlights = [
    {
      title: "School Outreach",
      count: "National",
      label: "Schools Reached",
      desc: "Encouraging students to explore education pathways, leadership, and future opportunities.",
      icon: <School className="text-primary" />
    },
    {
      title: "Student Scholarships",
      count: "Ongoing",
      label: "Scholarship Support",
      desc: "Supporting Deaf students who need assistance to continue their education and pursue their goals.",
      icon: <CheckCircle className="text-primary" />
    },
    {
      title: "Community Awareness",
      count: "Growing",
      label: "Conversations Started",
      desc: "Promoting conversations about accessibility, Deaf culture, and communication inclusion.",
      icon: <Globe className="text-primary" />
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Impact</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto px-6">Creating tangible change through focused initiatives.</p>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-black/5 hover:border-secondary transition-colors group">
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <div className="text-4xl font-black text-secondary mb-4">{item.count}</div>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-white rounded-[4rem] my-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Highlight: IDPD at Ijokodo High School</h2>
          <p className="text-xl leading-relaxed text-white/80 mb-10 italic">
            &quot;At Ijokodo High School in Ibadan, students participated in activities highlighting accessibility and inclusion, marking the International Day of Persons with Disabilities. This event served as a model for our national expansion.&quot;
          </p>
          <div className="flex gap-4">
            <span className="bg-secondary text-secondary-foreground font-bold px-6 py-2 rounded-full text-sm">Case Study</span>
            <span className="bg-white/10 px-6 py-2 rounded-full text-sm">Ibadan, Nigeria</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
