"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"
import { motion, useInView } from 'framer-motion'
import Link from "next/link"
import { useRef } from 'react'


export default function DiscussBreadge() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section ref={ref} className="bg-gradient-to-r from-[#320001] to-[#BD2222]  h-auto lg:h-[317px] flex flex-col justify-center items-center gap-4 py-12 px-4 lg:px-20 3xl:px-45">
        <motion.h2 
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl lg:text-4xl text-center font-medium text-white">
            Vous avez un projet digital ? Discutons-en !
        </motion.h2>
        <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
        className =" text-center text-xl text-white" >
            Nos experts sont là pour vous accompagner dans le réalisation de vos projets innovants.
        </motion.p>

        <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
          >
          <Link href="/team" className="bg-white hover:bg-[#F2F2F2] px-8 py-4 rounded-lg text-[#E10919] cursor-pointer flex items-center gap-2">
            <span>DEMANDEZ UN DEVIS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          </motion.div>

    </section>
  )
}

