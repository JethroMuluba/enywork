import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import data from '@/data/data.json'

export default function StatisticsSection() {
  const getCover = data.home?.[6]?.statisticBreadge?.[0].cover;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="font-[poppins] py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden font-[poppins] flex justify-center items-center h-[600px] lg:h-full" style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-[#1C2736] opacity-75"></div>
          <div className="relative flex flex-col gap-10 z-10 text-center lg:text-left max-w-3xl px-4 md:px-8 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-medium text-white ">
              Des solutions d'affaires élaborées avec un objectif et une stratégie
            </h2>
            <p className="text-lg md:text-xl text-white">
              Nous développons des solutions numériques adaptées à vos besoins spécifiques pour optimiser vos processus
              d'affaires.
            </p>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Link href="/contact" className="inline-flex bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-medium text-white cursor-pointer items-center gap-2 self-center lg:self-start">
                <span>DEMANDEZ UN DEVIS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="bg-[#1C2736] py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-xl mx-auto lg:ml-0 lg:mr-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              La bonne solution pour votre entreprise
            </h2>

            <div className="space-y-8  ">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl text-light-secondary">Strategic marketing</span>
                  <span className="text-xl text-light-secondary">80%</span>
                </div>
                <div className="w-full h-6 bg-light-tertiary rounded-lg overflow-hidden">
                  <div className="h-full bg-primary rounded-lg" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl text-light-secondary">eCommerce development</span>
                  <span className="text-xl text-light-secondary">90%</span>
                </div>
                <div className="w-full h-6 bg-light-tertiary rounded-lg overflow-hidden">
                  <div className="h-full bg-primary rounded-lg" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl text-light-secondary">Strategic marketing</span>
                  <span className="text-xl text-light-secondary">75%</span>
                </div>
                <div className="w-full h-6 bg-light-tertiary rounded-lg overflow-hidden">
                  <div className="h-full bg-primary rounded-lg" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl text-light-secondary">Financial guidance</span>
                  <span className="text-xl text-light-secondary">90%</span>
                </div>
                <div className="w-full h-6 bg-light-tertiary rounded-lg overflow-hidden">
                  <div className="h-full bg-primary rounded-lg" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

