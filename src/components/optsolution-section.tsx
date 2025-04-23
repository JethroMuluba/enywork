import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import data from "@/data/data.json"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'




export default function OptSolutionSection() {
    const getCover=data.home?.[2]?.optsolutionBreadge?.[0]?.background;
    const getLogo=data.home?.[2]?.optsolutionBreadge?.[0]?.logoOptsolutionWhite;
    const getTitle=data.home?.[2]?.optsolutionBreadge?.[0]?.title;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-fixed overflow-hidden font-[poppins] flex justify-between items-center h-[600px] lg:h-full lg:pl-15 px-4 md:px-8 lg:px-25 relative" style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#1C2736] opacity-75"></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-auto">
            <Image
              src={getLogo || '/placeholder.svg?height=767&width=748'}
              alt="OptSolution Logo"
              width={335}
              height={100}
              className="max-w-[335px] w-full"
            />
          </div>

          <div className="flex-1">
            <p className="text-xl md:text-2xl text-white text-center md:text-left">
              {getTitle}
            </p>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <Link href="/about" target="blank" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-medium text-white cursor-pointer flex items-center gap-2">
              <span>DÉCOUVRIR</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

