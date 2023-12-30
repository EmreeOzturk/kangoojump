import React from 'react'
import logo from '@/public/images/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
interface LogoProps {
    size?: 'sm' | 'lg'
}
const Logo: React.FC<LogoProps> = (
    { size = 'sm' }
) => {
    const w = size === 'sm' ? 150 : 450
    const h = size === 'sm' ? 50 : 150
    return (
        <div className="flex items-center gap-2">
            <Link href="/">
                <Image src={logo} alt="logo" width={w} height={h} />
            </Link>
        </div>
    )
}

export default Logo