import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface Partner {
  id: number;
  logo: string;
  alt: string;
}

const partners: Partner[] = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/dr8ofciki/image/upload/v1741366220/Enywork/Logo-Enywork.png",
    alt: "Partner 1"
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/dr8ofciki/image/upload/v1741366220/Enywork/Logo-Enywork.png",
    alt: "Partner 2"
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/dr8ofciki/image/upload/v1741366220/Enywork/Logo-Enywork.png",
    alt: "Partner 3"
  },
  {
    id: 4,
    logo: "https://res.cloudinary.com/dr8ofciki/image/upload/v1741366220/Enywork/Logo-Enywork.png",
    alt: "Partner 4"
  }
]

const PartenersSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Partenaires</h2>
        <div ref={sliderRef} className="keen-slider">
          {partners.map((partner) => (
            <div key={partner.id} className="keen-slider__slide">
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartenersSection;