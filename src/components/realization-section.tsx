import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const realizationItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=257&width=387",
    category: "Développement de Logiciels Saas",
    title: "OptSolution",
    link: "/realisations/optsolution",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=257&width=387",
    category: "Développement de Logiciels Saas",
    title: "EnyManager",
    link: "/realisations/enymanager",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=257&width=387",
    category: "Développement de Logiciels Saas",
    title: "EnyPay",
    link: "/realisations/enypay",
  },
]

export default function RealizationsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="text-center max-w-xl">
            <h2 className="section-title mb-3">Nos Réalisations</h2>
            <p className="section-subtitle">Ce que nous avons accompli dans le passé peut vous inspirer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realizationItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <p className="text-primary text-lg mb-2">{item.category}</p>
                  <h3 className="text-2xl font-medium text-secondary mb-4">{item.title}</h3>
                  <Link
                    href={item.link}
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

