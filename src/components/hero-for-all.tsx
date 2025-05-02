import React from 'react'

interface HeroProps {
    title : string;
    subTitle : string;
    cover : string;
    pattern : string;
}

const HeroForAll = ({title, subTitle, cover, pattern} : HeroProps) => {

  return (
    <section className="relative w-full h-[576px] bg-gradient-to-r from-[#320001] to-[#BD2222] overflow-hidden " style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${pattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-center">
                <h1 className="text-4xl md:text-6xl font-medium text-white">
                    {title}
                </h1>
                <p className="text-xl text-white">
                    {subTitle}
                </p>
            </div>
        </div>
</section>
  )
}

export default HeroForAll