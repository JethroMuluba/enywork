import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Outfit } from 'next/font/google'
import ScrollToTop from '@/components/ScrollToTop'


const outfit = Outfit({
  subsets: ['latin'],
})

// const madeInfinityFont = LocalFont({
//   src :[
//     {
//       path :'../fonts/MADEINFINITY-PERSONALUSE-Thin.otf',
//       weight: '100',
//       style: 'thin',
//     },

//     {
//       path :'../fonts/MADEINFINITY-PERSONALUSE-Light.otf',
//       weight: '200',
//       style: 'extralight',
//     },


//     {
//       path :'../fonts/MADEINFINITY-PERSONALUSE-Light.otf',
//       weight: '300',
//       style: 'light',
//     },

//     {
//       path :'../fonts/MADEINFINITY-PERSONALUSE-Regular.otf',
//       weight: '400',
//       style: 'normal',
//     },

//     {
//       path :'../fonts/MADEINFINITY-PERSONALUSE-Medium.otf',
//       weight: '500',
//       style: 'medium',
//     },

//     {
//       path :'../fonts/MADEINFINITY-PERSONALUSE-Regular.otf',
//       weight: '650',
//       style: 'semibold',
//     },

//     {
//       path :'../fonts/MADEINFINITY-PERSONALUSE-Black.otf',
//       weight: '700',
//       style: 'bold',
//     },

//     {
//       path :'../fonts/MADEINFINITY-PERSONALUSE-Black.otf',
//       weight: '800',
//       style: 'extrabold',
//     },

//     {
//       path :'../fonts/MADEINFINITY-PERSONALUSE-Black.otf',
//       weight: '900',
//       style: 'black',
//     }
//   ]
// })


export const metadata: Metadata = {
  title: "Enywork SARL - Solutions Numériques sur Mesure",
  description:
    "Enywork SARL est une start-up congolaise spécialisée dans la conception et le développement de logiciels sur mesure.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={outfit.className}>
      <body>
        
          <Header/>
          {children}
          <Footer/>
        
        <ScrollToTop />
      </body>
    </html>
  )
}

