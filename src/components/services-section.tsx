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
    // const serviceTems = data.home?.[4]?.ourServicesSection?.[0]?.services;
    const getTitle = data.home?.[4]?.ourServicesSection?.[0]?.title || 'Nos services';
    const getSubTitle = data.home?.[4]?.ourServicesSection?.[0]?.subtitle || "Vous offrir un service de qualité est la raison d'être de notre start-up.";
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref}  className="bg-[#F2F2F2] font-[poppins] py-20 px-4 md:px-8 lg:px-25">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 md:gap-16">
        <SectionTitle title={getTitle} subTitle={getSubTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ 
                    duration: 1.5, 
                    ease: "easeOut",
                    delay: index * 0.8 
                }}
              key={service.id} className="group bg-white hover:bg-[#E10919] rounded-lg shadow-lg p-8 transition-all duration-300 hover:scale-110">
                <div className="mb-4 text-[#E10919] group-hover:text-white">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1C2736] mb-3 group-hover:text-white">{service.title}</h3>
                <p className="text-[#3B4E6A] group-hover:text-white">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 8, ease: "easeOut" }}
          >
          <Link href="/contact" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-medium text-white cursor-pointer flex items-center gap-2">
            <span>DEMANDEZ UN DEVIS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

