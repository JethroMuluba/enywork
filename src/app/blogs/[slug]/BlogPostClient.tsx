'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, SendHorizontal } from "lucide-react"
import NewsletterSection from '@/components/news-letters';

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface Comment {
  author: string;
  avatar: string;
  text: string;
  date: string;
}

interface ContentItem {
  type: string;
  text?: string;
  src?: string;
  alt?: string;
}

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: Author;
  heroImage: string;
  content: ContentItem[];
  keyPoints: string[];
  comments: Comment[];
}

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: Author;
}

interface BlogPostClientProps {
  post: BlogPost;
  filteredRelatedPosts: RelatedPost[];
  getCover: string;
  getPattern: string;
}

const BlogPostClient = ({ post, filteredRelatedPosts, getCover, getPattern }: BlogPostClientProps) => {
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
    <main className="min-h-screen pt-[92px] lg:pt-[124px]  ">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        ref={ref} 
        className="relative w-full h-[576px] bg-gradient-to-r from-[#320001] to-[#BD2222] overflow-hidden" 
        style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${getPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-20">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="hidden lg:block lg:justify-start"
            >
              <Link href="/blogs" className="py-4 rounded-lg text-white cursor-pointer flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                <span>Retour aux blogs</span>
              </Link>
            </motion.div>
            <motion.h2 
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl text-center lg:text-left font-medium text-white"
            >
              {post.title}
            </motion.h2>
            <motion.p 
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-xl text-center lg:text-left text-white"
            >
              {post.subtitle}
            </motion.p>

            <div className="flex flex-col items-center lg:items-start gap-4 text-[#3B4E6A]">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Author Profile"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col text-white">
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
      <section className="py-16 px-4 md:px-8 lg:px-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {post.content.map((item: ContentItem, index: number) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="text-[#3B4E6A] mb-8">
                    {item.text}
                  </p>
                )
              } else if (item.type === "heading") {
                return (
                  <h2 key={index} className="text-3xl lg:text-center text-left font-medium text-[#1C2736] mb-8">
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
      <section className="py-16 bg-[#F2F2F2] px-4 md:px-8 lg:px-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium text-[#1C2736] mb-6">Points clés à retenir</h2>
            <div className="flex flex-col gap-4">
              {post.keyPoints.map((point: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <Check className="w-5 h-5 text-[#E10919]" />
                  </div>
                  <p className="text-[#3B4E6A]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 px-4 md:px-8 lg:px-20 2xl:45 ">
        <div className="container-custom">
          <h2 className="text-3xl font-medium text-[#1C2736] lg:text-center mb-12">Articles similaires</h2>

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
                {post.comments.map((comment: Comment, index: number) => (
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
              <button type="submit" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg text-white cursor-pointer flex items-center gap-2">
                <span>ENVOYER LE MESSAGE</span>
                <SendHorizontal className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <NewsletterSection/>
    </main>
  )
}

export default BlogPostClient 