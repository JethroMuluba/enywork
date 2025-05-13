'use client'

import React from 'react'
import data from '@/data/data.json';
import { useState } from "react"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, SendHorizontal  } from "lucide-react"
import NewsletterSection from '@/components/news-letters';

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
      avatar: "/placeholder.svg?height=48&width=48",
    },
    heroImage: "/placeholder.svg?height=576&width=1534",
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

// interface BlogPostPageProps {
//   params : {
//   slug : string
//   }
// }


const BlogPostPage =({ params }: any ) => {
  // Trouver l'article correspondant à l'ID
  const post = blogPosts.find((post) => post.id === params.slug) || blogPosts[0];

  // Filtrer les articles connexes pour exclure l'article actuel
  const filteredRelatedPosts = relatedPosts.filter((relatedPost) => relatedPost.id !== params.slug);

  const getCover = data.about?.[0]?.hero?.[0].cover || "/placeholder.svg";
  const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("User blog comments message is :", message)
    setMessage("")
    // Show success message or handle errors
}

  return (
    <main className="min-h-screen pt-[92px] lg:pt-[124px] ">
      {/* Hero Section */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              ref = {ref} className="relative w-full h-[576px] bg-gradient-to-r from-[#320001] to-[#BD2222] overflow-hidden " style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-80 " style={{ backgroundImage: `url(${getPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="container-custom relative z-10 h-full flex items-center ">
                    <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-20">

                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className=" hidden lg:block lg:justify-start"
                    >
                      <Link href="/blogs" className=" py-4 rounded-lg text-white cursor-pointer flex items-center gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Retour aux blogs</span>
                      </Link>
                    </motion.div>
                        <motion.h2 
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        className="text-4xl text-center lg:text-left font-medium text-white">
                            {post.title}
                        </motion.h2>
                        <motion.p 
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-xl text-center lg:text-left text-white">
                            {post.subtitle}
                        </motion.p>

                        <div className="flex flex-col items-center lg:items-start gap-4 text-[#3B4E6A]">
                            <div className="flex items-center gap-4">
                              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src="/placeholder.svg"
                                    alt="Author Prolie"
                                    fill
                                    className="object-cover"
                                />
                              </div>

                              <div className="flex flex-col text-white" >
                                <p className="text-secondary-light">
                                  {post.author.name}, {post.author.role}
                                  </p>
                                  <p className="text-secondary-light">
                                    {post.date} • {post.readTime}
                                  </p>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>
            </motion.section>

      {/* Single Blog Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {post.content.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="text-[#3B4E6A] mb-8">
                    {item.text}
                  </p>
                )
              } else if (item.type === "heading") {
                return (
                  <h2 key={index} className="text-3xl text-center lg:text-left font-medium text-[#1C2736] text-center mb-8">
                    {item.text}
                  </h2>
                )
              } else if (item.type === "image") {
                return (
                  <div key={index} className="mb-8">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt || ""}
                      width={769}
                      height={498}
                      className="rounded-lg w-full"
                    />
                  </div>
                )
              }
              return null
            })}
          </div>
        </div>
      </section>

            {/* Key Points Section */}
            <section className="py-16 bg-[#F2F2F2]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium text-[#1C2736] mb-6">Points clés à retenir</h2>
            <div className="flex flex-col gap-4">
              {post.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <Check className="w-5 h-5 text-secondary-light" />
                  </div>
                  <p className="text-[#3B4E6A]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 px-4 md:px-8 lg:px-20 2xl:45">
        <div className="container-custom">
          <h2 className="text-3xl font-medium text-secondary mb-12">Articles similaires</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRelatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col gap-5">
                  <div>
                    <h3 className="text-[#E10919] font-medium text-lg mb-2">{relatedPost.title}</h3>
                    <p className="text-[#1C2736]">{relatedPost.excerpt}</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={relatedPost.author.avatar || "/placeholder.svg"}
                          alt={relatedPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-[#3B4E6A]">
                        Par {relatedPost.author.name}, {relatedPost.author.role}
                      </p>
                    </div>

                    <Link
                      href={`/blogs/${relatedPost.id}`}
                      className="flex items-center text-[#3B4E6A] hover:text-[#1C2736] transition-colors"
                    >
                      <span>Lire plus</span>
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Comments Section */}
            <section className="py-16 bg-[#F2F2F2]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium text-[#1C2736] mb-10">Commentaires</h2>

            {/* Existing Comments */}
            {post.comments.length > 0 ? (
              <div className="space-y-8 mb-10">
                {post.comments.map((comment, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={comment.avatar || "/placeholder.svg"}
                        alt={comment.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <div className="bg-white p-4 rounded-lg relative">
                          <div className="absolute -left-2 top-4 w-4 h-4 bg-white transform rotate-45"></div>
                          <h3 className="font-medium text-[#1C2736] mb-2">{comment.author}</h3>
                          <p className="text-[#1C2736]-light">{comment.text}</p>
                        </div>
                        <p className="text-[#3B4E6A] mt-2">{comment.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#3B4E6A] mb-10">
                Aucun commentaire pour le moment. Soyez le premier à commenter !
              </p>
            )}

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre commentaire..."
                  className="w-full h-24 border-none outline-none resize-none text-[#3B4E6A]"
                ></textarea>
              </div>
              <button type="submit" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg text-white cursor-pointer flex items-center gap-2                       ">
                <span>ENVOYER LE MESSAGE</span>
                <SendHorizontal  className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>


      <NewsletterSection/>
    </main>
  )
}

export default BlogPostPage