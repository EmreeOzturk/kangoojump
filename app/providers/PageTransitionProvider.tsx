"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../components/Logo';

const PageTransitionProvider = (
    { children }: { children: React.ReactNode }
) => {
    const path = usePathname()
    return (
        <AnimatePresence
            mode='wait'
        >
            <motion.div
                key={path}
            >
                {children}
                <motion.div className='slide-in '
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Logo size="lg" />
                </motion.div>
                <motion.div className='slide-out text-white'
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Logo size="lg" />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransitionProvider