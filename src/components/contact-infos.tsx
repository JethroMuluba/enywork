import { MapPin, Phone, Mail, Instagram , Twitter , Dribbble, Linkedin , CalendarClock    } from 'lucide-react'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const ContactInfos = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="py-16 bg-[#F2F2F2] px-8 lg:px-20">
        <div className="container-custom">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
              transition={{ 
                    type: "spring",
                    stiffness: 960,
                    damping: 80,
                    duration: 1, 
                    ease: [0, 0.71, 0.2, 1.01],
                    delay:0.4 
                }}
              className="group bg-white hover:bg-[#E10919] rounded-lg shadow-lg p-8 transition-all duration-600 hover:scale-110">
                <div className="mb-4 text-[#E10919] group-hover:text-white">
                  <MapPin className="w-11 h-11 text-primary" />
                </div>
                <h3 className="text-2xl font-medium text-[#1C2736] mb-3 group-hover:text-white">
                  Notre Adresse
                </h3>
                <p className="text-[#3B4E6A] text-lg group-hover:text-white">
                  Ancienne Galerie Présidentielle, 6è niveau, Local 6B8, Kinshasa/Gombe
                </p>
              </motion.div>

              <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
              transition={{ 
                    type: "spring",
                    stiffness: 960,
                    damping: 80,
                    duration: 1, 
                    ease: [0, 0.71, 0.2, 1.01],
                    delay:0.8 
                }}
              className="group bg-white hover:bg-[#E10919] rounded-lg shadow-lg p-8 transition-all duration-600 hover:scale-110">
                <div className="mb-4 text-[#E10919] group-hover:text-white">
                  <Phone  className="w-11 h-11 text-primary" />
                </div>
                <h3 className="text-2xl font-medium text-[#1C2736] mb-3 group-hover:text-white">
                  Téléphone
                </h3>

                <div className='flex flex-col'>
                  <p className="text-[#3B4E6A] text-lg group-hover:text-white">
                    Administration/Bureau : +243 850 301 852
                  </p>
                  <p className="text-[#3B4E6A] text-lg group-hover:text-white">
                    Commercial : +243 827 964 420
                  </p>
                </div>

              </motion.div>

              <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
              transition={{ 
                    type: "spring",
                    stiffness: 960,
                    damping: 80,
                    duration: 1, 
                    ease: [0, 0.71, 0.2, 1.01],
                    delay:1.2 
                }}
              className="group bg-white hover:bg-[#E10919] rounded-lg shadow-lg p-8 transition-all duration-600 hover:scale-110">
                <div className="mb-4 text-[#E10919] group-hover:text-white">
                  <Mail  className="w-11 h-11 text-primary" />
                </div>
                <h3 className="text-2xl font-medium text-[#1C2736] mb-3 group-hover:text-white">
                  Email & Social Media
                </h3>

                <div className='flex flex-col gap-4'>
                  <a href='#' className="text-[#3B4E6A] text-lg group-hover:text-white">
                    contac@enywork.com
                  </a>

                  <div className='flex gap-4 text-[#3B4E6A] group-hover:text-white '>
                    <a href="#">
                      <Instagram/>
                    </a>

                    <a href="#">
                      <Twitter />
                    </a>

                    <a href="#">
                      <Dribbble />
                    </a>

                    <a href="#">
                      <Linkedin />
                    </a>

                  </div>
                </div>

              </motion.div>

              <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
              transition={{ 
                    type: "spring",
                    stiffness: 960,
                    damping: 80,
                    duration: 1, 
                    ease: [0, 0.71, 0.2, 1.01],
                    delay:1.4 
                }}
              className="group bg-white hover:bg-[#E10919] rounded-lg shadow-lg p-8 transition-all duration-600 hover:scale-110">
                <div className="mb-4 text-[#E10919] group-hover:text-white">
                  <CalendarClock  className="w-11 h-11 text-primary" />
                </div>
                <h3 className="text-2xl font-medium text-[#1C2736] mb-3 group-hover:text-white">
                  Horaire du travail
                </h3>
                <div className='flex flex-col'>
                  <p className="text-[#3B4E6A] text-lg group-hover:text-white">
                    Du Lundi au Vendredi
                  </p>
                  <p className="text-[#3B4E6A] text-lg group-hover:text-white">
                    De 08h30 à 17h00
                  </p>
                </div>
              </motion.div>
          </div>

          
        </div>
      </section>
)
}

export default ContactInfos