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
    <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
    className="bg-fixed overflow-hidden flex justify-between items-center h-[600px] lg:h-full  lg:pl-15 " style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness:100,
            damping:10,
            delay:1
          }}
          className="flex flex-col items-center lg:items-start gap-6 md:gap-8 lg:w-1/2 px-5">
            <h1 className=" text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              {getTitle}
            </h1>

            <p className="text-xl lg:text-2xl font-normal text-white text-center lg:text-left">
              {getSubTitle}
            </p>

            <Link href="/contact" className=" bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-normal text-white cursor-pointer self-center lg:self-start flex items-center gap-2 ">
              <span>CONTACT</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="hidden lg:block w-1/2 self-end">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness:100,
                damping:10,
                delay:0.8
              }}
            >
              <Image
                src={getImage || '/placeholder.svg?height=767&width=748'}
                alt="Digital Innovation"
                width={648}
                height={667}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
    </motion.section>
  )
}

