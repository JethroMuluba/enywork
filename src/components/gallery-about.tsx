import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function GalleryAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const images = [
    {
      src: "/placeholder.svg?height=767&width=748",
      alt: "Unikin"
    },
    {
      src: "/placeholder.svg?height=767&width=748",
      alt: "Interface Design"
    },
    {
      src: "/placeholder.svg?height=767&width=748",
      alt: "Building Admin"
    },
    {
      src: "/placeholder.svg?height=767&width=748",
      alt: "Salle de réunion"
    }
  ]

  return (
    <section ref={ref} className="relative w-full min-h-[719px] bg-[#F2F2F2] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-[50px]">
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-[13px] max-w-[821px]"
          >
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-medium leading-[52px] text-[#1C2736] text-center">
              Notre Galerie
            </h2>
            <p className="text-base md:text-lg lg:text-[20px] leading-[28px] text-[#3B4E6A] text-center">
              Découvrez nos réalisations, notre équipe passionnée et les moments forts qui font vibrer notre agence au quotidien.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[19px] w-full max-w-[1401px]">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full aspect-square shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-[9px] transition-all duration-600 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="/gallery"
              className="flex items-center justify-center gap-[10px] bg-[#E10919] hover:bg-[#B00813] px-[25px] py-[10px] rounded-[4px] transition-colors duration-300"
            >
              <span className="text-white text-base ">
                VOIR PLUS
              </span>
              <ArrowRight className="w-6 h-6 text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
