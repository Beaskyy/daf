"use client";

import Section from "@/components/Section";
import { Handshake, Heart, MessageCircle } from "lucide-react";

export default function Partner() {
  const waysToSupport = [
    {
      title: "Partner With Us",
      desc: "Schools, organisations, and institutions can collaborate with us to support education programmes and accessibility efforts.",
      icon: <Handshake size={48} className="text-secondary" />
    },
    {
      title: "Sponsor a Student",
      desc: "Support our scholarship initiatives that help Deaf students continue their education and pursue their ambitions.",
      icon: <Heart size={48} className="text-secondary" />
    },
    {
      title: "Support Our Programmes",
      desc: "Contributions help us organise school outreach programmes, events, and accessibility initiatives across Nigeria.",
      icon: <MessageCircle size={48} className="text-secondary" />
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Partner With Us</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto px-6">Together we can expand access and opportunities.</p>
      </section>

      <Section>
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Ways to Support</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The work of Deaf Access Foundation is made possible through partnerships, volunteers, and supporters who believe in expanding opportunities for Deaf communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {waysToSupport.map((way, i) => (
             <div key={i} className="bg-primary/5 p-12 rounded-[4rem] text-center flex flex-col items-center group hover:bg-primary transition-colors duration-500">
               <div className="mb-8 group-hover:scale-125 transition-transform duration-500">
                 {way.icon}
               </div>
               <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{way.title}</h3>
               <p className="text-muted-foreground leading-relaxed group-hover:text-white/70 transition-colors">{way.desc}</p>
             </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary rounded-[4rem] my-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">Become a Partner</h2>
            <p className="text-xl text-secondary-foreground leading-relaxed mb-10 opacity-80">
              We welcome partnerships with organisations interested in improving access and opportunities for Deaf communities in Nigeria. Educators, schools, and community partners are at the heart of what we do.
            </p>
            <a href="mailto:deafaccessfoundation@gmail.com" className="bg-white text-primary font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:scale-105 transition-transform inline-block">
              Get in Touch
            </a>
          </div>
          <div className="md:w-1/2 bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20">
            <h4 className="text-2xl font-bold mb-8">Who we work with:</h4>
            <ul className="space-y-6">
              {[
                "Schools and Educators",
                "Accessibility Advocates",
                "Organisations and Institutions",
                "Volunteers and Community Groups"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center font-bold text-lg">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
