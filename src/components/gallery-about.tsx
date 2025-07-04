import { motion, useInView, AnimatePresence, PanInfo, useMotionValue } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import Link from 'next/link'
import SectionTitle from "./ui/sectionTitle"
import data from '@/data/data.json'

export default function GalleryAbout() {
  const getTitle = data.about?.[7]?.title || "Notre Galerie";
  const getSubTitle = data.about?.[7]?.subTitle || "Découvrez nos réalisations, notre équipe passionnée et les moments forts qui font vibrer notre agence au quotidien.";
  const images = data.about?.[7]?.images;
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    if (selectedImage !== null && images) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && images) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (selectedImage !== null && images) {
      const threshold = 50;
      if (info.offset.x > threshold) {
        // Swipe right - go to previous image
        setSelectedImage((selectedImage - 1 + images.length) % images.length);
        resetZoom();
      } else if (info.offset.x < -threshold) {
        // Swipe left - go to next image
        setSelectedImage((selectedImage + 1) % images.length);
        resetZoom();
      }
    }
  };

  const handleWheelZoom = (event: React.WheelEvent<HTMLDivElement>) => {
    const delta = event.deltaY;
    const newScale = Math.min(Math.max(scale - delta * 0.001, 1), 3);
    setScale(newScale);
  };

  const handleTouchZoom = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      
      if (event.type === 'touchstart') {
        event.currentTarget.setAttribute('data-initial-distance', distance.toString());
      } else if (event.type === 'touchmove') {
        const initialDistance = parseFloat(event.currentTarget.getAttribute('data-initial-distance') || '0');
        const scaleChange = distance / initialDistance;
        const newScale = Math.min(Math.max(scale * scaleChange, 1), 3);
        setScale(newScale);
      }
    }
  };

  const resetZoom = () => {
    setScale(1);
    x.set(0);
    y.set(0);
  };

  const handleDoubleClick = () => {
    setScale(scale === 1 ? 2 : 1);
  };

  return (
    <section ref={ref} className="relative w-full min-h-[719px] bg-[#F2F2F2] py-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center gap-[50px]">
          {/* Title Section */}
          <SectionTitle title={getTitle} subTitle={getSubTitle} />

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[19px] w-full max-w-[1401px]">
            {images?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: index * 0.5 }}
                className="relative w-full aspect-square shadow-lg cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
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
              className="flex items-center justify-center gap-[10px] bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-[4px] transition-colors duration-300"
            >
              <span className="text-white text-base ">
                VOIR PLUS
              </span>
              <ArrowRight className="w-6 h-6 text-white" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/37 backdrop-blur-[6.4px]"
            onClick={handleClose}
          >
            <motion.div 
              className="relative w-[90%] md:w-[997px] h-[50vh] md:h-[657px]"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{ x, y }}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ scale }}
                onWheel={handleWheelZoom}
                onTouchStart={handleTouchZoom}
                onTouchMove={handleTouchZoom}
                onDoubleClick={handleDoubleClick}
              >
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain rounded-lg"
                />
              </motion.div>
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="hidden lg:flex absolute right-0 top-0 md:-right-12 w-[46px] h-[46px] bg-[#E10919] hover:bg-[#B00813] rounded-full items-center justify-center transition-colors duration-300"
              >
                <X className="w-[26px] h-[26px] text-white" />
              </button>

              {/* Zoom Controls - Hidden on mobile */}
              <div className="hidden lg:flex absolute bottom-4 right-4 gap-2">
                <button
                  onClick={() => setScale(Math.min(scale + 0.2, 3))}
                  className="w-[46px] h-[46px] bg-[#E10919] hover:bg-[#B00813] rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <ZoomIn className="w-[26px] h-[26px] text-white" />
                </button>
                <button
                  onClick={() => setScale(Math.max(scale - 0.2, 1))}
                  className="w-[46px] h-[46px] bg-[#E10919] hover:bg-[#B00813] rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <ZoomOut className="w-[26px] h-[26px] text-white" />
                </button>
              </div>

              {/* Navigation Buttons - Hidden on mobile */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[1315px] justify-between px-4">
                <button
                  onClick={handlePrevious}
                  className="w-[46px] h-[46px] bg-[#E10919] hover:bg-[#B00813] rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <ChevronLeft className="w-[26px] h-[26px] text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-[46px] h-[46px] bg-[#E10919] hover:bg-[#B00813] rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <ChevronRight className="w-[26px] h-[26px] text-white" />
                </button>
              </div>

              {/* Navigation Dots */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] md:bottom-8 flex gap-[7px]">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-[11px] h-[11px] rounded-full ${
                      index === selectedImage
                        ? "bg-white border-2 border-[#E10919]"
                        : "bg-[#A1A1AA]"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
