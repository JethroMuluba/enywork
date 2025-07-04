import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import SectionTitle from './ui/sectionTitle'
import data from '@/data/data.json'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const teamMembers = [

  {
    id: 1,
    firstname: "Yusuf",
    lastname: "Heri",
    role: "CEO & Développeur Web Full-Stack",
    image: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745853594/Enywork/yusuf-heri-profile.jpg",
  },
  {
    id: 2,
    firstname: "Franck",
    lastname: "Mbuyi",
    role: "CTO & Développeur Mobile",
    image: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745853771/Enywork/franck-mbuyi-profile.png",
  },
  {
    id: 3,
    firstname: "Jethro",
    lastname: "Muluba",
    role: "Spécialiste en Marketing Digital et Développeur Web Full-Stack",
    image: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745852687/Enywork/jethro-muluba-profile.png",
  },
]

export default function TeamSection() {
    const getTitle = data.home?.[5]?.ourTeam?.[0].title || 'Notre Équipe';
    const getSubTitle = data.home?.[5]?.ourTeam?.[0]?.subtitle || 'Rencontrer nos spécialistes vous donne un aperçu d’une réalisation réussie de vos projets.';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref}  className="bg-white py-20 px-8 lg:px-25">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12">
            <SectionTitle title={getTitle} subTitle={getSubTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-40">
            {teamMembers.map((member, index) => (
              <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                  delay: index * 0.8 
              }}
              key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-85 2xl:h-95 w-full transition-transform duration-600 hover:scale-110">
                  <Image src={member.image || "/placeholder.svg"} alt={`${member.firstname}`+ ' '+`${member.lastname}`} fill className="object-cover" />
                </div>

                <div className="p-6 text-center">
                    <div className="flex justify-center text-center font-medium gap-2">
                    <p className="text-2xl text-[#1C2736] text-secondary mb-3">{member.firstname}</p> 
                    <p className="text-2xl text-[#E10919] text-secondary mb-3">{member.lastname} </p>
                    </div>

                  <p className="text-[#3B4E6A] text-lg mb-4">{member.role} </p>

                  <div className="flex justify-center gap-6 text-[#E10919] ">
                    <Link href="#" aria-label="Instagram">
                      <Instagram className="w-5 h-5 text-secondary-light hover:text-[#B00813] transition-colors" />
                    </Link>
                    <Link href="#" aria-label="Twitter">
                      <Twitter className="w-5 h-5 text-secondary-light hover:text-[#B00813] transition-colors" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5 text-secondary-light hover:text-[#B00813] transition-colors" />
                    </Link>
                    <Link href="#" aria-label="Facebook">
                      <Facebook className="w-5 h-5 text-secondary-light hover:text-[#B00813] transition-colors" />
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
          <Link href="/team" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg text-white cursor-pointer flex items-center gap-2">
            <span>VOIR PLUS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

