import { JSX } from 'react'
import { CodeXml, MonitorSmartphone, Database, LineChartIcon as ChartLine, Server, Presentation  } from "lucide-react"
import SectionTitle from './ui/sectionTitle'
import data from '@/data/data.json'

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
    const getSubTitle = data.home?.[4]?.ourServicesSection?.[0]?.subtitle || 'Vous offrir un service de qualité est la raison d’être de notre start-up.';
  return (
    <section className="bg-[#F2F2F2] font-[poppins] py-20 px-4 md:px-8 lg:px-25">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 md:gap-16">
        <SectionTitle title={getTitle} subTitle={getSubTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-8">
                <div className="mb-4 text-[#E10919]">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1C2736] mb-3">{service.title}</h3>
                <p className="text-[#3B4E6A]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

