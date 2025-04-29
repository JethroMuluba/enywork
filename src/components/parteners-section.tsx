import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const logos = [
  '/logo1.png',
  '/logo2.png',
  '/logo3.png',
  '/logo4.png',
  '/logo5.png',
  // Ajoute ici les chemins de tes logos (dans public ou en URL)
]

const PartenersSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    return (
      <div ref={ref} className='py-20 px-4 md:px-8 lg:px-25'>
          <motion.h2 
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className=" text-4xl lg:text-4xl text-center font-semibold text-[#1C2736] mb-12"> 
              Ils nous font confiance
          </motion.h2>
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {logos.map((logo, idx) => (
              <div key={idx} className="mx-8 flex items-center">
                <img
                  src={logo}
                  alt={`Partenaire ${idx + 1}`}
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </Marquee>
      </div>
    )
}

export default PartenersSection;