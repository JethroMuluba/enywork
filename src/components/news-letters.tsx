"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import data from '@/data/data.json'

export default function NewsletterSection() {
    const [email, setEmail] = useState("")
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const getTitle = data.home?.[10]?.newsletterBreadge?.[0].title;
    const getSubTitle = data.home?.[10]?.newsletterBreadge?.[0].subtitle;
    const getCover = data.home?.[10]?.newsletterBreadge?.[0].cover;
    const getWarning = data.home?.[10]?.newsletterBreadge?.[0].warning;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log("Subscribing email:", email)
        setEmail("")
        // Show success message or handle errors
    }

  return (
    <section ref={ref} className="bg-fixed overflow-hidden font-[poppins] flex justify-between items-center px-4 md:px-8 lg:px-25 relative" style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight">{getTitle} </h2>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="hidden md:block w-16 h-16 text-primary" />
            <p className="text-white">
                {getSubTitle}
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Saisissez votre Email"
                  className="flex-1 px-4 py-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  <span>S'ABONNER</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-white">
                {getWarning}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

