"use client";

import Image from "next/image";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      {/* Page Header — Purple Block */}
      <section className="bg-[#E8D5F5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#2D1B69] font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Mission
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 text-[#2D1B69] tracking-tight"
          >
            About Deaf Access Foundation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/70 leading-relaxed max-w-3xl"
          >
            Advancing access, awareness, and opportunities for Deaf communities in Nigeria through education, advocacy, and innovation.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-black mb-8 text-[#2D1B69]">Our Mission & Vision</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-[#C4953A] p-4 rounded-xl h-fit">
                    <Target className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#2D1B69]">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      To advance access, inclusion, and opportunity for Deaf and hard-of-hearing communities through education programmes, advocacy, scholarships, and accessibility initiatives.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-[#5B8C5A] p-4 rounded-xl h-fit">
                    <Eye className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#2D1B69]">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      To promote environments where communication access is recognised, supported, and integrated into everyday systems across schools, communities, and institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[400px] w-full">
              <Image
                src="/dfb786f4-81f3-4bdf-bccf-e651d40a72fa.JPG"
                alt="Our Impact"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach — Gold Block */}
      <section className="bg-[#F5E6C8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <h2 className="text-3xl font-black mb-12 text-[#2D1B69]">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community engagement",
                desc: "We work directly with Deaf students, schools, and communities to understand their experiences and priorities.",
              },
              {
                title: "Education and opportunity",
                desc: "We support initiatives that encourage learning, confidence, and future opportunities for Deaf students.",
              },
              {
                title: "Practical impact",
                desc: "We focus on activities and programmes that create meaningful engagement and sustainable improvements.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#C4953A]">
                <h3 className="text-[#2D1B69] font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note — Navy Block */}
      <section className="bg-[#2D1B69]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <div className="text-[#C4953A] text-6xl font-serif leading-none mb-4">&ldquo;</div>
              <h2 className="text-3xl font-black mb-6 text-white">Founder&apos;s Note</h2>
              <div className="space-y-4 text-white/70 leading-relaxed italic text-lg mb-8 text-justify">
                <p>
                  &quot;Deaf Access Foundation was created to support greater access and opportunities for Deaf communities in Nigeria, particularly through education and community engagement.&quot;
                </p>
                <p>
                  &quot;As a Deaf individual, I have experienced both the possibilities and the barriers that can exist. This work is rooted in the belief that Deaf students and communities should have access to opportunities, information, and support that allow them to thrive.&quot;
                </p>
              </div>
              <div>
                <p className="font-bold text-xl text-[#C4953A]">Oyindamola Bello Adigun</p>
                <p className="text-white/50">Founder and Executive Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
