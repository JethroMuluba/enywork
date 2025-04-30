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
    <section className="py-20 px-4 md:px-8 lg:px-30 2xl:45">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 md:gap-16">
            <SectionTitle title={getTitle} subTitle={getSubTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogData?.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover transition-all duration-600 hover:scale-110" />
                </div>

                <div className="p-6 flex flex-col gap-5">
                  <div>
                    <h3 className="text-[#E10919] font-medium text-lg mb-2">{post.title}</h3>
                    <p className="text-[#1C2736]">{post.subtitle}</p>
                  </div>

                  <div className="flex flex-col gap-4 text-[#3B4E6A]">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={post.avatar || "/placeholder.svg"}
                          alt={post.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-secondary-light">
                        Par {post.name}, {post.role}
                      </p>
                    </div>

                    <Link
                      href={`/blogs/${post.id}`}
                      className="flex items-center text-secondary hover:text-[#1C2736] transition-colors"
                    >
                      <span>Lire plus</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <span className="w-3 h-3 rounded-full bg-light-quaternary"></span>
            <span className="w-3 h-3 rounded-full bg-white border-2 border-primary"></span>
            <span className="w-3 h-3 rounded-full bg-light-quaternary"></span>
            <span className="w-3 h-3 rounded-full bg-light-quaternary"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

