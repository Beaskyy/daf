"use client";

import Image from "next/image";
import Section from "@/components/Section";

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
      image: "/DAF Logo.jpeg" // Using Logo as placeholder if image unavailable
    }
  ];

  return (
    <div className="pt-32">
      <section className="bg-background py-16 md:py-24 text-center border-b">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">The dedicated individuals committed to expanding access and opportunities for the Deaf community in Nigeria.</p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="relative h-96 w-full rounded-[3rem] overflow-hidden mb-8 shadow-xl">
                <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white text-sm font-light leading-relaxed">{member.bio}</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight">{member.name}</h3>
              <p className="text-secondary font-bold text-sm tracking-wide uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-primary/5 rounded-[4rem] my-12">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Volunteers & Collaborators</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Foundation works with volunteers, educators, and community members who support its outreach activities, programmes, and events. Our work is a collective effort to build a more inclusive society.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
               <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-black/5 rotate-3 hover:rotate-0 transition-transform">
                  <p className="font-black text-5xl text-primary text-center">JOIN US</p>
               </div>
            </div>
         </div>
      </Section>
    </div>
  );
}
