"use client";
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

type DropdownProps = {
    setShow: (show: boolean) => void
}

const Dropdown: React.FC<DropdownProps> = (
    {
        setShow
    }
) => {
    return (
        <div
            onMouseLeave={() => setShow(false)}
            className='absolute top-14 border border-white rounded-lg -left-32 gap-2 bg-gray-800/50 w-80 text-white flex flex-col items-start justify-start p-4'>
            <a className='activities-item' href="/activities/kangoo-jumps">
                Kangoo Jumps
            </a>
            <a className='activities-item' href="/activities/aqua-jump">
                Aqua Jump
            </a>
            <a className='activities-item' href="/activities/aqua-fitness">
                Aqua Fitness
            </a>
            <a className='activities-item' href="/activities/aqua-bike">
                Aqua Bike
            </a>
            <a className='activities-item' href="/activities/aqua-step">
                Aqua Step
            </a>
        </div>
    )
}

const Navbar = () => {
    const [show, setShow] = useState(false)
    const pathname = usePathname()
    return (
        <nav className='flex gap-8 items-center text-md font-bold uppercase tracking-[1px]'>
            <div className='group'>
                <a
                    className={clsx(pathname === "/about" && "text-[#C4FE01]")} href="/about">
                    Hakkımızda
                </a>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>
            <div className='group'>
                <Link
                    onMouseEnter={
                        () => { setShow(false) }
                    }
                    className={clsx(pathname === "/catalog" && "text-[#C4FE01]")} href="/catalog" >
                    Katalog
                </Link>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>
            <div className='group relative'>
                <button
                    onMouseEnter={
                        () => { setShow(true) }
                    }
                    className={clsx("uppercase", pathname.startsWith('/activities') && "text-[#C4FE01]")}  >
                    Aktiviteler
                </button>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
                {show && <Dropdown setShow={setShow} />}
            </div>
            <div className='group'>
                <Link
                    onMouseEnter={
                        () => { setShow(false) }
                    }
                    className={clsx(pathname === "/contact" && "text-[#C4FE01]")} href="/contact" >
                    Iletisim
                </Link>
                <div
                    className='h-1 w-0 bg-[#C4FE01] rounded-full group-hover:w-full transition-all duration-500 mt-1'
                ></div>
            </div>

        </nav >
    )
}

export default Navbar

// text-[#014FF4]