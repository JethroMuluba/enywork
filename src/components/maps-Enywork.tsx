

import React from 'react'

const MapsEnywork = () => {
  const cover = 'https://res.cloudinary.com/dr8ofciki/image/upload/v1750175403/Enywork/maps-cover-enywork.jpg';
  return (
    <section className="relative w-full h-[576px] bg-gradient-to-r from-[#320001] to-[#BD2222] overflow-hidden flex justify-center items-center " style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className=' bg-[#E10919] rounded-full p-1 w-3 h-3 animate-ping mt-[260px] ml-[70px]  '>

      </div>

    </section>
  )
}

export default MapsEnywork