import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import SectionTitle from './ui/sectionTitle'
import data from '@/data/data.json'

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
  return (
    <section className="bg-white font-[poppins] py-20 px-4 md:px-8 lg:px-25">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 md:gap-16">
            <SectionTitle title={getTitle} subTitle={getSubTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-100 w-full transition-transform duration-300 hover:scale-110">
                  <Image src={member.image || "/placeholder.svg"} alt={`${member.firstname}`+ ' '+`${member.lastname}`} fill className="object-cover" />
                </div>

                <div className="p-6 text-center">
                    <div className="flex justify-center text-center font-semibold gap-2">
                    <p className="text-2xl text-[#1C2736] text-secondary mb-3">{member.firstname}</p> 
                    <p className="text-2xl text-[#E10919] text-secondary mb-3">{member.lastname} </p>
                    </div>

                  <p className="text-[#3B4E6A] mb-4">{member.role} </p>

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
              </div>
            ))}
          </div>

          <Link href="/equipe" className="btn-primary">
            <span>VOIR PLUS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

