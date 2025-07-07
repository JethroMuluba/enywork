import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import data  from "@/data/data.json"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const getImage= data.home?.[1]?.aboutUsSection?.[0]?.image;
  const getTitle= data.home?.[1]?.aboutUsSection?.[0]?.title;
  const getSubTitle= data.home?.[1]?.aboutUsSection?.[0]?.subtitle;
  const getText1= data.home?.[1]?.aboutUsSection?.[0]?.text1;
  const getText2= data.home?.[1]?.aboutUsSection?.[0]?.text2;
  const getText3= data.home?.[1]?.aboutUsSection?.[0]?.text3;
  const getText4= data.home?.[1]?.aboutUsSection?.[0]?.text4;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F2F2F2] py-20 px-8 lg:px-25 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 flex justify-center">
          <div className=" w-1/2 ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <Image
                src={getImage || '/placeholder.svg?height=767&width=748'}
                alt="Enywork en Formation du Personnel"
                width={948}
                height={967}
                className="w-full h-full object-cover transition-transform duration-600 hover:scale-110"
              />
            </motion.div>
          </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <motion.h2 
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
              className=" text-4xl lg:text-4xl text-center lg:text-left font-medium text-[#E10919] "> 
                {getTitle} 
              </motion.h2>
              <motion.p 
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left text-xl text-[#3B4E6A] "> 
                {getSubTitle} 
              </motion.p>
            </div>

            <div className="flex flex-col gap-8 text-[#3B4E6A] text-base">
              <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }} 
              className=" text-lg text-left">
                {getText1}
              </motion.p>

              <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
              className="text-lg text-left">
                {getText2}
              </motion.p>

              <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 2.5, ease: "easeOut" }}
              className="text-lg text-left">
                {getText3 }
              </motion.p>

              <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 3, ease: "easeOut" }}
              className="text-lg text-left">
                {getText4 }
              </motion.p>



            </div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 3.5, ease: "easeOut" }}
              className="flex justify-center lg:justify-start"
            >
              <Link href="/about" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg text-white cursor-pointer flex items-center gap-2">
                <span>SAVOIR PLUS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
    </section>
  )
}

