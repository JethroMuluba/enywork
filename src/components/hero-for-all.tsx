import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface HeroProps {
    title : string;
    subTitle : string;
    cover : string;
    pattern : string;
}

const HeroForAll = ({title, subTitle, cover, pattern} : HeroProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        ref = {ref} className="relative w-full h-[576px] bg-gradient-to-r from-[#320001] to-[#BD2222] overflow-hidden " style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-80 " style={{ backgroundImage: `url(${pattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container-custom relative z-10 h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-center px-8 lg:px-95">
                <motion.h1 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
                    {title}
                </motion.h1>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-xl lg:text-2xl text-white">
                    {subTitle}
                </motion.p>
            </div>
        </div>
</motion.section>
  )
}

export default HeroForAll