'use client'

import React from 'react'
import HeroForAll from "@/components/hero-for-all"
import data from '@/data/data.json'

const Services = () => {
  const getCover = data.about?.[0]?.hero?.[0].cover || "/placeholder.svg";
  const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";
  const getTitle = data.services?.[0].title || "Hero Title";
  const getSubTitle = data.services?.[0].subTitle || "Hero Sub-title";
  return (
    <main className="min-h-screen font-[poppins] pt-[92px] lg:pt-[124px] ">
        <HeroForAll title={getTitle} subTitle={getSubTitle} cover={getCover} pattern={getPattern} />
    </main>
  )
}

export default Services