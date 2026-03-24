"use client";

import Image from "next/image";
import Section from "@/components/Section";
import { BookOpen, Award, MessageSquare, Calendar } from "lucide-react";

export default function Programmes() {
  const programmes = [
    {
      title: "School Outreach Programme",
      desc: "We visit Deaf schools across Nigeria to organise sessions that inspire students and support learning and confidence.",
      details: ["Education pathways", "Leadership and confidence-building", "Opportunities available to Deaf students"],
      icon: <BookOpen className="text-primary" />,
      image: "/3d955a16-d796-4dcb-8744-a8ca42b64656.JPG"
    },
    {
      title: "Scholarship Programme",
      desc: "Deaf Access Foundation supports Deaf students through scholarships and educational assistance that help them remain in school.",
      details: ["Educational assistance", "Targeted support for students in need", "Long-term educational growth"],
      icon: <Award className="text-primary" />,
      image: "/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG"
    },
    {
      title: "Accessibility Initiatives",
      desc: "The Foundation supports initiatives that explore ways to improve communication access, including SignFlow.",
      details: ["SignFlow: Web-based sign language tool", "Digital accessibility exploration", "Systemic communication support"],
      icon: <MessageSquare className="text-primary" />,
      image: "/dfb786f4-81f3-4bdf-bccf-e651d40a72fa.JPG"
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Programmes & Events</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto px-6">Our core initiatives aimed at creating sustainable change.</p>
      </section>

      {programmes.map((prog, i) => (
        <Section key={i} className={i % 2 === 1 ? "bg-primary/5" : ""}>
          <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
            <div className="lg:w-1/2">
              <div className="flex gap-4 items-center mb-6">
                <div className="bg-secondary/20 p-3 rounded-xl">{prog.icon}</div>
                <h2 className="text-3xl font-bold tracking-tight">{prog.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{prog.desc}</p>
              <ul className="space-y-4">
                {prog.details.map((detail, j) => (
                  <li key={j} className="flex gap-3 items-center text-primary font-medium">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src={prog.image} alt={prog.title} fill className="object-cover" />
            </div>
          </div>
        </Section>
      ))}

      {/* Events */}
      <Section>
        <div className="bg-secondary p-12 md:p-20 rounded-[4rem]">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-black/10 inline-block px-4 py-1 rounded-full text-sm font-bold mb-6 flex items-center gap-2">
                <Calendar size={16} />
                Featured Event
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">International Day of Persons with Disabilities</h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                Deaf Access Foundation organised an outreach event at Ijokodo High School in Ibadan to mark this day. The event brought together students to discuss accessibility, inclusion, and opportunities.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h4 className="font-bold mb-2">Location</h4>
                <p className="mb-6 opacity-80">Ijokodo High School, Ibadan</p>
                <h4 className="font-bold mb-2">Focus</h4>
                <p className="opacity-80">Accessibility, Inclusion, and Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
