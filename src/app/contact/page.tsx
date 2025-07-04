'use client'

import React from 'react'
import HeroForAll from '@/components/hero-for-all'
import data from '@/data/data.json'
import ContactForm from '@/components/contactForm'
import ContactInfos from '@/components/contact-infos'
import MapsEnywork from '@/components/maps-Enywork'
import NewsletterSection from '@/components/news-letters'
import WhyChoose from '@/components/why-choose'
import DiscussBreadge from '@/components/discuss-breadge'
import TeamSection from '@/components/team-section'

const Contact = () => {
  const getCover = data.about?.[0]?.hero?.[0].cover || "/placeholder.svg";
  const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";
  const getTitle = data.contact?.[0].title || "Hero Title";
  const getSubTitle = data.contact?.[0].subTitle || "Hero Sub-title";
  return (
    <main className="min-h-screen pt-[92px] lg:pt-[124px]">
        <HeroForAll title={getTitle} subTitle={getSubTitle} cover={getCover} pattern={getPattern} />
        <ContactForm/>
        <ContactInfos/>
        <MapsEnywork/>
        <NewsletterSection/>
        <WhyChoose/>
        <DiscussBreadge/>
        <TeamSection/>
       
    </main>
  )
}

export default Contact