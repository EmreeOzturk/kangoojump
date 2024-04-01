'use client';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Card from './Card'
import { features } from '@/app/features'
const Cards = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })
    return (
        <main ref={container} className="relative">
            {features.map((feature, i) => {
                const targetScale = 1 - ((features.length - i) * 0.05);
                return (
                    <Card key={`p_${i}`} i={i} feature={feature} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                )
            })}

        </main>
    )
}

export default Cards