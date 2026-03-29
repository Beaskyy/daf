"use client";

import Image from "next/image";
import { Quote, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Stories() {
  const stories = [
    {
      text: "When people come to our school and talk about opportunities, it helps us think about what we can do in the future.",
      author: "Student participant",
      context: "Deaf school outreach programme"
    }
  ];

  return (
    <div className="pt-[72px] md:pt-[80px]">
      {/* Header — Purple Block */}
      <section className="bg-[#E8D5F5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#2D1B69] tracking-tight">Stories from Students</h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">Voices and reflections from the Deaf communities we serve, sharing the impact of our programmes.</p>
        </div>
      </section>

      {/* Stories — White */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/dfb786f4-81f3-4bdf-bccf-e651d40a72fa.JPG"
                alt="Students sharing stories"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-black mb-8 text-[#2D1B69]">Reflections and Impact</h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-justify">
                Our school programmes create opportunities for Deaf students to engage in conversations about education, leadership, and future possibilities. Through these programmes, students are able to share ideas, ask questions, and explore new possibilities.
              </p>
              {stories.map((story, i) => (
                <div key={i} className="bg-[#F5E6C8] p-10 rounded-2xl relative border-l-4 border-[#C4953A]">
                  <div className="text-[#C4953A] text-5xl font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-xl italic leading-relaxed mb-6 font-medium text-[#2D1B69] text-justify">
                    &quot;{story.text}&quot;
                  </p>
                  <div className="font-bold text-lg text-[#2D1B69]">— {story.author}</div>
                  <div className="text-muted-foreground text-sm">{story.context}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
