"use client";

import Image from "next/image";
import Section from "@/components/Section";
import { Quote } from "lucide-react";

export default function Stories() {
  const stories = [
    {
      text: "When people come to our school and talk about opportunities, it helps us think about what we can do in the future.",
      author: "Student participant",
      context: "Deaf school outreach programme"
    }
  ];

  return (
    <div className="pt-32">
      <section className="bg-background py-16 md:py-24 text-center border-b">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">Stories from Students</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">Voices and reflections from the Deaf communities we serve, sharing the impact of our programmes.</p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/dfb786f4-81f3-4bdf-bccf-e651d40a72fa.JPG"
              alt="Students sharing stories"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Reflections and Impact</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Our school programmes create opportunities for Deaf students to engage in conversations about education, leadership, and future possibilities. Through these programmes, students are able to share ideas, ask questions, and explore new possibilities.
            </p>
            {stories.map((story, i) => (
              <div key={i} className="bg-primary/5 p-10 rounded-[3rem] border border-primary/10 relative">
                <Quote className="text-secondary absolute -top-4 -left-4 bg-white rounded-full p-2 shadow-sm" size={40} />
                <p className="text-xl italic leading-relaxed mb-6 font-medium text-primary">
                  &quot;{story.text}&quot;
                </p>
                <div className="font-bold text-lg">— {story.author}</div>
                <div className="text-muted-foreground text-sm">{story.context}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
