'use client'

import React from 'react'
import HeroForAll from "@/components/hero-for-all"
import data from '@/data/data.json'
import ServicesSection from "@/components/services-section-for-page"
import WhyChoose from '@/components/why-choose'
import TestimonialsSection from '@/components/testimonials-section'
import DiscussBreadgePassInAction from '@/components/discuss-breadge-pass-in-action'
import PartenersSection from '@/components/parteners-section'

const Services = () => {
  const getCover = data.services?.[0].cover || "/placeholder.svg";
  const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";
  const getTitle = data.services?.[0].title || "Hero Title";
  const getSubTitle = data.services?.[0].subTitle || "Hero Sub-title";
  return (
    <main className="min-h-screen pt-[92px] lg:pt-[124px] ">
        <HeroForAll title={getTitle} subTitle={getSubTitle} cover={getCover} pattern={getPattern} />

        <ServicesSection />
        <WhyChoose/>
        <TestimonialsSection/>
        <DiscussBreadgePassInAction/>
        <PartenersSection/>




    </main>
  )
}

export default Services