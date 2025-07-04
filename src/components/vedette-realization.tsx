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
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
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
          <span className="text-2xl text-center lg:text-left font-medium text-[#E10919]">Développement de Logiciels Saas</span>

          <h2 className="text-2xl md:text-3xl text-left font-medium text-[#1C2736] leading-tight">
            OpSolver, la gestion du pointage numérisée
          </h2>

          <div className=" flex justify-start gap-15 text-lg">
            <div>
              <p className="text-[#3B4E6A]">Client</p>
              <p className="text-[#1C2736]">APCSC</p>
            </div>
            <div>
              <p className="text-[#3B4E6A]">Date</p>
              <p className="text-[#1C2736]">12 Jan. 2025</p>
            </div>
          </div>

          <div className='text-lg'>
              <p className="text-[#3B4E6A]">Technologis</p>
              <p className="text-[#1C2736]">Php, Symphonie, MySql</p>
          </div>

          <p className="text-[#3B4E6A] text-left text-lg ">
          Notre équipe a relevé le défi de créer une platefome innovente qui a transformé la gestion du pointage interne numérisée de l&apos;agence de pilotage, de coordination et de suivi des conventions de collaboration aboutissant à une augmentation de 45% de la productivité.
          </p>

          <Link href="/contact" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-normal text-white cursor-pointer self-center lg:self-start flex items-center gap-2">
            <span>DEMANDEZ UN DEVIS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default VedetteRealization