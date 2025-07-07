import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const logos = [
  '/esmicom logo white.png',
  '/images.jpeg',
  '/INA LOGO.png',
  '/logo hEC.png',
  '/logo inbtp.png',
  '/logo-white.webp',
  '/UNIKIK.jpg',
  '/Logo Unilu.png',
  '/INA LOGO.png',
  '/Logo 1.png',
  '/Logo 10.png',
  '/Logo 2.png',
  '/OCC Logo.png',
  '/logo-APCSC-HD-Expl-1.png'
]

const OurClients = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    return (
      <div ref={ref} className='py-20 px-8 lg:px-20'>
          <motion.h2 
                  initial={{ x: 100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className=" text-3xl lg:text-4xl text-center font-medium text-[#E10919] mb-12"> 
              Nos clients de confiance
          </motion.h2>
          <Marquee gradient={true} gradientWidth={120} speed={40} pauseOnHover={true} direction='right'>
            {logos?.map((logo, idx) => (
              <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              key={idx} className="mx-8 flex items-center">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Partenaire ${idx + 1}`}
                  width={120}
                  height={48}
                  className="h-16 w-auto object-contain transition duration-300"
                />
              </motion.div>
            ))}
          </Marquee>
      </div>
    )
}

export default OurClients;