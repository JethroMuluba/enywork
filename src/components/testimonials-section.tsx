import React from "react"
import Image from "next/image"
import SectionTitle from "./ui/sectionTitle"
import data from "@/data/data.json"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


export default function TestimonialsSection() {
    const getTitle = data.home?.[8]?.testimonialSection?.[0].title || "Ce qu'ils disent de nous";
    const getSubTitle = data.home?.[8]?.testimonialSection?.[0].subtitle || "Des témoignages forts et authentiques provenant des grandes autorités de ce pays et d'ailleurs.";
    const testimonialData = data.home?.[8]?.testimonialSection?.[0].testimonial;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="bg-[#F2F2F2] py-20 px-8 lg:px-25 2xl:px-45">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 md:gap-16">
            <SectionTitle title={getTitle} subTitle={getSubTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {testimonialData?.map((testimonial, index) => (
              <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                  delay: index * 0.8 
              }}
              key={testimonial.id} className="flex flex-col gap-6">
                <div 
                className="flex items-center gap-4">
                  <div className={`relative w-[65px] h-[65px]  lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden border-3 ${testimonial.highlighted ? "border-[#E10919] text-white" : " border-white"} shadow-lg `}>
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-secondary">{testimonial.name}</h3>
                    <p className="text-[#3B4E6A] text-lg">{testimonial.role}</p>
                  </div>
                </div>

                <div className="relative transition-transform duration-600 hover:scale-110">
                  <div
                    className={`px-6 py-8 rounded-lg shadow-lg relative text-lg ${testimonial.highlighted ? "bg-[#E10919] text-white" : "bg-white text-[#3B4E6A]"}`}
                  >
                    <div className="absolute -top-2 left-10 w-4 h-4 transform rotate-45 bg-inherit"></div>
                    <p className="">{testimonial.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

