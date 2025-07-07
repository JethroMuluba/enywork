import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"
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
    <section ref={ref} className="bg-fixed overflow-hidden flex justify-center items-center px-8 lg:px-20 relative" style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#1C2736] opacity-75"></div>
      <div className="container-custom relative z-10 py-20 lg:py-12">
        <div className="flex flex-col lg:flex-row 3xl:justify-center items-center gap-8 lg:gap-30">
          <motion.div 
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full md:w-auto flex justify-center items-center">
            <Image
              src={getLogo || '/placeholder.svg?height=767&width=748'}
              alt="OptSolution Logo"
              width={335}
              height={100}
              className="max-w-[335px] w-full items-center"
            />
          </motion.div>

          <motion.div 
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1">
            <p className="text-2xl  text-white text-center lg:text-left ">
              {getTitle}
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-center items-center  gap-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <Link href="/Manuel-d'utilisation-OPT.pdf" download className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-normal text-white cursor-pointer flex items-center gap-2">
              <span>BROCHURE</span>
              <Download  className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <Link href="https://optsolution.net/" target="blank" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-normal text-white cursor-pointer flex items-center gap-2">
              <span>DÉCOUVRIR</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          </div>


        </div>
      </div>
    </section>
  )
}

