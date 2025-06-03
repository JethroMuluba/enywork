import { JSX } from 'react'
import Link from "next/link"
import { CodeXml, MonitorSmartphone, Database, LineChartIcon as ChartLine, Server, Presentation, ArrowRight } from "lucide-react"
import SectionTitle from './ui/sectionTitle'
import data from '@/data/data.json'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const serviceItems = [
  {
    id: 1,
    icon: <CodeXml className="w-9 h-9 text-primary" />,
    title: "Développement de Logiciels Saas",
    description: "Solution sur mesure personnalisées et adaptées à vos besoins spécifiques.",
  },
  {
    id: 2,
    icon: <MonitorSmartphone className="w-9 h-9 text-primary" />,
    title: "Développement des Appli. Web et Mobile",
    description: "Créez des applications performantes et intuitives pour le web et le mobile",
  },
  {
    id: 3,
    icon: <Server className="w-9 h-9 text-primary" />,
    title: "Hébergement VPS Sécurisé",
    description: "Infrastructures locale performante à Kinshasa.",
  },
  {
    id: 4,
    icon: <Database className="w-9 h-9 text-primary" />,
    title: "Gestion des Données",
    description: "Solutions de stockage et analyse de données.",
  },
  {
    id: 5,
    icon: <ChartLine className="w-9 h-9 text-primary" />,
    title: "Audit et Consulting",
    description: "Optimisez votre stratégie digitale avec une expertise sur mesure.",
  },
  {
    id: 6,
    icon: <Presentation  className="w-9 h-9 text-primary" />,
    title: "Formation sur les Technologies du Web",
    description: "Accompagnement dans votre transition numérique.",
  },
]

export default function ServicesSection(): JSX.Element {
    const getTitle = data.home?.[4]?.ourServicesSection?.[0]?.title || 'Nos services';
    const getSubTitle = data.home?.[4]?.ourServicesSection?.[0]?.subtitle || "Vous offrir un service de qualité est la raison d'être de notre start-up.";
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref}  className="bg-[#F2F2F2] py-20 px-8 lg:px-20">
      <div className="container-custom">
        <div className="flex flex-col md:items-center gap-12 md:gap-16">
        <SectionTitle title={getTitle} subTitle={getSubTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
              transition={{ 
                    type: "spring",
                    stiffness: 960,
                    damping: 80,
                    duration: 1, 
                    ease: [0, 0.71, 0.2, 1.01],
                    delay: index * 0.3 
                }}

                
              key={service.id} className="group bg-white hover:bg-[#E10919] rounded-lg shadow-lg p-8 transition-all duration-600 hover:scale-110">
                <div className="mb-4 text-[#E10919] group-hover:text-white">{service.icon}</div>
                <h3 className="text-2xl md:text-2xl font-medium text-[#1C2736] mb-3 group-hover:text-white">{service.title}</h3>
                <p className="text-[#3B4E6A] text-lg group-hover:text-white">{service.description}</p>
              </motion.div>

              
            ))}

          </div>

          <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 0 }}
              transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
              }}

              whileHover={{ scale: 1.1 }}
              onHoverStart={() => {}}
              onHoverEnd={() => {}}
              whileFocus={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}

               className="flex justify-center px-8"
          >
          <Link href="/contact" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg text-white cursor-pointer flex items-center gap-2">
            <span>DEMANDEZ UN DEVIS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

