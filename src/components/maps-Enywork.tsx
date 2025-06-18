import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MapsEnywork = () => {
  const cover = 'https://res.cloudinary.com/dr8ofciki/image/upload/v1750175403/Enywork/maps-cover-enywork.jpg';
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <section className="relative w-full h-[576px] bg-gradient-to-r from-[#320001] to-[#BD2222] overflow-hidden flex justify-center items-center " style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="relative inline-block">
        <div 
          className="relative cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <a 
            href="https://maps.app.goo.gl/XwfHzTXsjnRa9oTx8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className='bg-[#E10919] rounded-full p-1 w-3 h-3 animate-ping mt-[260px] ml-[70px]' />
          </a>
          
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute -top-20 -left-12"
              >
                <motion.div 
                  className="bg-white p-3 rounded-lg shadow-lg w-64"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <p className="text-sm text-gray-800">Ancienne Galerie Présidentielle, 6è niveau, Local 6B8, Kinshasa/Gombe</p>
                </motion.div>
                <motion.div 
                  className="absolute top-14 left-29 w-4 h-4 transform rotate-45 bg-white"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default MapsEnywork