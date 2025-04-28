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
    <section ref={ref} className="py-16 md:py-24">
        <div className="container-custom">
            <div className="flex flex-col items-center gap-12 md:gap-16">
                <SectionTitle title={getTitle} subTitle={getSubTitle} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {realizationItems?.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative h-64 w-full">
                                    <Image 
                                    src={item.image || "/placeholder.svg"} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover"
                                    onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "/placeholder.svg";
                                            }}
                                        />
                                </div>

                <div className="p-6">
                  <p className="text-primary text-lg mb-2">{item.category}</p>
                  <h3 className="text-2xl font-medium text-secondary mb-4">{item.title}</h3>
                  <Link
                    href={item.link}
                    target="blank"
                    className="flex items-center text-secondary-light hover:text-primary transition-colors"
                  >
                    <span>Voir le projet</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Link href="/realisations" className="btn-primary">
            <span>VOIR PLUS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

