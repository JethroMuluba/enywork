'use client'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {ArrowRight} from "lucide-react"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const VedetteRealization = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="bg-[#F2F2F2] py-12 md:py-24 px-8 lg:px-20">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative h-100 lg:h-[650px] w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://res.cloudinary.com/dr8ofciki/image/upload/v1747322633/Enywork/APCSC-OpSolver-Cover.png"
            alt="APCSC-OpSolver-Cover"
            fill
            className="object-cover transition-all duration-600 hover:scale-110"
          />
        </motion.div>

        <div className="flex flex-col gap-10">
          <motion.span 
                          initial={{ x: 100, opacity: 0 }}
                          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl text-center lg:text-left font-medium text-[#E10919]">Développement de Logiciels Saas</motion.span>

          <motion.h2 
                          initial={{ x: 100, opacity: 0 }}
                          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-left font-medium text-[#1C2736] leading-tight">
            OpSolver, la gestion du pointage numérisée
          </motion.h2>

          <div className=" flex justify-start gap-15 text-lg">
            <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
                          transition={{ 
                                type: "spring",
                                stiffness: 960,
                                damping: 80,
                                duration: 1, 
                                ease: [0, 0.71, 0.2, 1.01],
                                delay: 0.4
                            }}
            >
              <p className="text-[#3B4E6A]">Client</p>
              <p className="text-[#1C2736]">APCSC</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
              transition={{ 
                    type: "spring",
                    stiffness: 960,
                    damping: 80,
                    duration: 1, 
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: 0.6
                }}
            >
              <p className="text-[#3B4E6A]">Date</p>
              <p className="text-[#1C2736]">12 Jan. 2025</p>
            </motion.div>
          </div>

          <motion.div 
                          initial={{ x: 100, opacity: 0 }}
                          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                          transition={{ duration: 2, ease: "easeOut" }}
          className='text-lg'>
              <p className="text-[#3B4E6A]">Technologis</p>
              <p className="text-[#1C2736]">Php, Symphonie, MySql</p>
          </motion.div>

          <motion.p 
                          initial={{ x: 100, opacity: 0 }}
                          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                          transition={{ duration: 3, ease: "easeOut" }}
          className="text-[#3B4E6A] text-left text-lg ">
          Notre équipe a relevé le défi de créer une platefome innovente qui a transformé la gestion du pointage interne numérisée de l&apos;agence de pilotage, de coordination et de suivi des conventions de collaboration aboutissant à une augmentation de 45% de la productivité.
          </motion.p>

          <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                                    transition={{ duration: 4, ease: "easeOut" }}
          className='w-64'>
          <Link href="/contact" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-normal text-white cursor-pointer self-center lg:self-start flex items-center gap-2">
            <span>DEMANDEZ UN DEVIS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          </motion.div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default VedetteRealization