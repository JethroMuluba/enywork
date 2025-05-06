import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TitleProps {
    title: string;
    subTitle: string;
}

const SectionTitle = ({title, subTitle} : TitleProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="flex flex-col gap-5">
        <motion.h2 
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className=" text-4xl lg:text-4xl text-center font-medium text-[#1C2736] "> 
            {title} 
        </motion.h2>
    <motion.p 
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
    className="text-center text-xl text-[#3B4E6A] "> 
    {subTitle} 
    </motion.p>
    </div>
  )
}

export default SectionTitle