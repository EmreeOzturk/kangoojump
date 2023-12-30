import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='flex gap-8 items-center text-md font-bold uppercase tracking-[1px]'>
            <Link href="/about">
                Hakkımızda
            </Link>
            <Link href="/catalog">
                Katalog
            </Link>
            <Link href="/activities">
                Aktiviteler
            </Link>
            <Link href="/contact">
                Iletisim
            </Link>
        </nav>
    )
}

export default Navbar

// text-[#014FF4]