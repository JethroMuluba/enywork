'use client'

import React from 'react'
import HeroForAll from "@/components/hero-for-all"
import data from '@/data/data.json'
import SectionTitle from '@/components/ui/sectionTitle'
import TeamBox from '@/components/team-box'
import ApplyOffert from '@/components/apply-offert'
import PartenersSection from '@/components/parteners-section'
const Team = () => {
  const getCover = data.about?.[0]?.hero?.[0].cover || "/placeholder.svg";
  const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";
  const getTitle = data.team?.[0].hero?.[0].title || "Hero Title";
  const getSubTitle = data.team?.[0].hero?.[0].subTitle || "Hero Sub-title";
  const getTitle2 = data.team?.[1].intro?.[0].title || "Intro Title";
  const getSubTitle2 = data.team?.[1].intro?.[0].subTitle || "Intro Sub-title";
  return (
    <main className="min-h-screen pt-[92px] lg:pt-[124px]  ">
        <HeroForAll title={getTitle} subTitle={getSubTitle} cover={getCover} pattern={getPattern} />
        <section className='bg-[#F2F2F2] h-auto lg:h-[274px] flex justify-center items-center py-16 px-4 md:px-8 lg:px-65'>
          <SectionTitle title={getTitle2} subTitle={getSubTitle2} />
        </section>

        <TeamBox />
        <ApplyOffert />
        <PartenersSection />

        
    </main>
  )
}

export default Team