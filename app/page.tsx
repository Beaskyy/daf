"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, Megaphone, Users, Accessibility, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

/* ── Carousel Data ────────────────────────────────────────────── */
const carouselItems = [
  {
    image: "/dfb786f4-81f3-4bdf-bccf-e651d40a72fa.JPG",
    title: "Advancing access and opportunities for Deaf communities in Nigeria",
    subtitle: "Deaf Access Foundation is working to expand access, awareness, and opportunities through education, advocacy, and accessibility initiatives.",
    cta: { label: "Learn About Our Work", href: "/about" },
    color: "bg-[#D9E5C3]",          // Light green like RNID
    textColor: "text-[#2D1B69]",
  },
  {
    image: "/3d955a16-d796-4dcb-8744-a8ca42b64656.JPG",
    title: "Education programmes that inspire and empower Deaf students",
    subtitle: "Our school outreach programmes encourage learning, confidence, and future possibilities for students across Nigeria.",
    cta: { label: "Explore Programmes", href: "/programmes" },
    color: "bg-[#E8D5F5]",          // Light purple
    textColor: "text-[#2D1B69]",
  },
  {
    image: "/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG",
    title: "Partner with us to create lasting change",
    subtitle: "Your support helps us provide scholarships, run outreach events, and develop accessibility tools for Deaf communities.",
    cta: { label: "Support Us", href: "/partner" },
    color: "bg-[#F5E6C8]",          // Light gold
    textColor: "text-[#2D1B69]",
  },
];

/* ── Initiative Cards ────────────────────────────────────────── */
const initiatives = [
  {
    title: "Education & School Programmes",
    desc: "We organise educational outreach programmes in Deaf schools across Nigeria that encourage learning, confidence, and future opportunities.",
    icon: <GraduationCap size={28} />,
    color: "bg-[#2D1B69]",
    href: "/programmes",
  },
  {
    title: "Scholarships & Student Support",
    desc: "We support Deaf students through scholarships and educational assistance to help them continue their studies and pursue their ambitions.",
    icon: <Users size={28} />,
    color: "bg-[#C4953A]",
    href: "/programmes",
  },
  {
    title: "Advocacy & Awareness",
    desc: "Promoting understanding of Deaf culture, sign language, and communication accessibility through outreach and community engagement.",
    icon: <Megaphone size={28} />,
    color: "bg-[#5B8C5A]",
    href: "/about",
  },
  {
    title: "Accessibility Initiatives",
    desc: "Supporting projects like SignFlow, a web‑based communication tool, to improve practical communication access for the Deaf community.",
    icon: <Accessibility size={28} />,
    color: "bg-[#8B5CF6]",
    href: "/resources",
  },
];

/* ─────────────────────────────────────────────────────────────── */
export default function Home() {
  const [current, setCurrent] = useState(0);
  const [currentInitiative, setCurrentInitiative] = useState(0);
  const total = carouselItems.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Auto‑advance every 6s
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = carouselItems[current];

  return (
    <>
      {/* ═══════ HERO CAROUSEL (RNID‑style) ═══════ */}
      <section className="relative pt-[72px] md:pt-[80px]">
        {/* Hero Image */}
        <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Colored Block Overlay (below image — exactly like RNID) */}
        <div className={`${slide.color} transition-colors duration-500`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className={`text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 ${slide.textColor}`}>
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-2 bg-[#2D1B69] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2D1B69]/90 transition-all"
                >
                  {slide.cta.label}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-3 mt-8">
              {carouselItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? "bg-[#2D1B69] scale-125" : "bg-[#2D1B69]/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ OUR CORE INITIATIVES — Navy block (like RNID) ═══════ */}
      <section className="bg-[#2D1B69] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4">What we do</h2>
            <p className="text-white/70 text-lg max-w-2xl mb-16">
              Creating lasting impact through focused programmes and community engagement across Nigeria.
            </p>
          </motion.div>

          {/* Desktop Grid (Visible on md and up) */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={item.href} className="block group h-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/15 transition-all border border-white/5 flex flex-col">
                    <div className={`${item.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shrink-0`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#C4953A] transition-colors">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed text-justify">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel (Visible only on small screens) */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex"
                animate={{ x: `-${currentInitiative * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {initiatives.map((item, i) => (
                  <div key={i} className="min-w-full px-2">
                    <Link href={item.href} className="block h-full">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/5 flex flex-col">
                        <div className={`${item.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shrink-0`}>
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed text-justify">{item.desc}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Carousel Controls for Mobile */}
            <div className="flex justify-center gap-2 mt-8">
              {initiatives.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentInitiative(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentInitiative === i ? "bg-[#C4953A] w-6" : "bg-white/20"
                  }`}
                  aria-label={`Go to initiative ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHERE WE WORK — Light Gold Section ═══════ */}
      <section className="bg-[#F5E6C8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-[#2D1B69]">
                Expanding impact across Nigeria
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed text-justify">
                Deaf Access Foundation (DAF) is based in Nigeria and currently runs programmes and outreach activities with Deaf schools and communities across the country.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed text-justify">
                Several of our early initiatives have taken place in <strong>Ibadan</strong>, where we work directly with schools and students through education programmes, outreach activities, and awareness events.
              </p>
              <div className="flex items-center gap-4 text-[#2D1B69] font-bold text-lg">
                <span className="w-12 h-1 bg-[#C4953A] rounded-full"></span>
                National Reach, Local Impact
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/3d955a16-d796-4dcb-8744-a8ca42b64656.JPG" alt="Students" fill className="object-cover" />
              </div>
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image src="/fd6271fc-00d0-4ece-a44c-6235bab53644.JPG" alt="Outreach" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ STORIES CAROUSEL — Light Purple Section ═══════ */}
      <section className="bg-[#E8D5F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-[#2D1B69]">
            Stories from students
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="relative h-80 md:h-[440px] rounded-2xl overflow-hidden shadow-xl"
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
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-10 shadow-lg">
                <div className="text-[#C4953A] text-6xl font-serif leading-none mb-4">&ldquo;</div>
                <p className="text-xl italic leading-relaxed mb-6 text-foreground font-medium text-justify">
                  When people come to our school and talk about opportunities, it helps us think about what we can do in the future.
                </p>
                <div className="font-bold text-lg text-[#2D1B69]">— Student participant</div>
                <div className="text-muted-foreground text-sm">Deaf school outreach programme</div>
              </div>

              <Link
                href="/stories"
                className="inline-flex items-center gap-2 mt-8 text-[#2D1B69] font-bold text-lg hover:text-[#C4953A] transition-colors"
              >
                Read more stories
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA — Full Width Dark Navy (like RNID) ═══════ */}
      <section className="bg-[#2D1B69] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
                Join us in creating a more accessible world
              </h2>
              <p className="text-xl mb-10 text-white/70 leading-relaxed text-justify">
                Your support helps us provide scholarships, run educational outreaches, and advocate for the rights of the Deaf community in Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/partner"
                  className="inline-block bg-[#C4953A] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#C4953A]/90 transition-all text-center"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-white/10 border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-80 md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/eventflyer.jpg"
                  alt="DAF Event"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B69]/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
