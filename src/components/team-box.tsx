import React from 'react'
import Image from 'next/image'
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const teams = [
  {
    id: 1,
    title: 'Executive Leadership',
    members: [
      {
        id: 1,
        name: 'Yusuf Heri',
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
        name: 'Frank Mbuyi',
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
        name: 'Victor Kasereka',
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
        name: 'Daima Muhiya',
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
        name: 'Junior Mupasa',
        role: 'Sales Manager',
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
        name: 'Jethro Muluba',
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
        name: 'Carmel Kingudi',
        role: 'Partnership Manager',
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
    id: 4,
    title: 'Customer Support and Implementation',
    members: [
      {
        id: 1,
        name: 'Hervé Kimbau',
        role: 'Customer Support Manager',
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
        name: 'Josué Simba',
        role: 'Technical Support Specialist, Développeur Web',
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
    id: 5,
    title: 'Administration and Finance',
    members: [
      {
        id: 1,
        name: 'Abdoul Karim Pongo',
        role: 'Human Resources Manager',
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
        name: 'Gracia Wumba',
        role: 'Administrative Assistant',
        avatar: '/placeholder.svg',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
        id: 3,
        name: 'Jubile Manzambi',
        role: 'Finance Manager',
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
];

const TeamBox = () => {
  const checkTeamData = teams;
  console.log("Données des membres du team :", checkTeamData);
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      {teams.map((team) => {
        const sectionRef = useRef(null);
        const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
        return (
          <section key={team.id} style={{ marginBottom: 48 }}>
            <h2 className="text-center border-b-2 border-gray-200 pb-2 mb-6 text-2xl font-bold">{team.title}</h2>
            <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center">
              {team.members.map((member, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={sectionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
                >
                  <div className="relative h-85 2xl:h-95 w-full transition-transform duration-600 hover:scale-110">
                    <Image src={member.avatar} alt={member.name} width={500} height={96} className="object-cover" />
                  </div>
                  <div className="px-4 pb-6 w-full flex-1 flex flex-col items-center">
                    <div className="font-semibold text-lg text-center mb-1">{member.name || "Nom non disponible"}</div>
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
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default TeamBox