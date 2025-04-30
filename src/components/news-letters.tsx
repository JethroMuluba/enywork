"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import data from '@/data/data.json'
import Image from "next/image"

export default function NewsletterSection() {
    const [email, setEmail] = useState("")
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const getTitle = data.home?.[10]?.newsletterBreadge?.[0].title;
    const getSubTitle = data.home?.[10]?.newsletterBreadge?.[0].subtitle;
    const getCover = data.home?.[10]?.newsletterBreadge?.[0].cover;
    const getWarning = data.home?.[10]?.newsletterBreadge?.[0].warning;
    const getIcone = data.home?.[10]?.newsletterBreadge?.[0].icone;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log("Subscribing email:", email)
        setEmail("")
        // Show success message or handle errors
    }

  return (
    <section ref={ref} className="relative overflow-hidden font-[poppins] flex justify-between items-center py-12 px-4 md:px-8 lg:px-30" style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1C2736] opacity-75 z-0" aria-hidden="true"></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl text-center lg:text-left font-medium text-white leading-tight">{getTitle} </h2>
          </div>

          <div className="flex flex-row items-center gap-4">
                <div className="relative w-30 h-30">
                    <Image
                        src={getIcone || "/placeholder.svg"}
                        alt="QuillInboxNewsletter"
                        fill
                        className="object-contain transition-all animate-pulse duration-600 hover:scale-110"
                        sizes="8rem"
                    />
                </div>
            <p className="text-white text-left ">
                {getSubTitle}
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Saisissez votre Email"
                  className="flex-1 bg-white px-4 py-4 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <p className="text-xs text-white text-center lg:text-left">
                    {getWarning}
                </p>
                </div>
                <button type="submit" className="bg-[#E10919] hover:bg-[#B00813]  h-14 text-white px-8 py-4 rounded-lg font-medium text-whitcursor-pointer flex justify-center items-center gap-2">
                    <span>S'ABONNER</span>
                    <ArrowRight className="w-5 h-5" />
                </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

