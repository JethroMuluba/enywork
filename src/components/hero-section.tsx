'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import data  from "@/data/data.json"
import { motion } from 'framer-motion'

export default function HeroSection() {
    const getTitle = data.home?.[0]?.heroSection?.[0]?.title;
    const getSubTitle = data.home?.[0]?.heroSection?.[0]?.subtitle;
    const getCover = data.home?.[0]?.heroSection?.[0]?.cover;
    const getImage = data.home?.[0]?.heroSection?.[0]?.image;
  return (
    <section className="relative overflow-hidden font-[poppins] flex justify-between items-center h-[715px] hero-section top-22 lg:top-31 py-4 pl-4 md:pl-8 lg:pl-15 " style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 md:gap-12 w-1/2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
              {getTitle}
            </h1>

            <p className="text-2xl text-white">
              {getSubTitle}
            </p>

            <Link href="/contact" className=" bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-medium text-white cursor-pointer self-start flex items-center gap-2 ">
              <span>CONTACTEZ-NOUS</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="hidden lg:block w-1/2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={getImage || '/placeholder.svg?height=767&width=748'}
                alt="Digital Innovation"
                width={748}
                height={767}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
    </section>
  )
}

