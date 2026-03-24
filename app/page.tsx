"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Megaphone, Users, Accessibility } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dfb786f4-81f3-4bdf-bccf-e651d40a72fa.JPG"
            alt="Students signing"
            fill
            className="object-cover opacity-30 scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-background"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block"
          >
            <Image
              src="/DAF Logo.jpeg"
              alt="DAF Logo"
              width={120}
              height={120}
              className="rounded-full shadow-2xl border-4 border-secondary/50"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
          >
            Advancing Access and Opportunities for <span className="text-secondary">Deaf Communities</span> in Nigeria
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Deaf Access Foundation is working to expand access, awareness, and opportunities through education programmes, advocacy, scholarships, and accessibility initiatives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/about"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,179,0,0.4)] transition-all flex items-center justify-center gap-2 group"
            >
              Learn About Our Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/programmes"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              Explore Our Programmes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Education & School Programmes",
              desc: "We organise educational outreach programmes in Deaf schools across Nigeria that encourage learning, confidence, and future opportunities.",
              icon: <GraduationCap size={32} className="text-primary" />,
            },
            {
              title: "Scholarships & Student Support",
              desc: "We support Deaf students through scholarships and educational assistance to help them continue their studies and pursue their ambitions.",
              icon: <Users size={32} className="text-primary" />,
            },
            {
              title: "Advocacy & Awareness",
              desc: "Promoting understanding of Deaf culture, sign language, and communication accessibility through outreach and community engagement.",
              icon: <Megaphone size={32} className="text-primary" />,
            },
            {
              title: "Accessibility Initiatives",
              desc: "Supporting projects like SignFlow, a web-based communication tool, to improve practical communication access.",
              icon: <Accessibility size={32} className="text-primary" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-background border border-border p-8 rounded-3xl hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Where We Work */}
      <Section className="bg-primary/5 rounded-[4rem] my-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Where We Work</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Deaf Access Foundation (DAF) is based in Nigeria and currently runs programmes and outreach activities with Deaf schools and communities across the country.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Several of our early initiatives have taken place in <strong>Ibadan</strong>, where we work directly with schools and students through education programmes, outreach activities, and awareness events.
            </p>
            <div className="flex items-center gap-4 text-primary font-bold text-xl">
              <span className="w-12 h-0.5 bg-primary"></span>
              Expansion across Nigeria
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
              <Image src="/3d955a16-d796-4dcb-8744-a8ca42b64656.JPG" alt="Students" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg mt-8">
              <Image src="/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG" alt="Outreach" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Our Work in Practice */}
      <Section className="bg-white">
        <div className="relative bg-primary rounded-[3rem] p-12 md:p-20 overflow-hidden text-white">
           <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="relative z-10 max-w-2xl">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Join us in making a practical impact</h2>
             <p className="text-xl mb-10 text-white/80 leading-relaxed font-light">
               Our initiatives aim to inspire students, strengthen awareness, and support greater opportunities for Deaf communities.
             </p>
             <Link
               href="/partner"
               className="inline-block bg-secondary text-secondary-foreground px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg"
             >
               Partner With Us
             </Link>
           </div>
        </div>
      </Section>
    </>
  );
}
