'use client'
import React from 'react'
import {Search, ListFilter ,X } from "lucide-react"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useState } from 'react';

const blogPosts = [
  {
    id: "0",
    title: "Comment optimiser votre stratégie digitale en 2025",
    subtitle: "Un guide complet pour améliorer votre présence en ligne et maximiser vos résultats",
    date: "15 Janvier 2025",
    readTime: "10 min de lecture",
    author: {
      name: "Yusuf Heri",
      role: "CEO Enywork",
      avatar: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745853594/Enywork/yusuf-heri-profile.jpg",
    },
    heroImage: "https://res.cloudinary.com/dr8ofciki/image/upload/v1746010546/Enywork/blog-1.jpg",
    content: [
      {
        type: "paragraph",
        text: "Le monde digital évolue constamment, et il est crucial pour les entreprises de rester à jour avec les dernières tendances et stratégies pour maintenir leur compétitivité. En 2025, plusieurs facteurs clés détermineront le succès de votre présence en ligne et de vos initiatives marketing digitales.",
      },
      {
        type: "heading",
        text: "Première partie",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr8ofciki/image/upload/v1746010546/Enywork/blog-1.jpg",
        alt: "Stratégie digitale illustration",
      },
      {
        type: "paragraph",
        text: "L'intelligence artificielle et l'apprentissage automatique continuent de transformer le paysage du marketing digital. Les entreprises qui adoptent ces technologies peuvent personnaliser leurs communications marketing à un niveau sans précédent, analyser de grandes quantités de données pour obtenir des insights précieux, et automatiser des tâches répétitives pour améliorer l'efficacité.",
      },
      {
        type: "paragraph",
        text: "Les assistants virtuels, les chatbots et les outils de recommandation alimentés par l'IA sont devenus des éléments essentiels de l'expérience client en ligne. Ces technologies permettent aux entreprises d'offrir un service client 24/7, de guider les utilisateurs à travers leur parcours d'achat, et de fournir des recommandations personnalisées basées sur le comportement et les préférences individuelles.",
      },
      {
        type: "heading",
        text: "Deuxième partie",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745497080/Enywork/vps-bg.webp",
        alt: "Analyse de données marketing",
      },
      {
        type: "paragraph",
        text: "La confidentialité des données est devenue une préoccupation majeure pour les consommateurs et les régulateurs. Avec l'élimination progressive des cookies tiers et le renforcement des réglementations sur la protection des données, les entreprises doivent repenser leurs stratégies de collecte et d'utilisation des données.",
      },
      {
        type: "paragraph",
        text: "Les stratégies de marketing basées sur le consentement, les données propriétaires (first-party data) et les identifiants universels sont devenues essentielles. Les entreprises qui établissent des relations de confiance avec leurs clients et qui sont transparentes sur leurs pratiques de collecte de données auront un avantage concurrentiel significatif.",
      },
    ],
    keyPoints: [
      "Intégrer l'intelligence artificielle dans votre stratégie marketing",
      "Prioriser la confidentialité des données et la transparence",
      "Adopter une approche omnicanale pour une expérience client cohérente",
    ],
    comments: [
      {
        author: "Josué Simba",
        avatar: "https://res.cloudinary.com/dr8ofciki/image/upload/v1746806585/Enywork/josu%C3%A9-simba-profile.png",
        text: "Excellent article, très instructif ! Je suis content d'apprendre cela.",
        date: "Il y a 2 jours",
      },
    ],
  },
  {
    id: "1",
    title: "Les derniers tendances en développement web 2025",
    subtitle: "Découvrez les technologies et frameworks qui domineront le développement web cette année",
    date: "10 Janvier 2025",
    readTime: "8 min de lecture",
    author: {
      name: "Franck Mbuyi",
      role: "CTO Enywork",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    heroImage: "/placeholder.svg?height=576&width=1534",
    content: [
      {
        type: "paragraph",
        text: "Le monde du développement web évolue constamment, avec de nouvelles technologies, frameworks et méthodologies qui émergent chaque année. En 2025, plusieurs tendances majeures façonnent la manière dont nous concevons et développons des applications web.",
      },
      {
        type: "heading",
        text: "Première partie",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr8ofciki/image/upload/v1746010543/Enywork/blog-2.jpg",
        alt: "Développement web moderne",
      },
      {
        type: "paragraph",
        text: "Les architectures serverless continuent de gagner en popularité, permettant aux développeurs de se concentrer sur le code plutôt que sur l'infrastructure. Les services comme AWS Lambda, Azure Functions et Vercel Serverless Functions offrent une scalabilité automatique et une facturation basée sur l'utilisation réelle.",
      },
      {
        type: "paragraph",
        text: "WebAssembly permet d'exécuter du code à des vitesses proches du natif dans le navigateur. En 2025, nous voyons de plus en plus d'applications web utilisant WASM pour des fonctionnalités gourmandes en ressources comme le traitement d'image, les jeux, et les applications de CAO.",
      },
      {
        type: "heading",
        text: "Deuxième partie",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745497227/Enywork/meeting-house.webp",
        alt: "Intelligence artificielle dans le développement",
      },
      {
        type: "paragraph",
        text: "L'intégration de l'IA dans le développement web n'est plus une nouveauté mais une nécessité. Des outils d'IA assistent les développeurs dans l'écriture de code, la détection de bugs, et l'optimisation des performances.",
      },
      {
        type: "paragraph",
        text: "TypeScript est devenu le standard de facto pour les projets JavaScript à grande échelle. Sa sécurité de type et ses fonctionnalités avancées en font un choix incontournable pour les équipes de développement professionnelles.",
      },
    ],
    keyPoints: [
      "Adopter les architectures serverless pour plus de flexibilité",
      "Explorer les possibilités offertes par WebAssembly",
      "Intégrer des outils d'IA dans votre workflow de développement",
    ],
    comments: [],
  },
  {
    id: "2",
    title: "L'importance de l'UX/UI dans le développement d'applications",
    subtitle: "Découvrez pourquoi l'expérience utilisateur est cruciale pour le succès de vos applications",
    date: "5 Janvier 2025",
    readTime: "7 min de lecture",
    author: {
      name: "Jethro Muluba",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    heroImage: "/placeholder.svg?height=576&width=1534",
    content: [
      {
        type: "paragraph",
        text: "Dans le monde numérique d'aujourd'hui, l'expérience utilisateur (UX) et l'interface utilisateur (UI) sont devenues des facteurs déterminants pour le succès des applications et des sites web. Une bonne UX/UI peut faire la différence entre une application qui réussit et une qui échoue.",
      },
      {
        type: "heading",
        text: "Première partie",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr8ofciki/image/upload/v1746010543/Enywork/blog-3.jpg",
        alt: "Design UX/UI moderne",
      },
      {
        type: "paragraph",
        text: "L'expérience utilisateur englobe tous les aspects de l'interaction de l'utilisateur final avec l'entreprise, ses services et ses produits. Une bonne UX est intuitive, efficace et agréable. Elle permet aux utilisateurs d'accomplir leurs tâches avec un minimum d'effort et de frustration.",
      },
      {
        type: "paragraph",
        text: "L'interface utilisateur, quant à elle, est le point de contact visuel entre l'utilisateur et l'application. Elle comprend les boutons, les menus, les icônes, les couleurs, les typographies et tous les éléments visuels avec lesquels l'utilisateur interagit.",
      },
      {
        type: "heading",
        text: "Deuxième partie",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745856936/Enywork/statistics-bg.webp",
        alt: "Processus de design UX",
      },
      {
        type: "paragraph",
        text: "Le design centré sur l'utilisateur est une approche qui place les besoins, les attentes et les limitations des utilisateurs finaux au centre du processus de conception. Cette approche implique des recherches utilisateurs, des tests d'utilisabilité et des itérations basées sur les retours des utilisateurs.",
      },
      {
        type: "paragraph",
        text: "Les entreprises qui investissent dans l'UX/UI voient généralement un retour sur investissement significatif. Une bonne UX/UI peut augmenter les taux de conversion, réduire les coûts de support client, améliorer la fidélisation des utilisateurs et renforcer la réputation de la marque.",
      },
    ],
    keyPoints: [
      "Adopter une approche centrée sur l'utilisateur",
      "Investir dans la recherche utilisateur et les tests d'utilisabilité",
      "Itérer constamment en fonction des retours des utilisateurs",
    ],
    comments: [],
  },
]

const SearchBar = () => {
    const ref = useRef(null);
    const [search, setSearch] = useState('');
    const filteredBlog = blogPosts.filter(blog =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );


    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="relative flex justify-center px-8 -mt-16">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-3xl">
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 w-full">
              <div className="flex items-center bg-[#F2F2F2] rounded-md px-4 py-2 w-full">
                <Search className="w-6 h-6 text-[#A1A1AA] mr-2" />
                <input
                  type="text"
                  placeholder="Rechercher un Article"
              onChange={e => setSearch(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-[#3B4E6A] placeholder-[#A1A1AA] placeholder:text-base text-center md:text-left "
                />
                <X className="w-4 h-4 text-[#A1A1AA] cursor-pointer" />
              </div>
            </div>
            <button className="bg-[#E10919] hover:bg-[#B00813] text-white font-semibold rounded-md px-6 py-3 flex items-center gap-2 transition-colors duration-300 whitespace-nowrap shadow-md">
              <span>FILTREZ PAR</span>
              <ListFilter  className="w-5 h-5" />
            </button>
          </div>
          {filteredBlog.map(blog => (
  <div key={blog.id} className="py-2">
    <h3>{blog.title}</h3>
    <p>{blog.subtitle}</p>
  </div>
))}
        </div>
      </motion.div>
    </section>
  )
}

export default SearchBar