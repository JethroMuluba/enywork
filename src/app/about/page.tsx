'use client'

import HeroForAll from "@/components/hero-for-all"
import data from '@/data/data.json'
import Image from "next/image"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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

    // Créer des refs séparés pour chaque section
    const storyRef = useRef(null);
    const missionRef = useRef(null);
    const visionRef = useRef(null);

    // Créer des hooks useInView séparés
    const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
    const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });
    const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" });

    return (
        <main className="min-h-screen font-[poppins] pt-[92px] lg:pt-[124px]">
            <HeroForAll title={getTitle} subTitle={getSubTitle} cover={getCover} pattern={getPattern} />
            
            {/* Notre Histoire */}
            <section className="bg-[#F2F2F2] font-[poppins] py-20 px-4 md:px-8 lg:px-35">
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
            <section className="bg-[#F2F2F2] font-[poppins] py-20 px-4 md:px-8 lg:px-35">
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
            <section className="bg-[#F2F2F2] font-[poppins] py-20 px-4 md:px-8 lg:px-35">
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
        </main>
    )
}
