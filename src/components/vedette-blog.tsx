'use client'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {ArrowRight} from "lucide-react"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const BlogVedette = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-8 lg:px-20">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg?height=696&width=757"
            alt="Hébergement VPS local"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="flex flex-col gap-10">
          <span className="text-2xl text-[#E10919]">Article Vedette</span>

          <h2 className="text-2xl md:text-3xl font-medium text-secondary leading-tight">
            Hébergement VPS local à Kinshasa : Boostez vos performances web
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-[#3B4E6A]">Par</p>
              <p className="text-secondary">Jethro Muluba</p>
            </div>
            <div>
              <p className="text-[#3B4E6A]">Date</p>
              <p className="text-secondary">12 Jan. 2025</p>
            </div>
          </div>

          <p className="text-[#3B4E6A]">
            Enywork est fier de vous annoncer la disponibilité de nos serveurs locaux situés à Kinshasa. Profitez
            d'un hébergement VPS (Serveur Privé Virtuel) rapide, sécurisé et parfaitement adapté à vos besoins
            professionnels...
          </p>

          <Link href="/contact" className="btn-primary self-start">
            <span>DÉCOUVRIR NOS SERVICES</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogVedette