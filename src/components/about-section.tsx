import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="bg-light-secondary py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[510px] h-[480px]">
              <Image
                src="/placeholder.svg?height=480&width=510"
                alt="About Enywork"
                width={510}
                height={480}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h2 className="section-title">A Propos de nous</h2>
              <p className="section-subtitle">Mieux nous connaître, c&apos;est vous donner de l&apos;assurance.</p>
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-secondary-light">
                ENYWORK, start-up congolais, spécialisée dans la conception et le développement de logiciels sur mesure,
                implantée en RDC, développe les activités autour des différentes prestations informatiques dédiées aux
                entreprises et autres (organisation, établissement supérieur et universitaire et particulier).
              </p>

              <p className="text-secondary-light">
                Créée depuis le mois de novembre 2017, la start-up ENYWORK vise à connecter les institutions
                universitaires autour d&apos;une base de données commune facilitant le contrôle d&apos;authenticité des documents
                académiques livrées et la traçabilité du parcours de l&apos;étudiant.
              </p>
            </div>

            <Link href="/contact" className="btn-primary self-start">
              <span>CONTACTEZ-NOUS</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

