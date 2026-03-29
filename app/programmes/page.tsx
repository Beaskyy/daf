"use client";

import Image from "next/image";
import { BookOpen, Award, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Programmes() {
  const programmes = [
    {
      title: "School Outreach Programme",
      desc: "We visit Deaf schools across Nigeria to organise sessions that inspire students and support learning and confidence.",
      details: ["Education pathways", "Leadership and confidence-building", "Opportunities available to Deaf students"],
      icon: <BookOpen className="text-white" size={28} />,
      image: "/3d955a16-d796-4dcb-8744-a8ca42b64656.JPG",
      color: "bg-[#2D1B69]",
    },
    {
      title: "Scholarship Programme",
      desc: "Deaf Access Foundation supports Deaf students through scholarships and educational assistance that help them remain in school.",
      details: ["Educational assistance", "Targeted support for students in need", "Long-term educational growth"],
      icon: <Award className="text-white" size={28} />,
      image: "/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG",
      color: "bg-[#C4953A]",
    },
    {
      title: "Accessibility Initiatives",
      desc: "The Foundation supports initiatives that explore ways to improve communication access, including SignFlow.",
      details: ["SignFlow: Web-based sign language tool", "Digital accessibility exploration", "Systemic communication support"],
      icon: <MessageSquare className="text-white" size={28} />,
      image: "/dfb786f4-81f3-4bdf-bccf-e651d40a72fa.JPG",
      color: "bg-[#5B8C5A]",
    }
  ];

  const sectionColors = ["bg-white", "bg-[#F5E6C8]", "bg-[#E8D5F5]"];

  return (
    <div className="pt-[72px] md:pt-[80px]">
      {/* Header — Green Block */}
      <section className="bg-[#D9E5C3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#2D1B69] tracking-tight">Programmes & Events</h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">Our core initiatives aimed at creating sustainable change and fostering opportunities for the Deaf community.</p>
        </div>
      </section>

      {programmes.map((prog, i) => (
        <section key={i} className={sectionColors[i]}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
            <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-4 items-center mb-6">
                  <div className={`${prog.color} p-3 rounded-xl`}>{prog.icon}</div>
                  <h2 className="text-3xl font-black tracking-tight text-[#2D1B69]">{prog.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">{prog.desc}</p>
                <ul className="space-y-4">
                  {prog.details.map((detail, j) => (
                    <li key={j} className="flex gap-3 items-center text-[#2D1B69] font-medium">
                      <span className="w-2.5 h-2.5 bg-[#C4953A] rounded-full shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Image src={prog.image} alt={prog.title} fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Events — Navy Block */}
      <section className="bg-[#2D1B69] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#C4953A] inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white mb-6">
                <Calendar size={16} />
                Featured Event
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">International Day of Persons with Disabilities</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed text-justify">
                Deaf Access Foundation organised an outreach event at Ijokodo High School in Ibadan to mark this day. The event brought together students to discuss accessibility, inclusion, and opportunities.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="font-bold mb-2 text-[#C4953A]">Location</h4>
                <p className="mb-6 text-white/70">Ijokodo High School, Ibadan</p>
                <h4 className="font-bold mb-2 text-[#C4953A]">Focus</h4>
                <p className="text-white/70">Accessibility, Inclusion, and Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
