"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, AlignRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
import data from "@/data/data.json"
import { HeaderButton } from "./ui/headerButton"
import { Button } from "./ui/button"
import MenuHamburger from "./MenuHamburger"
import DesktopMenu from "./desktopMenu"

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const logoEnywork = data.header[0].logo || '/default-logo.svg';
  const logoEnyworkAlt = data.header[0]["logo-alt"] || 'Default Logo Alt Text';

  

  return (
    <header className=" fixed w-full z-50">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#320001] to-[#BD2222] poppins-regular py-2 px-15 hidden lg:block">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-white" />
            <span className="text-xs text-white ">contact@enywork.com</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-xs text-white">
              Ancienne Galerie Présidentielle, 6è niveau, Local 6B8, Kinshasa/Gombe
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white" />
            <span className="text-xs text-white">+243 899 467 398</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full  backdrop-blur-xl py-4 px-4 md:px-8 lg:px-15  shadow-sm text-sm poppins-regular">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative h-[60px] w-[151px]">
            <Image src={logoEnywork} alt={logoEnyworkAlt} width={151} height={60} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            <Link href="/" className="text-secondary border-b border-primary hover:text-[#E10919] transition-colors px-1 py-1.5">
              ACCUEIL
            </Link>
            {/* <span className="text-dark-secondary h-3 w-px">|</span> */}
            <Link href="/about" className="text-secondary hover:text-[#E10919] transition-colors">
              A PROPOS
            </Link>
            {/* <span className="text-dark-secondary h-3 w-px">|</span> */}
            <Link href="/realisations" className="text-secondary hover:text-[#E10919] transition-colors">
              RÉALISATIONS
            </Link>
            {/* <span className="text-dark-secondary h-3 w-px">|</span> */}
            <Link href="/services" className="text-secondary hover:text-[#E10919] transition-colors">
              SERVICES
            </Link>
            {/* <span className="text-dark-secondary h-3 w-px">|</span> */}
            <Link href="/equipe" className="text-secondary hover:text-[#E10919] transition-colors">
              ÉQUIPE
            </Link>
            {/* <span className="text-dark-secondary h-3 w-px">|</span> */}
            <Link href="/blogs" className="text-secondary hover:text-[#E10919] transition-colors">
              BLOGS
            </Link>
          </nav>

          {/* Contact Button & Mobile Menu */}

          <div className="flex items-center gap-4">
            <HeaderButton />

          {/* Desktop menu */}
            <Button
              variant="default"
              size="icon"
              className=" hidden lg:block bg-[#E10919] hover:bg-[#B00813]  rounded-full cursor-pointer"
              onClick={() => setIsDesktopMenuOpen(true)}
              
            >
              <AlignRight className="w-5 h-5 text-white m-2"  />
            </Button>

            <DesktopMenu isOpen={isDesktopMenuOpen} onClose={() => setIsDesktopMenuOpen(false)} />

          {/* Mobile menu */}
            <MenuHamburger />
            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-4">
          <div className="container-custom flex flex-col gap-4">
            <Link href="/" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              ACCUEIL
            </Link>
            <Link href="/a-propos" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              A PROPOS
            </Link>
            <Link href="/realisations" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              RÉALISATIONS
            </Link>
            <Link href="/services" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              SERVICES
            </Link>
            <Link href="/equipe" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              ÉQUIPE
            </Link>
            <Link href="/blogs" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              BLOGS
            </Link>
            <Link href="/contact" className="btn-primary self-start">
              <span>CONTACT</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )} */}
    </header>
  )
}

