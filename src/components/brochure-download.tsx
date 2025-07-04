import Link from "next/link"
import { Download  } from "lucide-react"
import data from "@/data/data.json"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'




export default function BrochuresDownload() {
    const getCover=data.home?.[2]?.optsolutionBreadge?.[0]?.background;
    const getTitle=data.about?.[6]?.brochureDownloader?.[0]?.title;
    const getSubTitle=data.about?.[6]?.brochureDownloader?.[0]?.subTitle;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-fixed overflow-hidden flex justify-center items-center px-4 md:px-8 lg:px-20 relative" style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#1C2736] opacity-75"></div>
      <div className="container-custom relative z-10 py-20 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-60   items-center ">

          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-4 ">
            <p className="text-3xl lg:text-4xl font-medium  text-white text-center lg:text-left ">
                {getTitle}
            </p>

            <p className="text- text-xl text-center text-white lg:text-left ">
                {getSubTitle}
            </p>
            
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <Link href="/Plaquette-Enywork-SARL.pdf" download className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-normal text-white cursor-pointer flex items-center gap-2">
              <span>TELECHARGEZ ICI</span>
              <Download  className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

