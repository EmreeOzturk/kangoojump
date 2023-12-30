import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='flex gap-10 items-center text-[#014FF4] font-bold'>
            <Link href="/">
                Anasayfa
            </Link>
            <Link href="/about">
                Hakkımızda
            </Link>
            <Link href="/catalog">
                Katalog
            </Link>
            <Link href="/contact">
                Iletisim
            </Link>
            <Link href="/activities">
                Aktiviteler
            </Link>
        </nav>
    )
}

export default Navbar