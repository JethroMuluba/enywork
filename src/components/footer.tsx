import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook, Linkedin } from "lucide-react"
import data from "@/data/data.json"

export default function Footer() {
    const logoEnywork = data.header[0].logo || '/placeholder.svg';
  return (
    <footer className="bg-[#141926] text-white">
      <div className="container-custom py-12 px-4 md:px-8 lg:px-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="relative h-[60px] w-[151px]">
              <Image src={logoEnywork} alt="Enywork Logo" width={151} height={60} />
            </Link>
            <p className="text-light-secondary">Travaillons ensemble sur la réussite de vos projets.</p>
          </div>

          {/* Site Menu */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-medium mb-2">MENU DU SITE</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-light-secondary hover:text-white transition-colors">
                Accueil
              </Link>
              <Link href="/services" className="text-light-secondary hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/a-propos" className="text-light-secondary hover:text-white transition-colors">
                A propos
              </Link>
              <Link href="/realisations" className="text-light-secondary hover:text-white transition-colors">
                Réalisations
              </Link>
              <Link href="/equipe" className="text-light-secondary hover:text-white transition-colors">
                Équipe
              </Link>
              <Link href="/blogs" className="text-light-secondary hover:text-white transition-colors">
                Blogs
              </Link>
              <Link href="/contact" className="text-light-secondary hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-medium mb-2">NOS CONTACTS</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#E10919]" />
                <span className="text-light-secondary">+243 899 467 398</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#E10919]" />
                <span className="text-light-secondary">contact@enywork.com</span>
              </div>
            </div>
          </div>

          {/* Address & Social */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-base font-medium mb-4">NOTRE ADRESSE</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#E10919] flex-shrink-0 mt-1" />
                <span className="text-light-secondary">
                  Ancienne Galerie Présidentielle, 6è niveau, Local 6B8, Kinshasa/Gombe
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium mb-4">SUIVEZ-NOUS SUR :</h3>
              <div className="flex gap-3">
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="bg-[#E10919] rounded-full p-2 hover:bg-[#E10919]/80 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="bg-[#E10919] rounded-full p-2 hover:bg-[#E10919]/80 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="bg-[#E10919] rounded-full p-2 hover:bg-[#E10919]/80 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="bg-[#E10919] rounded-full p-2 hover:bg-[#E10919]/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1C2736] py-6">
        <div className="container-custom text-center">
          <p className="text-white">Copyright © 2017 - {new Date().getFullYear()} Design by Enywork SARL</p>
        </div>
      </div>
    </footer>
  )
}

