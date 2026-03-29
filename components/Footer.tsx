import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A0F40] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="relative w-14 h-14 bg-white rounded-xl p-1">
              <Image
                src="/logo.png"
                alt="DAF Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-white">DAF</span>
              <span className="text-white/50 text-xs">Deaf Access Foundation</span>
            </div>
          </Link>
          <p className="text-white/60 mb-8 leading-relaxed text-justify">
            Advancing access, awareness, and opportunities for Deaf and hard-of-hearing communities through education, advocacy, and accessibility initiatives in Nigeria.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/deafaccessfoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-[#C4953A] transition-colors text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-xl hover:bg-[#C4953A] transition-colors text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-20">
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#C4953A]">Navigation</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/" className="hover:text-[#C4953A] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#C4953A] transition-colors">About</Link></li>
              <li><Link href="/programmes" className="hover:text-[#C4953A] transition-colors">Programmes</Link></li>
              <li><Link href="/impact" className="hover:text-[#C4953A] transition-colors">Impact</Link></li>
              <li><Link href="/stories" className="hover:text-[#C4953A] transition-colors">Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#C4953A]">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C4953A]" />
                <a href="mailto:deafaccessfoundation@gmail.com" className="hover:text-[#C4953A] transition-colors break-all">
                  deafaccessfoundation@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C4953A] shrink-0" />
                <span>Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
        <p>© {new Date().getFullYear()} Deaf Access Foundation. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-[#C4953A] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#C4953A] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
