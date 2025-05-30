"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"
import { motion, useInView } from 'framer-motion'
import Link from "next/link"
import { useRef } from 'react'
import data from "@/data/data.json"


export default function ApplyOffert() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const getPattern = data.pattern?.[0].pattern;


  return (
    <section ref={ref} className="bg-gradient-to-r from-[#320001] to-[#BD2222]  h-auto lg:h-[317px] flex flex-col justify-center items-center gap-4 py-12 px-4 lg:px-20 3xl:px-45" style={{ backgroundImage: `url(${getPattern})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
        
        <motion.h2 
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl lg:text-4xl text-center font-medium text-white">
            Vous voulez faire partie de l&apos;aventure?
        </motion.h2>
        <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
        className =" text-center text-xl text-white" >
            Nous recrutons les meilleurs talents pour façonner l’avenir du digital.
        </motion.p>

        <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
          >
          <Link href="/contact" className="bg-white hover:bg-[#F2F2F2] px-8 py-4 rounded-lg text-[#E10919] cursor-pointer flex items-center gap-2">
            <span>POSTULER MAINTENANT</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          </motion.div>

    </section>
  )
}

