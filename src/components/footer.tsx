'use client'
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook, Linkedin } from "lucide-react"
import data from "@/data/data.json"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
    const logoEnywork = data.header[0].logo || '/placeholder.svg';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <footer ref={ref} className="bg-[#141926] text-white">
      <div className="container-custom py-12 px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between  gap-10 lg:gap-32">
          {/* Company Info */}
          <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start gap-6">
            <Link href="/" className="relative h-[60px] w-[151px]">
              <Image src={logoEnywork} alt="Enywork Logo" width={151} height={60} />
            </Link>
            <p className="text-light-secondary text-lg">Travaillons ensemble sur la réussite de vos projets.</p>
          </motion.div>

          {/* Site Menu */}
          <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
          className="lg:flex-col items-start gap-4 hidden lg:block">
            <h3 className="text-lg font-medium mb-2">MENU</h3>
            <div className="flex flex-col gap-2 text-center font-light lg:text-left text-lg">
              <Link href="/" className="text-light-secondary hover:text-[#E10919] transition-colors">
                Accueil
              </Link>
              <Link href="/about" className="text-light-secondary hover:text-[#E10919] transition-colors">
                A propos
              </Link>
              <Link href="/realizations" className="text-light-secondary hover:text-[#E10919] transition-colors">
                Réalisations
              </Link>
              <Link href="/services" className="text-light-secondary hover:text-[#E10919] transition-colors">
                Services
              </Link>
              <Link href="/team" className="text-light-secondary hover:text-[#E10919] transition-colors">
                Équipe
              </Link>
              <Link href="/blogs" className="text-light-secondary hover:text-[#E10919] transition-colors">
                Blogs
              </Link>
              <Link href="/contact" className="text-light-secondary hover:text-[#E10919] transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
          className="flex flex-col  font-light gap-4">
            <h3 className="text-lg font-medium mb-2">NOS CONTACTS</h3>
            <div className="flex flex-col gap-3 text-lg">
              <div className="flex  gap-3">
                <Phone className="w-6 h-6 text-[#E10919]" />
                <span className="text-light-secondary">+243 899 467 398</span>
              </div>
              <div className="flex  gap-3">
                <Mail className="w-6 h-6 text-[#E10919]" />
                <span className="text-light-secondary">contact@enywork.com</span>
              </div>
            </div>
          </motion.div>

          {/* Address & Social */}
          <div className="flex flex-col gap-8">
            <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
            className="flex flex-col items-start">
              <h3 className="text-lg font-medium mb-4">NOTRE ADRESSE</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#E10919] flex-shrink-0 mt-1" />
                <span className="text-light-secondary font-light text-lg">
                  Ancienne Galerie Présidentielle, 6è niveau, Local 6B8, Kinshasa/Gombe
                </span>
              </div>
            </motion.div>

            <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
            className="flex flex-col items-start">
              <h3 className="text-lg font-medium mb-4">SUIVEZ-NOUS SUR :</h3>
              <div className="flex gap-3">
                <Link
                  href="https://www.instagram.com/enywork"
                  target= "blank"
                  aria-label="Instagram"
                  className="bg-[#E10919] rounded-full p-2 hover:bg-[#E10919]/80 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  target= "blank"
                  className="bg-[#E10919] rounded-full p-2 hover:bg-[#E10919]/80 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  target= "blank"
                  className="bg-[#E10919] rounded-full p-2 hover:bg-[#E10919]/80 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  target= "blank"
                  className="bg-[#E10919] rounded-full p-2 hover:bg-[#E10919]/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#1C2736] py-6 px-4 md:px-8 lg:px-30">
        <div className="container-custom text-center">
          <p className="text-white font-light">Copyright © 2017 - {new Date().getFullYear()} Design by Enywork SARL</p>
        </div>
      </motion.div>
    </footer>
  )
}

