"use client";

import Image from "next/image";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Deaf Access Foundation</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto px-6">Advancing access, awareness, and opportunities for Deaf communities in Nigeria.</p>
      </section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission & Vision</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-secondary/20 p-4 rounded-2xl h-fit">
                  <Target className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To advance access, inclusion, and opportunity for Deaf and hard-of-hearing communities through education programmes, advocacy, scholarships, and accessibility initiatives.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-secondary/20 p-4 rounded-2xl h-fit">
                  <Eye className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
              className="object-cover rounded-[3rem] shadow-2xl"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-primary/5 rounded-[4rem] my-12">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
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
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
              <h3 className="text-primary font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder's Note */}
      <Section>
        <div className="bg-white border rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row">
          <div className="md:w-1/3 relative h-[400px] md:h-auto">
            <Image
              src="/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-2/3 p-12 md:p-20 flex flex-col justify-center">
            <Quote className="text-secondary mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-6">Founder&apos;s Note</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed italic text-lg mb-8">
              <p>
                &quot;Deaf Access Foundation was created to support greater access and opportunities for Deaf communities in Nigeria, particularly through education and community engagement.&quot;
              </p>
              <p>
                &quot;As a Deaf individual, I have experienced both the possibilities and the barriers that can exist. This work is rooted in the belief that Deaf students and communities should have access to opportunities, information, and support that allow them to thrive.&quot;
              </p>
            </div>
            <div>
              <p className="font-bold text-xl text-primary">Oyindamola Bello Adigun</p>
              <p className="text-muted-foreground">Founder and Executive Director</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
