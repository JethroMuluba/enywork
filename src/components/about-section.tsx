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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F2F2F2] font-[poppins] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
          <div className="hidden lg:block w-1/2 ">
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
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h2 className=" text-4xl font-semibold text-[#1C2736] "> {getTitle} </h2>
              <p className="section-subtitle"> {getSubTitle} </p>
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-secondary-light">
                {getText1}
              </p>

              <p className="text-secondary-light">
                {getText2}
              </p>


            </div>

            <Link href="/contact" className="btn-primary self-start">
              <span>CONTACTEZ-NOUS</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
    </section>
  )
}

