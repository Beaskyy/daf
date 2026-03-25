"use client";

import Section from "@/components/Section";
import { FileText, Lightbulb, ShieldCheck, Zap } from "lucide-react";

export default function Resources() {
  const resourceList = [
    {
      title: "Educational Materials",
      desc: "Comprehensive guides and materials tailored for Deaf students and educators.",
      icon: <FileText className="text-primary" />
    },
    {
      title: "School Outreach Insights",
      desc: "Key findings and reports from our nationwide school engagement activities.",
      icon: <Lightbulb className="text-primary" />
    },
    {
      title: "Accessibility Guidance",
      desc: "Practical steps for organisations to improve communication and accessibility.",
      icon: <ShieldCheck className="text-primary" />
    },
    {
      title: "Community Updates",
      desc: "Latest reports and news from our community-based initiatives in Nigeria.",
      icon: <Zap className="text-primary" />
    }
  ];

  return (
    <div className="pt-32">
      <section className="bg-background py-16 md:py-24 text-center border-b">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">Resources</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">Tools, insights, and guidance for improving communication access and supporting Deaf communities.</p>
        </div>
      </section>

      <Section>
        <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-20 leading-relaxed">
          Deaf Access Foundation shares resources that support understanding of Deaf culture, sign language, and communication accessibility for educators, organisations, and individuals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourceList.map((res, i) => (
             <div key={i} className="flex gap-8 p-10 bg-white border border-border rounded-[3rem] hover:shadow-xl transition-all group">
               <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                 {res.icon}
               </div>
               <div>
                 <h3 className="text-2xl font-bold mb-3">{res.title}</h3>
                 <p className="text-muted-foreground leading-relaxed">{res.desc}</p>
               </div>
             </div>
          ))}
        </div>
      </Section>

      <Section className="bg-foreground text-background rounded-[4rem] my-24 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="text-center max-w-2xl mx-auto relative z-10 py-10 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Need specific guidance?</h2>
          <p className="text-lg text-background/80 mb-10 leading-relaxed">
            Our goal is to support everyone interested in improving communication access. Contact our team for bespoke resource support.
          </p>
          <a href="mailto:deafaccessfoundation@gmail.com" className="bg-secondary text-secondary-foreground font-bold px-12 py-5 rounded-full text-lg shadow-xl hover:bg-secondary/90 transition-all inline-block">
            Request Resources
          </a>
        </div>
      </Section>
    </div>
  );
}
