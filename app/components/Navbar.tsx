"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className='flex gap-8 items-center text-md font-bold uppercase tracking-[1px]'>
            <div className='group'>
                <Link className={clsx(pathname === "/about" && "text-[#C4FE01]")} href="/about" scroll={false}>
                    Hakkımızda
                </Link>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>
            <div className='group'>
                <Link className={clsx(pathname === "/catalog" && "text-[#C4FE01]")} href="/catalog" scroll={false}>
                    Katalog
                </Link>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>
            <div className='group'>
                <Link className={clsx(pathname === "/activities" && "text-[#C4FE01]")} href="/activities" scroll={false}>
                    Aktiviteler
                </Link>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>
            <div className='group'>
                <Link className={clsx(pathname === "/contact" && "text-[#C4FE01]")} href="/contact" scroll={false}>
                    Iletisim
                </Link>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>


        </nav>
    )
}

export default Navbar

// text-[#014FF4]