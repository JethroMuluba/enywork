import React from 'react'
import Image from 'next/image'
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from "next/link"



const teams = [
  {
    id: 1,
    title: 'Executive Leadership',
    members: [
      {
        id: 1,
        firstname: 'Yusuf',
        lastname : 'Heri',
        role: 'CEO, Expert en gestion de projets digitaux innovants.',
        avatar: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745853594/Enywork/yusuf-heri-profile.jpg",
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
        id: 2,
        firstname: 'Frank',
        lastname : 'Mbuyi',
        role: 'Directeur Technique, Développeur Web Full-Stack.',
        avatar: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745853771/Enywork/franck-mbuyi-profile.png",
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Technical and Development Team',
    members: [
      {
        id: 1,
        firstname: 'Victor',
        lastname: 'Kasereka',
        role: 'Head of Software Development, Développeur Full-Stack.',
        avatar: '/placeholder.svg',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
        id: 2,
        firstname: 'Daima',
        lastname: 'Muhiya',
        role: 'Développeur Web Full-Stack.',
        avatar: '/placeholder.svg',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Sales and Marketing',
    members: [
      {
        id: 1,
        firstname: 'Junior',
        lastname: 'Mupasa',
        role: 'Sales Manager',
        avatar: 'https://res.cloudinary.com/dr8ofciki/image/upload/v1745852687/Enywork/jethro-muluba-profile.png',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
        id: 2,
        firstname: 'Jethro',
        lastname: 'Muluba',
        role: 'Spécialiste en Marketing Digital et Développeur Web Full-Stack',
        avatar: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745852687/Enywork/jethro-muluba-profile.png",
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
        id :3,
        firstname: 'Carmel',
        lastname: 'Kingudi',
        role: 'Partnership Manager',
        avatar: 'https://res.cloudinary.com/dr8ofciki/image/upload/v1745852687/Enywork/jethro-muluba-profile.png',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
    ],
  },
  {
    id: 4,
    title: 'Customer Support and Implementation',
    members: [
      {
        id: 1,
        firstname: 'Hervé',
        lastname: 'Kimbau',
        role: 'Customer Support Manager',
        avatar: 'https://res.cloudinary.com/dr8ofciki/image/upload/v1745852687/Enywork/jethro-muluba-profile.png',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
        id: 2,
        firstname: 'Josué',
        lastname: 'Simba',
        role: 'Technical Support Specialist, Développeur Web',
        avatar: 'https://res.cloudinary.com/dr8ofciki/image/upload/v1745852687/Enywork/jethro-muluba-profile.png',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
    ],
  },
  {
    id: 5,
    title: 'Administration and Finance',
    members: [
      {
        id: 1,
        firstname: 'Abdoul',
        lastname: 'Karim',
        role: 'Human Resources Manager',
        avatar: 'https://res.cloudinary.com/dr8ofciki/image/upload/v1745852687/Enywork/jethro-muluba-profile.png',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
        id: 2,
        firstname: 'Gracia',
        lastname: 'Wumba',
        role: 'Administrative Assistant',
        avatar: 'https://res.cloudinary.com/dr8ofciki/image/upload/v1745852687/Enywork/jethro-muluba-profile.png',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
        id: 3,
        firstname: 'Jubile',
        lastname: 'Manzambi',
        role: 'Finance Manager',
        avatar: 'https://res.cloudinary.com/dr8ofciki/image/upload/v1745852687/Enywork/jethro-muluba-profile.png',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
    ],
  },
];

const TeamBox = () => {
  const checkTeamData = teams;
  console.log("Données des membres du team :", checkTeamData);
  return (
    <div className="">
      {teams.map((team) => {
        const sectionRef = useRef(null);
        const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
        return (
          <section key={team.id} style={{ marginBottom: 48 }} className="" >
            <h2 className="text-center border-b-2 border-gray-200 pb-2 mb-6 text-2xl font-bold">{team.title}</h2>
            {/* <div ref={sectionRef} className="flex gap-8 item-center">
              {team.members.map((member, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={sectionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-85 2xl:h-95 w-full transition-transform duration-600 hover:scale-110">
                    <Image src={member.avatar} alt={member.name} width={500} height={96} className="object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <div className="flex justify-center text-center font-medium gap-2">{member.name || "Nom non disponible"}</div>
                    <div className="text-[#b71c1c] font-medium text-center mb-2">{member.role}</div>
                    <div className="flex gap-4 mt-2">
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} color="#E10919" /></a>
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} color="#E10919" /></a>
                      <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} color="#E10919" /></a>
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} color="#E10919" /></a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}

            <div ref={sectionRef} className="flex flex-wrap gap-8 justify-center">
            {team.members.map((member, index) => (
              <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={sectionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                  delay: index * 0.8 
              }}
              key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-95 2xl:h-95 w-full transition-transform duration-600 hover:scale-110">
                  <Image src={member.avatar || "/placeholder.svg"} alt={`${member.firstname}`+ ' '+`${member.lastname}`} fill className="object-cover" />
                </div>

                <div className="p-6 text-center">
                    <div className="flex justify-center text-center font-medium gap-2">
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
              </motion.div>
            ))}
            </div>


          </section>
        );
      })}
    </div>
  );
}

export default TeamBox