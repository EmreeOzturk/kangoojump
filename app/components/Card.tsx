'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';


interface CardProps {
    feature: {
        title: string
        description: string
        color: string
        src: string
    }
    range: number[]
    targetScale: number
    progress: any
    i: number
}
const Card: React.FC<CardProps> = (
    { feature, range, targetScale, progress, i }
) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);
    return (
        <div ref={container} className='h-screen flex items-center justify-center sticky top-0'>
            <motion.div style={{ backgroundColor: feature.color, scale, top: `calc(-5vh + ${i * 25}px)` }} className='flex flex-col relative -top-[25%]  h-[600px] w-[1000px] rounded-2xl p-[50px] origin-top'>
                <h2 className='text-center text-[28px]'>{feature.title}</h2>
                <div className="flex h-full mt-[50px] gap-12">
                    <div className="w-[40%] relative top-[10%]">
                        <p className='text-lg first-letter:text-[28px] first-letter:font-serif'>{feature.description}</p>

                    </div>

                    <div className="relative w-[60%] h-full rounded-3xl overflow-hidden">
                        <motion.div
                            className="w-full h-full"
                            style={{ scale: imageScale }}
                        >
                            <Image
                                fill
                                src={feature.src}
                                alt="image"
                                className='object-cover'
                            />
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default Card