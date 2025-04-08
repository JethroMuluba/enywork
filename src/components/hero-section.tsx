'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import data  from "@/data/data.json"

export default function HeroSection() {
    const getTitle = data.home?.[0]?.heroSection?.[0]?.title;
    const getSubTitle = data.home?.[0]?.heroSection?.[0]?.subtitle;
    const getImage = data.home?.[0]?.heroSection?.[0]?.image;
  return (
    <section className="relative overflow-hidden hero-section top-30" style={{ backgroundImage: `url(${getImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>

      <div className="container-custom relative z-10 py-16 md:py-24 min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6 md:gap-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
              {getTitle}
            </h1>

            <p className="text-lg md:text-2xl text-white">
              {getSubTitle}
            </p>

            <Link href="/services" className="btn-primary self-start">
              <span>DÉCOUVRIR</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="hidden lg:block relative h-[600px]">
            <Image
              src="/placeholder.svg?height=767&width=748"
              alt="Digital Innovation"
              width={748}
              height={767}
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

