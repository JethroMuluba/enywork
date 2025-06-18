import React, { useState } from 'react'

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
            href="https://www.google.com/maps/search/?api=1&query=Ancienne+Galerie+Présidentielle,+6è+niveau,+Local+6B8,+Kinshasa/Gombe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className='bg-[#E10919] rounded-full p-1 w-3 h-3 animate-ping mt-[260px] ml-[70px]' />
          </a>
          
          {showTooltip && (
            <div>
              <div className="absolute bg-white p-3 rounded-lg shadow-lg -top-20 -left-12 w-64 ">
              <p className="text-sm text-gray-800">Ancienne Galerie Présidentielle, 6è niveau, Local 6B8, Kinshasa/Gombe</p>
            </div>
            <div className="absolute -top-6.5 left-17 w-4 h-4 transform rotate-45 bg-white"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default MapsEnywork