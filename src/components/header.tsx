"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Menu, ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
import data from "@/data/data.json"
import { HeaderButton } from "./ui/headerButton"
import { Button } from "./ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logoEnywork = data.header[0].logo || '/default-logo.svg';
  const logoEnyworkAlt = data.header[0]["logo-alt"] || 'Default Logo Alt Text';

  return (
    <header className="w-full">
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
      <div className="py-4 px-4 md:px-15 lg:px-25 2xl:px-35 shadow-sm text-sm poppins-regular">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative h-[60px] w-[151px]">
            <Image src={logoEnywork} alt={logoEnyworkAlt} width={151} height={60} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            <Link href="/" className="text-secondary border-b border-primary px-1 py-1.5">
              ACCUEIL
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/about" className="text-secondary hover:text-primary transition-colors">
              A PROPOS
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/realisations" className="text-secondary hover:text-primary transition-colors">
              RÉALISATIONS
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/services" className="text-secondary hover:text-primary transition-colors">
              SERVICES
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/equipe" className="text-secondary hover:text-primary transition-colors">
              ÉQUIPE
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/blogs" className="text-secondary hover:text-primary transition-colors">
              BLOGS
            </Link>
          </nav>

          {/* Contact Button & Mobile Menu */}

          <HeaderButton />
          <div className="flex items-center gap-4">
            {/* <Link href="/#" className="hidden md:flex btn-primary">
              <span>CHATS</span>
              <ArrowRight className="w-5 h-5" />
            </Link> */}

            <Button
              variant="default"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
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
      )}
    </header>
  )
}

