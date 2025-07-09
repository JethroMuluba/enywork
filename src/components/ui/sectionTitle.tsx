import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TitleProps {
    title: string;
}

const SectionTitle = ({title } : TitleProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="flex flex-col gap-5 items-center ">
        <motion.h2 
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className=" text-3xl lg:text-4xl text-center font-medium text-[#E10919] lg:px-38"> 
            {title} 
        </motion.h2>
        <motion.div 
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
              className=" w-20 rounded-2xl bg-[#1C2736] py-[2px] "> 
            
              </motion.div>
    </div>
  )
}

export default SectionTitle