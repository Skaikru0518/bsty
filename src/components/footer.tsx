import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-massage-green-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/images/logo2.png"
              alt="Bástya Masszázs"
              width={180}
              height={45}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Professzionális masszázs szolgáltatások a tested és lelked harmóniájáért.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=573202689206362"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-massage-lime hover:text-massage-green transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@bstyamasszzs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-massage-lime hover:text-massage-green transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Gyors linkek</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#kezdolap" className="hover:text-massage-lime transition-colors">
                  Kezdőlap
                </a>
              </li>
              <li>
                <a href="#szolgaltatasok" className="hover:text-massage-lime transition-colors">
                  Szolgáltatások
                </a>
              </li>
              <li>
                <a href="/prices" className="hover:text-massage-lime transition-colors">
                  Ártáblázat
                </a>
              </li>
              <li>
                <a href="#rolam" className="hover:text-massage-lime transition-colors">
                  Rólam
                </a>
              </li>
              <li>
                <a href="#kapcsolat" className="hover:text-massage-lime transition-colors">
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Elérhetőség</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+36306091034" className="hover:text-massage-lime transition-colors">
                  +36 30 609 1034
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a
                  href="mailto:bastyamasszazs@gmail.com"
                  className="hover:text-massage-lime transition-colors"
                >
                  bastyamasszazs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Debrecen
                  <br />
                  Vár utca 8. II./33 ajtó
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Bástya Masszázs. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
