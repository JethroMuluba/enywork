'use client'

import React from 'react'
import HeroForAll from "@/components/hero-for-all"
import data from '@/data/data.json'
import RealizationsSectionForPage from '@/components/realization-section-for-page'
import VedetteRealization from '@/components/vedette-realization'

const Realizations = () => {
  const getCover = data.about?.[0]?.hero?.[0].cover || "/placeholder.svg";
  const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";
  const getTitle = data.realizations?.[0]?.hero?.[0].title || "Hero Title";
  const getSubTitle = data.realizations?.[0]?.hero?.[0].subTitle || "Hero Sub-title";
  return (
    <main className="min-h-screen pt-[92px] lg:pt-[124px] ">
      <HeroForAll title={getTitle} subTitle={getSubTitle} cover={getCover} pattern={getPattern} />
      <RealizationsSectionForPage/>
      <VedetteRealization/>
      
    </main>
  )
}

export default Realizations