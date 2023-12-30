"use client";
import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
const WhatsappButton = () => {
    const path = usePathname()
    const [show, setShow] = useState(false)
    const { scrollY } = useScroll()
    const handleScroll = () => {
        if (scrollY.get() > 50) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        handleScroll()
        scrollY.on("change", handleScroll)
        //eslint-disable-next-line
    }, [scrollY])
    if (path !== "/") {
        return (
            <div className='h-16 w-16 rounded-full cardWP fixed flex items-center justify-center bottom-6 right-6 z-20'>
                <Link href="https://wa.me/905439466" target="_blank" rel="noopener noreferrer">
                    <Image src='/wp.webp' alt='whatsapp' width={36} height={36} />
                </Link>
            </div>
        )
    }
    return (
        <motion.div
            variants={
                {
                    visible: {
                        opacity: 1,

                    },
                    hidden: {
                        opacity: 0
                    }
                }
            }
            initial="hidden"
            animate={
                show ? "visible" : "hidden"
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='h-16 w-16 rounded-full cardWP fixed flex items-center justify-center bottom-6 right-6 z-20'>
            <Link href="https://wa.me/905439466" target="_blank" rel="noopener noreferrer">
                <Image src='/wp.webp' alt='whatsapp' width={36} height={36} />
            </Link>
        </motion.div>
    )
}

export default WhatsappButton