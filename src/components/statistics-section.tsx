import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState, useMemo } from 'react'
import data from '@/data/data.json'
import { Line } from 'rc-progress'

export default function StatisticsSection() {
  const getCover = data.home?.[6]?.statisticBreadge?.[0].cover;
  const getTitle = data.home?.[6]?.statisticBreadge?.[0].title;
  const getSubTitle = data.home?.[6]?.statisticBreadge?.[0].subtitle;
  const getLeftTitle = data.home?.[6]?.statisticBreadge?.[0].leftTitle;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = useMemo(() => [
    { label: "Strategic marketing", value: 80 },
    { label: "eCommerce development", value: 90 },
    { label: "Strategic marketing", value: 75 },
    { label: "Financial guidance", value: 90 },
  ], []);

  // Animation des barres
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, idx) => {
        let start = 0;
        const step = () => {
          start += 1;
          setAnimatedValues(prev => {
            const copy = [...prev];
            copy[idx] = Math.min(start, stat.value);
            return copy;
          });
          if (start < stat.value) {
            setTimeout(step, 20);
          }
        };
        step();
      });
    }
  }, [isInView, stats]);

  return (
    <section ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden flex justify-center items-center lg:items-start py-18 h-[600px] lg:h-full" style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-[#1C2736] opacity-75"></div>
          <div className="relative flex flex-col gap-10 z-10 text-center lg:text-left max-w-3xl px-8 lg:px-20">
            <motion.h2 
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl font-medium text-white ">
              {getTitle}
            </motion.h2>
            <motion.p 
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-white text-lg">
              {getSubTitle}
            </motion.p>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
              <Link href="/contact" className="inline-flex bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg text-white cursor-pointer items-center gap-2 self-center lg:self-start">
                <span>DEMANDEZ UN DEVIS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="bg-[#1C2736] text-white py-18 px-8 lg:px-20">
          <div className="max-w-xl mx-auto flex flex-col gap-8">
            <motion.h2 
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl text-center lg:text-left font-medium text-white">
              {getLeftTitle}
            </motion.h2>

            <div className="space-y-8 text-base ">
              {stats.map((stat, idx) => (
                <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: idx * 0.5 
                }}
                className="space-y-3" key={idx}>
                  <div className="flex justify-between items-center text-lg">
                    <span className=" text-light-secondary">{stat.label}</span>
                    <span className=" text-light-secondary">{Math.round(animatedValues[idx])}%</span>
                  </div>
                  <Line
                    percent={animatedValues[idx]}
                    strokeWidth={3}
                    strokeColor="#E10919"
                    trailWidth={2}
                    trailColor="#e5e7eb"
                    className="rounded-xs"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

