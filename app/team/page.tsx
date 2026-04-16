"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Team() {
  const team = [
    {
      name: "Oyindamola Bello Adigun",
      role: "Founder & Executive Director",
      bio: "Oyindamola founded DAF to expand access and opportunities for Deaf communities. As a Deaf leader, she brings lived experience and insight to the Foundation's work.",
      image: "/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG"
    },
    {
      name: "Grace O.",
      role: "Director of Programmes",
      bio: "Grace leads the planning and coordination of DAF's outreach activities, ensuring they are organised, responsive, and impactful.",
      image: "/grace.png"
    },
    {
      name: "Taofeekat Adigun",
      role: "Head of Strategy & Partnerships",
      bio: "Taofeekat supports the strategic direction and partnerships of DAF, building relationships with schools and organisations to expand opportunities.",
      image: "/taoffy.png"
    },
    {
      name: "Shukurat Salam",
      role: "Programs Coordinator",
      bio: "Sukurat supports the programs and coordination of Deaf Access Foundation. She works closely with the programmes directorates on successful execution of school programs, vocational training and scholarship funds for Deaf individuals.",
      image: "/shukrat.png"
    }
  ];

  return (
    <div className="pt-[72px] md:pt-[80px]">
      {/* Header — Gold Block */}
      <section className="bg-[#F5E6C8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#2D1B69] tracking-tight">Meet Our Team</h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">The dedicated individuals committed to expanding access and opportunities for the Deaf community in Nigeria.</p>
        </div>
      </section>

      {/* Team Grid — White */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative mb-8 w-full max-w-[280px]">
                  {/* Decorative "Canva" Frame Background */}
                  <div className="absolute inset-0 bg-[#F5E6C8] rounded-full scale-105 -z-10 shadow-inner"></div>
                  
                  {/* Circular Image Container */}
                  <div 
                    className="relative aspect-square w-full rounded-full overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                </div>

                <div className="text-center flex flex-col items-center">
                  <h3 className="text-2xl font-black mb-2 text-[#2D1B69]">{member.name}</h3>
                  <div className="w-12 h-1 bg-[#C4953A] mb-3 rounded-full"></div>
                  <p className="text-[#C4953A] font-bold text-sm tracking-wide uppercase px-4 mb-4">
                    {member.role}
                  </p>

                  <div className="max-w-[280px]">
                    <p className="text-sm text-foreground/60 leading-relaxed text-center">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers — Purple Block */}
      <section className="bg-[#E8D5F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-black mb-6 text-[#2D1B69]">Volunteers & Collaborators</h2>
              <p className="text-lg text-foreground/70 leading-relaxed text-center">
                The Foundation works with volunteers, educators, and community members who support its outreach activities, programmes, and events. Our work is a collective effort to build a more inclusive society.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Link 
                href="/partner"
                className="bg-[#2D1B69] text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-[#2D1B69]/90 transition-all"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
