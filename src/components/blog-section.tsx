import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import SectionTitle from "./ui/sectionTitle"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import data from '@/data/data.json'


export default function BlogSection() {
    const getTitle = data.home?.[9]?.lastBlogSection?.[0].title || "Derniers Actualités";
    const getSubTitle = data.home?.[9]?.lastBlogSection?.[0].subtitle || "Suivez nos actualités pour rester informé de nos événements et bien plus encore.";
    const blogData = data.home?.[9]?.lastBlogSection?.[0].blog;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="py-20 px-8 lg:px-20 2xl:45">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 md:gap-16">
            <SectionTitle title={getTitle} subTitle={getSubTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogData?.map((post, index) => (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ 
                        duration: 1.5, 
                        ease: "easeOut",
                        delay: index * 0.8 
                    }}
                    key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 w-full cursor-pointer">
                  <Link href={`/blogs/${post.id}`} >   
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} 
                      fill 
                      className="object-cover transition-all duration-600 hover:scale-110" />
                  </Link>

                </div>

                <div className="p-6 flex flex-col gap-5">
                  <div>
                    <h3 className="text-[#E10919] font-medium text-2xl mb-2">{post.title}</h3>
                    <p className="text-[#1C2736] text-lg">{post.subtitle}</p>
                  </div>

                  <div className="flex flex-col gap-4 text-[#3B4E6A]">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden cursor-hand">
                        <Link
                          href="/team"
                          className = "cursor-pointer"
                        >
                        <Image
                            src={post.avatar || "/placeholder.svg"}
                            alt={post.name}
                            fill
                            className="object-cover"
                        />
                        </Link>

                      </div>
                      <p className="text-secondary-light text-lg">
                        Par {post.name}, {post.role}
                      </p>
                    </div>

                    <Link
                      href={`/blogs/${post.id}`}
                      className="flex items-center text-lg text-secondary hover:text-[#1C2736] transition-colors"
                    >
                      <span>Lire plus</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

            <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 5, ease: "easeOut" }}
            >
            <Link href="/blogs" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg text-white cursor-pointer flex items-center gap-2">
                <span>VOIR PLUS</span>
                <ArrowRight className="w-5 h-5" />
            </Link>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

