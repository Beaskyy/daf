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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6"
              >
                Deaf Access Foundation Nigeria
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-[1.05] text-foreground"
              >
                Advancing <span className="text-primary italic">Access</span> and Opportunities for Deaf Communities
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
              >
                Working to expand awareness and opportunities through education programmes, advocacy, scholarships, and accessibility initiatives across Nigeria.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/partner"
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Support Our Work
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/about"
                  className="bg-white text-foreground border-2 border-border px-10 py-4 rounded-full font-bold text-lg hover:bg-muted transition-all text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/5 relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
                <Image
                  src="/dfb786f4-81f3-4bdf-bccf-e651d40a72fa.JPG"
                  alt="Students signing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -left-8 aspect-square w-48 rounded-[1.5rem] overflow-hidden shadow-xl -rotate-3 border-8 border-white hidden md:block">
                <Image
                  src="/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG"
                  alt="Outreach"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </section>

      {/* What We Do */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Initiatives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Creating lasting impact through focused programmes and community engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Education outreach",
              desc: "Organising programmes in Deaf schools across Nigeria to encourage learning and confidence.",
              icon: <GraduationCap size={32} className="text-primary" />,
            },
            {
              title: "Student Support",
              desc: "Providing scholarships and assistance to help Deaf students continue their studies.",
              icon: <Users size={32} className="text-primary" />,
            },
            {
              title: "Advocacy",
              desc: "Promoting understanding of Deaf culture and sign language through community outreach.",
              icon: <Megaphone size={32} className="text-primary" />,
            },
            {
              title: "Accessibility",
              desc: "Supporting projects to improve practical communication access for the Deaf community.",
              icon: <Accessibility size={32} className="text-primary" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-muted/30 border border-transparent p-10 rounded-[2rem] hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Where We Work */}
      <Section className="bg-muted/50 rounded-[4rem] mx-6 md:mx-12 my-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Expanding Impact Across Nigeria</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in Nigeria, we run programmes and outreach activities with Deaf schools and communities nationwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our presence is particularly strong in <strong>Ibadan</strong>, where we work directly with students through education, outreach, and awareness events.
            </p>
            <div className="flex items-center gap-4 text-primary font-bold text-lg">
              <span className="w-12 h-1 bg-secondary rounded-full"></span>
              National Reach, Local Impact
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 scale-95 lg:scale-100">
            <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="/3d955a16-d796-4dcb-8744-a8ca42b64656.JPG" alt="Students" fill className="object-cover" />
            </div>
            <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl mt-12">
              <Image src="/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG" alt="Outreach" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white pb-32">
        <div className="relative bg-[#002D4F] rounded-[3.5rem] p-12 md:px-20 md:py-24 overflow-hidden text-white shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
           
           <div className="relative z-10 max-w-3xl text-center md:text-left">
             <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">Join us in creating a more accessible world</h2>
             <p className="text-xl mb-12 text-white/80 leading-relaxed">
               Your support helps us provide scholarships, run educational outreaches, and advocate for the rights of the Deaf community in Nigeria.
             </p>
             <div className="flex flex-col sm:flex-row gap-6">
               <Link
                 href="/partner"
                 className="inline-block bg-secondary text-secondary-foreground px-12 py-5 rounded-full font-bold text-xl hover:bg-secondary/90 transition-all shadow-xl hover:shadow-secondary/20 text-center"
               >
                 Partner With Us
               </Link>
               <Link
                 href="/contact"
                 className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all text-center"
               >
                 Contact Us
               </Link>
             </div>
           </div>
        </div>
      </Section>
    </>
  );
}
