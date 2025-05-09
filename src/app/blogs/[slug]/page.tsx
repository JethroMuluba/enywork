'use client'

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import data from '@/data/data.json';
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"


const SingelBlog = () => {
  const getCover = data.about?.[0]?.hero?.[0].cover || "/placeholder.svg";
  const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <main className="min-h-screen pt-[92px] lg:pt-[124px] ">
          <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        ref = {ref} className="relative w-full h-[576px] bg-gradient-to-r from-[#320001] to-[#BD2222] overflow-hidden " style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-80 " style={{ backgroundImage: `url(${getPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container-custom relative z-10 h-full flex items-center ">
            <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-20">

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className=" hidden lg:block flex justify-center lg:justify-start"
            >
              <Link href="/blogs" className=" py-4 rounded-lg text-white cursor-pointer flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                <span>Retour aux blogs</span>
              </Link>
            </motion.div>
                <motion.h2 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl text-center lg:text-left font-medium text-white">
                    Comment optimiser votre stratégie digitale en 2025
                </motion.h2>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-xl text-center lg:text-left text-white">
                    Un guide complet pour améliorer votre présence en ligne et maximiser vos résultats
                </motion.p>
            </div>
        </div>
</motion.section>
        SingelBlog Page is on bulding
    </main>
  )
}

export default SingelBlog