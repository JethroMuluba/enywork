'use client'

import HeroForAll from '@/components/hero-for-all'
import React from 'react'
import data from '@/data/data.json'
import SearchBar from '@/components/ui/search-bar'
import BlogSection from '@/components/blog-section-for-page'
import BlogVedette from '@/components/vedette-blog'
import NewsletterSection from "@/components/news-letters"
import WhyChoose from "@/components/why-choose"
import TeamSection from "@/components/team-section"
import DiscussBreadge from '@/components/discuss-breadge'



const Blogs = () => {
  const getCover = data.about?.[0]?.hero?.[0].cover || "/placeholder.svg";
  const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";
  const getTitle = data.blogs?.[0]?.hero?.[0].title || "Hero Title";
  const getSubTitle = data.blogs?.[0]?.hero?.[0].subTitle || "Hero Sub-title";
  return (
    <main className="min-h-screen pt-[92px] lg:pt-[124px]  ">
        <HeroForAll title={getTitle} subTitle={getSubTitle} cover={getCover} pattern={getPattern} />
        <SearchBar/>
        <BlogSection/>
        <BlogVedette/>
        <NewsletterSection/>
        <WhyChoose/>
        <DiscussBreadge/>
        <TeamSection />

    </main>
  )
}

export default Blogs