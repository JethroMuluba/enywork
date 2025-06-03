import React from 'react'
import data from '@/data/data.json';
// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'
// import Link from "next/link"
// import Image from "next/image"
// import { ArrowLeft, Check, SendHorizontal  } from "lucide-react"
// import NewsletterSection from '@/components/news-letters';
import BlogPostClient from './BlogPostClient';

// Données simulées pour les articles de blog
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

// Données simulées pour les articles connexes
const relatedPosts = [
  {
    id: "4",
    title: "Les derniers tendances en développement web 2025",
    excerpt: "Découvrez les technologies et frameworks qui domineront le développement web cette année...",
    image: "/placeholder.svg?height=257&width=387",
    author: {
      name: "Franck Mbuyi",
      role: "CTO Enywork",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  },
  {
    id: "5",
    title: "L'importance de l'UX/UI dans le développement d'applications",
    excerpt: "Découvrez pourquoi l'expérience utilisateur est cruciale pour le succès de vos applications...",
    image: "/placeholder.svg?height=257&width=387",
    author: {
      name: "Jethro Muluba",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  },
  {
    id: "6",
    title: "Sécurité web : les meilleures pratiques en 2025",
    excerpt: "Protégez votre application web contre les menaces avec ces conseils de sécurité essentiels...",
    image: "/placeholder.svg?height=257&width=387",
    author: {
      name: "Yusuf Heri",
      role: "CEO Enywork",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  },
]

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const resolvedParams = await params;  
  // Trouver l'article correspondant à l'ID
  const post = blogPosts.find((post) => post.id === resolvedParams.slug) || blogPosts[0];
  const filteredRelatedPosts = relatedPosts.filter((relatedPost) => relatedPost.id !== resolvedParams.slug);
  const getCover = data.about?.[0]?.hero?.[0].cover || "/placeholder.svg";
  const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";

  return <BlogPostClient 
    post={post} 
    filteredRelatedPosts={filteredRelatedPosts}
    getCover={getCover}
    getPattern={getPattern}
  />
}

export default BlogPostPage

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id
  }))
}