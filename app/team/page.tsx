"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      image: "/3d955a16-d796-4dcb-8744-a8ca42b64656.JPG"
    },
    {
      name: "Taofeekat Adigun",
      role: "Head of Strategy & Partnerships",
      bio: "Taofeekat supports the strategic direction and partnerships of DAF, building relationships with schools and organisations to expand opportunities.",
      image: "/logo.png"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B69]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-black mb-1 text-[#2D1B69]">{member.name}</h3>
                <p className="text-[#C4953A] font-bold text-sm tracking-wide uppercase">{member.role}</p>
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
              <p className="text-lg text-foreground/70 leading-relaxed text-justify">
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
