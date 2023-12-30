import React from 'react'
import logo from '@/public/images/logo.webp'
import Image from 'next/image'
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
            <Image src={logo} alt="logo" width={w} height={h} />
        </div>
    )
}

export default Logo