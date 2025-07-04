import React from 'react'
import Image from 'next/image'
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'

const teams = [
  {
    title: 'Executive Leadership',
    members: [
      {
        name: 'Yusuf Heri',
        role: 'CEO, Expert en gestion de projets digitaux innovants.',
        avatar: '/placeholder.svg',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
        name: 'Frank Mbuyi',
        role: 'Directeur Technique, Développeur Web Full-Stack.',
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
    title: 'Technical and Development Team',
    members: [
      {
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
    title: 'Sales and Marketing',
    members: [
      {
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
        name: 'Jethro Muluba',
        role: 'Spécialiste en Marketing Digital et Développeur Web Full-Stack',
        avatar: '/placeholder.svg',
        socials: {
          instagram: '#',
          linkedin: '#',
          facebook: '#',
          twitter: '#',
        },
      },
      {
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
    title: 'Customer Support and Implementation',
    members: [
      {
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
    title: 'Administration and Finance',
    members: [
      {
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
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      {teams.map((team) => (
        <section key={team.title} style={{ marginBottom: 48 }}>
          <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: 8 }}>{team.title}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 24 }}>
            {team.members.map((member) => (
              <div key={member.name} style={{ background: '#fafafa', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, minWidth: 220, flex: '1 1 220px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src={member.avatar} alt={member.name} width={80} height={80} style={{ borderRadius: '50%', marginBottom: 16 }} />
                <div style={{ fontWeight: 600, fontSize: 18, textAlign: 'center' }}>{member.name}</div>
                <div style={{ color: '#b71c1c', fontWeight: 500, margin: '8px 0', textAlign: 'center' }}>{member.role}</div>
                <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} color="#E10919" /></a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} color="#E10919" /></a>
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} color="#E10919" /></a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} color="#E10919" /></a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default TeamBox