'use client'
import React, { useRef }  from 'react'
import { motion, useInView } from 'framer-motion'

const Notices = () => {

    const ref = useRef(null);
    const ref1= useRef(null);
    const ref2= useRef(null);
    const ref3= useRef(null);
    const ref4= useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
    const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
    const isInView3 = useInView(ref3, { once: true, margin: "-100px" });
    const isInView4 = useInView(ref4, { once: true, margin: "-100px" });
  return (
    <section ref={ref}  className='min-h-screen flex flex-col gap-4 pt-[92px] lg:pt-[124px] px-8 lg:px-100'>

        <div  className='flex flex-col items-start gap-5'>
            <motion.h2 
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
            className='text-[#E10919] font-medium text-3xl lg:text-4xl pt-10 lg:pt-20'>
                Mentions légales / Conditions d&apos;utilisation et Politique de confidentialité
            </motion.h2>

            <motion.div 
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
              className=" w-20 rounded-2xl bg-[#1C2736] py-[2px] "> 
            
              </motion.div>
        </div>

        <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
                      transition={{ 
                            type: "spring",
                            stiffness: 960,
                            damping: 80,
                            duration: 1, 
                            ease: [0, 0.71, 0.2, 1.01],
                            delay: 0.5 
                        }}
        className='flex flex-col gap-2'>
                <h3 className='text-[#1C2736] text-2xl pt-4'>
                    1. Informations Générales
                </h3>

                <div className=' flex flex-col gap-2 pl-6'>
                    <h4 className=' text-xl text-[#E10919]'>
                        - Editeur :
                    </h4>
                    <p className='text-[#3B4E6A] '>
                        Enywork Sarl, Société à responsabilité limitée immatriculée au RCCM de Kinshasa sous le numéro CD/KNG/RCCM/23-B-02783 et portant le numéro d&apos;identification national 01-J6100-N46076G.
                    </p>
                </div>

                <div className=' flex flex-col gap-2 pl-6'>
                    <h4 className=' text-xl text-[#E10919]'>
                        - Siège social :
                    </h4>
                    <p className='text-[#3B4E6A] '>
                        22 avenue de la Paix, Immeuble Ancienne Galerie Présidentielle, Local 6 B8, Gombe, Kinshasa, RDC.
                    </p>
                </div>


                <div className=' flex flex-col gap-2 pl-6'>
                    <h4 className=' text-xl text-[#E10919]'>
                        - Téléphone :
                    </h4>
                    <p className='text-[#3B4E6A] '>
                        Administration/Bureau : +243 850 301 852 / Commercial : +243 827 964 420 Email : contact@enywork.com
                    </p>
                </div>

                <div className=' flex flex-col gap-2 pl-6'>
                    <h4 className=' text-xl text-[#E10919]'>
                        - Email : 
                    </h4>
                    <p className='text-[#3B4E6A] '>
                        contact@enywork.com
                    </p>
                </div>

                <div className=' flex flex-col gap-2 pl-6'>
                    <h4 className=' text-xl text-[#E10919]'>
                        - Site Web : 
                    </h4>
                    <p className='text-[#3B4E6A] '>
                        www.enywork.com
                    </p>
                </div>
        </motion.div>

        <motion.div ref={ref1} 
                              initial={{ scale: 0, opacity: 0 }}
                              animate={isInView1 ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
                              transition={{ 
                                    type: "spring",
                                    stiffness: 960,
                                    damping: 80,
                                    duration: 1, 
                                    ease: [0, 0.71, 0.2, 1.01],
                                    delay: 0.5 
                                }}
        className='flex flex-col gap-2'>
                <h3 className='text-[#1C2736] text-2xl pt-4'>
                    2. Directeur de la publication
                </h3>

                <div className=' flex flex-col gap-2 pl-6'>
                    <h4 className=' text-xl text-[#E10919]'>
                        - Directeur Gérant :
                    </h4>
                    <p className='text-[#3B4E6A] '>
                        Mr Monsieur YUSUF HERI José, CEO-fondateur et Expert en gestion de projets digitaux innovants.
                    </p>
                </div>
        </motion.div>

        <motion.div ref={ref2} 
                                      initial={{ scale: 0, opacity: 0 }}
                                      animate={isInView2 ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
                                      transition={{ 
                                            type: "spring",
                                            stiffness: 960,
                                            damping: 80,
                                            duration: 1, 
                                            ease: [0, 0.71, 0.2, 1.01],
                                            delay: 0.5
                                        }}
        className='flex flex-col gap-2'>
                <h3 className='text-[#1C2736] text-2xl pt-4' >
                    3. Hébergement
                </h3>

                <div className=' flex flex-col gap-2 pl-6'>
                    <h4 className=' text-xl text-[#E10919]'>
                        - Local Hosting :
                    </h4>
                    <p className='text-[#3B4E6A] '>
                        Ce site web est hébergée par notre propre service d&apos;hébergement, assurant ainsi une sécurité optimale des données et une maîtrise complète de l&apos;infrastructure technique.
                    </p>
                </div>
        </motion.div>

        <motion.div ref={ref3} 
                                              initial={{ scale: 0, opacity: 0 }}
                                              animate={isInView3 ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
                                              transition={{ 
                                                    type: "spring",
                                                    stiffness: 960,
                                                    damping: 80,
                                                    duration: 1, 
                                                    ease: [0, 0.71, 0.2, 1.01],
                                                    delay: 0.5
                                                }}
        className='flex flex-col gap-2'>
                <h3 className='text-[#1C2736] text-2xl pt-4' >
                    4. Propriété intellectuelle
                </h3>

                <div className=' flex flex-col gap-2 pl-6'>
                    <h4 className=' text-xl text-[#E10919]'>
                        - Utilisation de contenus :
                    </h4>
                    <p className='text-[#3B4E6A] '>
                        L’ensemble des contenus (textes, images, vidéos, logos, charte graphique…) présents sur ce site sont la propriété exclusive de ENYWORK SARL sauf indication contraire.
                        Toute reproduction ou utilisation sans autorisation est strictement interdite.
                    </p>
                </div>
        </motion.div>

        <motion.div ref={ref4} 
                                                      initial={{ scale: 0, opacity: 0 }}
                                                      animate={isInView4 ? { scale: 1, opacity: 1 } :{ scale: 0, opacity: 1 }}
                                                      transition={{ 
                                                            type: "spring",
                                                            stiffness: 960,
                                                            damping: 80,
                                                            duration: 1, 
                                                            ease: [0, 0.71, 0.2, 1.01],
                                                            delay: 0.5
                                                        }}
        className='flex flex-col gap-2 pb-10 lg:pb-20'>
                <h3 className='text-[#1C2736] text-2xl pt-4' >
                    5. Responsabilité
                </h3>

                <div className=' flex flex-col gap-2 pl-6'>
                    <h4 className=' text-xl text-[#E10919]'>
                        - Notre engagement :
                    </h4>
                    <p className='text-[#3B4E6A] '>
                        ENYWORK SARL s&apos;engage à fournir des informations à jour et fiables, mais ne peut être tenu responsable des erreurs ou omissions.
                        L&apos;utilisateur du site reste responsable de l&apos;utilisation des informations fournies.
                    </p>
                </div>
        </motion.div>




    </section>
  )
}

export default Notices