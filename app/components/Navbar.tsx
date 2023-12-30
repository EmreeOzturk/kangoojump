import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='flex gap-8 items-center text-md font-bold uppercase tracking-[1px]'>
            <div className='group'>
                <Link href="/about">
                    Hakkımızda
                </Link>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>
            <div className='group'>
                <Link href="/catalog">
                    Katalog
                </Link>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>
            <div className='group'>
                <Link href="/activities">
                    Aktiviteler
                </Link>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>
            <div className='group'>
                <Link href="/contact">
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