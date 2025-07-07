import { Cpu, Headset , MapPin, ShieldCheck  } from 'lucide-react'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'



const benefits = [
    {
      icon: <ShieldCheck  className="w-11 h-11 text-primary" />,
      title: "Sécurité garantie",
      description: "Protection maximale de vos données sensibles",
    },
    {
      icon: <MapPin className="w-11 h-11 text-primary" />,
      title: "100% local",
      description: "Hébergement et support basés à Kinshasa",
    },
    {
      icon: <Headset  className="w-11 h-11 text-primary" />,
      title: "Support réactif",
      description: "Assistance technique disponible 24/7",
    },
    {
      icon: <Cpu className="w-11 h-11 text-primary" />,
      title: "Infrastructure performante",
      description: "Équipement dernière génération",
    },
  ]

const WhyChoose = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="py-16 bg-[#F2F2F2] px-8 lg:px-20">
        <div className="container-custom">
          <motion.h2 
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl lg:text-4xl text-center font-medium text-[#E10919] mb-16">Pourquoi nous choisir ?
        </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
              transition={{ 
                    type: "spring",
                    stiffness: 960,
                    damping: 80,
                    duration: 1, 
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: index * 0.3 
                }}
              key={index} className="group bg-white hover:bg-[#E10919] rounded-lg shadow-lg p-8 transition-all duration-600 hover:scale-110">
                <div className="mb-4 text-[#E10919] group-hover:text-white">{benefit.icon}</div>
                <h3 className="text-2xl font-medium text-[#1C2736] mb-3 group-hover:text-white">{benefit.title}</h3>
                <p className="text-[#3B4E6A] text-lg group-hover:text-white">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
)
}

export default WhyChoose