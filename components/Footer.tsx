import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <Image
              src="/DAF Logo.jpeg"
              alt="DAF Logo"
              width={50}
              height={50}
              className="rounded-full brightness-110"
            />
            <span className="font-bold text-2xl tracking-tighter">DAF</span>
          </Link>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">
            Advancing access, awareness, and opportunities for Deaf and hard-of-hearing communities through education, advocacy, and accessibility initiatives in Nigeria.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/deafaccessfoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/programmes" className="hover:text-white transition-colors">Programmes</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li>
              <li><Link href="/stories" className="hover:text-white transition-colors">Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:deafaccessfoundation@gmail.com" className="hover:text-white transition-colors break-all">
                  deafaccessfoundation@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Deaf Access Foundation. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
