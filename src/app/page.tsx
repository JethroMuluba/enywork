"use client"

// import Header from "@/components/header"
// import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import HeroSection from "@/components/hero-section"
import OptSolutionSection from "@/components/optsolution-section"
import RealizationsSection from "@/components/realization-section"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import StatisticsSection from "@/components/statistics-section"
import PartnersSection from "@/components/parteners-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import NewsletterSection from "@/components/news-letters"
import OurClients from "@/components/our-clients"
// import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen pt-[92px] lg:pt-[124px] ">
      {/* <Header /> */}
      <HeroSection />
      <AboutSection />
      <OptSolutionSection />
      <RealizationsSection />
      <ServicesSection />
      <TeamSection />
      <StatisticsSection />
      <PartnersSection />
      <OurClients/>
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
      {/* <Footer /> */}
    </main>
  )
}
