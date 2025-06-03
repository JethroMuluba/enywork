import React, { ReactNode } from 'react'
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
        avatar: 'https://res.cloudinary.com/dr8ofciki/image/upload/v1747647345/Enywork/victor-kasereka-profile.png',
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

type TeamType = typeof teams[number];
type TeamSectionProps = {
  team: TeamType;
  idx: number;
  children: (sectionInView: boolean) => ReactNode;
};
const TeamSection: React.FC<TeamSectionProps> = ({ team, idx, children }) => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const bgColor = idx % 2 === 0 ? "bg-white" : "bg-[#F2F2F2]";
  return (
    <section
      ref={sectionRef}
      key={team.id}
      style={{ marginBottom: 48 }}
      className={`${bgColor} w-screen relative left-1/2 right-1/2 -mx-[50vw] px-0 py-8`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {children(sectionInView)}
      </div>
    </section>
  );
};

const TeamBox = () => {
  const checkTeamData = teams;
  console.log("Données des membres du team :", checkTeamData);
  return (
    <div className="">
      {teams.map((team, idx) => (
        <TeamSection key={team.id} team={team} idx={idx}>
          {(sectionInView) => (
            <>
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={sectionInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center text-[#1C2736] border-b-2 border-gray-200 pb-2 mb-12 text-3xl font-medium"
              >
                {team.title}
              </motion.h2>
              <div className="flex flex-wrap gap-8 justify-center">
                {team.members.map((member, index) => (
                  <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={sectionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ 
                        duration: 1, 
                        ease: "easeOut",
                        delay: index * 0.8 
                    }}
                    key={`${team.id}-${member.id}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center w-80 min-h-[480px] "
                  >
                    <div className="relative w-full" style={{ height: 320 }}>
                      <Image src={member.avatar || "/placeholder.svg"} alt={`${member.firstname} ${member.lastname}`} fill className="object-cover transition-transform duration-600 hover:scale-110" style={{ borderBottom: '1px solid #eee' }} />
                    </div>

                    <div className="p-6 text-center flex-1 flex flex-col justify-between w-full">
                        <div>
                          <div className="flex justify-center font-medium gap-2">
                            <p className="text-2xl text-[#1C2736] mb-3">{member.firstname}</p> 
                            <p className="text-2xl text-[#E10919] mb-3">{member.lastname}</p>
                          </div>
                          <p className="text-[#3B4E6A] text-lg mb-4 line-clamp-2">{member.role}</p>
                        </div>
                        <div className="flex justify-center gap-6 text-[#E10919] mt-4">
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
            </>
          )}
        </TeamSection>
      ))}
    </div>
  );
}

export default TeamBox