"use client";
import React from 'react'
import { motion } from 'framer-motion'
const Banner = () => {
    return (
        <div
            className='min-h-screen w-screen relative bg-fixed '>
            <video autoPlay loop muted className='object-center object-cover absolute w-full h-full' >
                <source src="/static/homevid.mp4" type="video/mp4" />
            </video>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} className="absolute text-[20rem] top-0 right-0 left-0 text-center mix-blend-exclusion select-none  leading-[26rem] ">
                <h1 className="text-white font-extrabold tracking-[1.5rem] ">
                    AQUA
                </h1>
                <h1 className="text-white font-extrabold -tracking-tighter">
                    ACTIVE
                </h1>
            </motion.div>
        </div>
    )
}

export default Banner