import { CalendarDays, Briefcase, Users, Medal } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useMemo } from 'react'
// import data from "@/data/data.json"

export default function StatisticCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counters, setCounters] = useState([0, 0, 0, 0])
  const targetNumbers = useMemo(() => [9, 12, 19, 15], [])
//   const counterData = data?.about?.[5]?.counter

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      const intervals = targetNumbers.map((target, index) => {
        return setInterval(() => {
          setCounters(prev => {
            const newCounters = [...prev]
            if (newCounters[index] < target) {
              newCounters[index] = Math.min(
                newCounters[index] + Math.ceil(target / steps),
                target
              )
            }
            return newCounters
          })
        }, stepDuration)
      })

      return () => intervals.forEach(interval => clearInterval(interval))
    }
  }, [isInView, targetNumbers])

  const stats = [
    {
      icon: <CalendarDays className="w-[26.25px] h-[30px] text-white transition-transform duration-300 group-hover:rotate-12" />,
      number: counters[0],
      label: "ANNÉES D'EXPÉRIENCES"
    },
    {
      icon: <Briefcase className="w-[30px] h-[30px] text-white transition-transform duration-300 group-hover:rotate-12" />,
      number: counters[1],
      label: "PROJETS RÉALISÉS"
    },
    {
      icon: <Users className="w-[37.5px] h-[30px] text-white transition-transform duration-300 group-hover:rotate-12" />,
      number: counters[2],
      label: "TOTAL CLIENTS"
    },
    {
      icon: <Medal className="w-[30px] h-[30px] text-white transition-transform duration-300 group-hover:rotate-12" />,
      number: counters[3],
      label: "PRIX REMPORTÉ"
    }
  ]

  return (
    <section ref={ref} className="relative w-full min-h-[400px] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-8 lg:gap-[67px]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative w-full lg:w-[214px] h-[201px] group"
            >
              {/* Icon Circle */}
              <motion.div 
                className="absolute w-[64px] h-[64px] left-1/2 -translate-x-1/2 top-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-[#E10919] rounded-full flex items-center justify-center group-hover:bg-[#B00813] transition-colors duration-300">
                  {stat.icon}
                </div>
              </motion.div>

              {/* Number */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[65px] flex items-center gap-[10px]">
                <span className="text-4xl md:text-5xl lg:text-[64px] leading-[91px] text-[#1C2736]">
                  {stat.number}
                </span>
                <span className="text-4xl md:text-5xl lg:text-[64px] leading-[91px] text-[#1C2736]">
                  +
                </span>
              </div>

              {/* Label */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[171px]">
                <p className="text-base md:text-lg lg:text-[18px] leading-[30px] text-[#1C2736] whitespace-nowrap text-center">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
