'use client'

import HeroForAll from "@/components/hero-for-all"
import data from '@/data/data.json'
import Image from "next/image"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import StatisticsSection from "@/components/statistics-section"
import { Crown, Feather, Rocket, Lightbulb } from 'lucide-react';

export default function AboutPage() {
    const getCover = data.about?.[0]?.hero?.[0].cover || "/placeholder.svg";
    const getPattern = data.about?.[0]?.hero?.[0].pattern || "/placeholder.svg";
    const getTitle = data.about?.[0]?.hero?.[0].title || "Hero Title";
    const getSubTitle = data.about?.[0]?.hero?.[0].subTitle || "Hero Sub-title";
    
    // Notre Histoire
    const storyTitle = data.about?.[1].title;
    const storySubTitle = data.about?.[1].subTitle;
    const storyImage = data.about[1].image;
    const storyText1 = data.about?.[1].history?.[0].text1;
    const storyText2 = data.about?.[1].history?.[1].text2;
    
    // Notre Mission
    const missionTitle = data.about?.[2].title;
    const missionSubTitle = data.about?.[2].subTitle;
    const missionImage = data.about[2].image;
    const missionText1 = data.about?.[2].mission?.[0].text1;
    const missionText2 = data.about?.[2].mission?.[1].text2;
    
    // Notre Vision
    const visionTitle = data.about?.[3].title;
    const visionSubTitle = data.about?.[3].subTitle;
    const visionImage = data.about[3].image;
    const visionText1 = data.about?.[3].vision?.[0].text1;
    const visionText2 = data.about?.[3].vision?.[1].text2;

    // Nos Valeurs
    const valuesTitle = data.about?.[4].title;
    const valuesSubTitle = data.about?.[4].subTitle;
    const valuesText = data.about?.[4].text;
    const values1 = data.about?.[4].values?.[0].value1;
    const values2 = data.about?.[4].values?.[0].value2;
    const values3 = data.about?.[4].values?.[0].value3;
    const values4 = data.about?.[4].values?.[0].value4;
    

    // Créer des refs séparés pour chaque section
    const storyRef = useRef(null);
    const missionRef = useRef(null);
    const visionRef = useRef(null);
    const valuesRef = useRef(null);

    // Créer des hooks useInView séparés
    const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
    const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });
    const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" });
    const isValuesView = useInView(valuesRef, { once: true, margin: "-100px"})

    return (
        <main className="min-h-screen font-[poppins] pt-[92px] lg:pt-[124px]">
            <HeroForAll title={getTitle} subTitle={getSubTitle} cover={getCover} pattern={getPattern} />
            
            {/* Notre Histoire */}
            <section className="bg-[#F2F2F2] font-[poppins] py-20 px-4 md:px-8 lg:px-20">
                <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-5">
                            <motion.h2 
                                initial={{ y: 100, opacity: 0 }}
                                animate={isStoryInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="text-4xl lg:text-4xl text-center lg:text-left font-semibold text-[#1C2736]"
                            >
                                {storyTitle}
                            </motion.h2>
                            <motion.p 
                                initial={{ y: 100, opacity: 0 }}
                                animate={isStoryInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="text-center lg:text-left text-xl text-[#3B4E6A]"
                            >
                                {storySubTitle}
                            </motion.p>
                        </div>

                        <div className="flex flex-col gap-8 text-[#3B4E6A] text-base">
                            <motion.p
                                initial={{ y: 100, opacity: 0 }}
                                animate={isStoryInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="text-center lg:text-left"
                            >
                                {storyText1}
                            </motion.p>

                            <motion.p
                                initial={{ y: 100, opacity: 0 }}
                                animate={isStoryInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="text-center lg:text-left"
                            >
                                {storyText2}
                            </motion.p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="hidden lg:block w-1/2">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={isStoryInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            >
                                <Image
                                    src={storyImage || '/placeholder.svg?height=767&width=748'}
                                    alt="Enywork en Formation du Personnel"
                                    width={948}
                                    height={967}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre Mission */}
            <section className="bg-[#F2F2F2] font-[poppins] py-20 px-4 md:px-8 lg:px-20">
                <div ref={missionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <div className="hidden lg:block w-1/2">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={isMissionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            >
                                <Image
                                    src={missionImage || '/placeholder.svg?height=767&width=748'}
                                    alt="Notre Mission"
                                    width={948}
                                    height={967}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-5">
                            <motion.h2 
                                initial={{ y: 100, opacity: 0 }}
                                animate={isMissionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="text-4xl lg:text-4xl text-center lg:text-left font-semibold text-[#1C2736]"
                            >
                                {missionTitle}
                            </motion.h2>
                            <motion.p 
                                initial={{ y: 100, opacity: 0 }}
                                animate={isMissionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="text-center lg:text-left text-xl text-[#3B4E6A]"
                            >
                                {missionSubTitle}
                            </motion.p>
                        </div>

                        <div className="flex flex-col gap-8 text-[#3B4E6A] text-base">
                            <motion.p
                                initial={{ y: 100, opacity: 0 }}
                                animate={isMissionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="text-center lg:text-left"
                            >
                                {missionText1}
                            </motion.p>

                            <motion.p
                                initial={{ y: 100, opacity: 0 }}
                                animate={isMissionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="text-center lg:text-left"
                            >
                                {missionText2}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre Vision */}
            <section className="bg-[#F2F2F2] font-[poppins] py-20 px-4 md:px-8 lg:px-20">
                <div ref={visionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-5">
                            <motion.h2 
                                initial={{ y: 100, opacity: 0 }}
                                animate={isVisionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="text-4xl lg:text-4xl text-center lg:text-left font-semibold text-[#1C2736]"
                            >
                                {visionTitle}
                            </motion.h2>
                            <motion.p 
                                initial={{ y: 100, opacity: 0 }}
                                animate={isVisionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="text-center lg:text-left text-xl text-[#3B4E6A]"
                            >
                                {visionSubTitle}
                            </motion.p>
                        </div>

                        <div className="flex flex-col gap-8 text-[#3B4E6A] text-base">
                            <motion.p
                                initial={{ y: 100, opacity: 0 }}
                                animate={isVisionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="text-center lg:text-left"
                            >
                                {visionText1}
                            </motion.p>

                            <motion.p
                                initial={{ y: 100, opacity: 0 }}
                                animate={isVisionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="text-center lg:text-left"
                            >
                                {visionText2}
                            </motion.p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="hidden lg:block w-1/2">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={isVisionInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            >
                                <Image
                                    src={visionImage || '/placeholder.svg?height=767&width=748'}
                                    alt="Notre Vision"
                                    width={948}
                                    height={967}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <StatisticsSection/>

            {/* Nos Valeurs */}
            <section className="bg-white font-[poppins] py-20 px-4 md:px-8 lg:px-20">
                <div ref={valuesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Colonne gauche */}
                    <div className="flex flex-col gap-5 max-w-lg mx-auto lg:mx-0">
                        <motion.h2
                            initial={{ y: 100, opacity: 0 }}
                            animate={isValuesView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-3xl lg:text-4xl text-center  font-semibold text-[#1C2736] lg:text-left"
                        >
                            {valuesTitle}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isValuesView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-xl text-center text-[#3B4E6A] lg:text-left"
                        >
                            {valuesSubTitle}
                        </motion.p>
                        <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isValuesView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-base text-[#3B4E6A] text-center lg:text-left "
                        >
                            {valuesText}
                        </motion.p>
                    </div>
                    {/* Colonne droite */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {/* Carte 1 */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isValuesView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 960, damping: 80, duration: 1, delay: 0.2 }}
                            className="w-full flex flex-col items-center justify-center bg-white rounded-lg shadow-lg py-10 transition-all duration-600 hover:scale-110"
                        >
                            <Crown className="w-10 h-10 text-[#E10919]" />
                            <h2 className="text-[#E10919] text-xl font-semibold mt-2">{values1}</h2>
                        </motion.div>
                        {/* Carte 2 */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isValuesView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 960, damping: 80, duration: 1.5, delay: 0.4 }}
                            className="w-full flex flex-col items-center justify-center bg-[#E10919] rounded-lg shadow-lg py-10 transition-all duration-600 hover:scale-110"
                        >
                            <Feather className="w-10 h-10 text-white" />
                            <h2 className="text-white text-xl font-semibold mt-2">{values2}</h2>
                        </motion.div>
                        {/* Carte 3 */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isValuesView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 960, damping: 80, duration: 2, delay: 0.6 }}
                            className="w-full flex flex-col items-center justify-center  md:bg-[#E10919] rounded-lg shadow-lg py-10 transition-all duration-600 hover:scale-110"
                        >
                            <Rocket className="w-10 h-10 text-[#E10919] md:text-white " />
                            <h2 className="text-[#E10919] md:text-white text-xl font-semibold mt-2">{values3}</h2>
                        </motion.div>
                        {/* Carte 4 */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isValuesView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 960, damping: 80, duration: 2.5, delay: 0.8 }}
                            className="w-full flex flex-col items-center justify-center bg-[#E10919] md:text-white md:bg-white rounded-lg shadow-lg py-10 transition-all duration-600 hover:scale-110"
                        >
                            <Lightbulb className="w-10 h-10 text-white md:text-[#E10919]" />
                            <h2 className="text-white md:text-[#E10919] text-xl font-semibold mt-2">{values4}</h2>
                        </motion.div>
                    </div>
                </div>
            </section>

        </main>
    )
}
