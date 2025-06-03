import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import data from "@/data/data.json"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionTitle from "./ui/sectionTitle"


export default function RealizationsSection() {
    const getTitle= data.home?.[3]?.ourRealisationSection?.[0]?.title || "Nos Réalisations";
    const getSubTitle= data.home?.[3]?.ourRealisationSection?.[0]?.subtitle || "Ce que nous avons accompli dans le passé peut vous inspirer.";
    const realizationItems=data.home?.[3]?.ourRealisationSection?.[0]?.realizationItems;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="bg-white py-20 px-8 lg:px-20">
        <div className="container-custom">
            <div className="flex flex-col  gap-12 ">
                <SectionTitle title={getTitle} subTitle={getSubTitle} />      

                <div className=" w-full lg:w-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {realizationItems?.map((item, index) => (
                        <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ 
                            duration: 1.5, 
                            ease: "easeOut",
                            delay: index * 0.8 
                        }}
                        key={item.id} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative h-80 w-full overflow-hidden">
                                    <Image 
                                    src={item.image || "/placeholder.svg"} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover transition-transform duration-600 hover:scale-110"
                                    onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "/placeholder.svg";
                                            }}
                                        />
                                </div>

                <div className="p-6">
                  <p className="text-primary text-xl text-[#E10919] mb-2">{item.category}</p>
                  <h3 className="text-2xl font-medium text-secondary text-[#1C2736] mb-4">{item.title}</h3>
                  <Link
                    href={item.link}
                    target="blank"
                    className="flex items-center text-lg text-[#3B4E6A] hover:text-[#1C2736] transition-colors cursor-pointer"
                  >
                    <span>Voir le projet</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                 className="flex justify-center px-8"
          >
          <Link href="/realizations" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg text-white cursor-pointer flex items-center gap-2">
            <span>VOIR PLUS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          </motion.div>


        </div>
      </div>
    </section>
  )
}

