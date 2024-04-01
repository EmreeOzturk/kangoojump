import Link from 'next/link'
const FooterActivities = () => {
    return (
        <div className='flex flex-col items-start justify-center w-1/4'>
            <h3 className='font-bold text-3xl mb-10'>AKTIVITELERIMIZ</h3>
            <ul className='flex flex-col items-start justify-center gap-2'>
                <li className='text-[16px]'>
                    <Link href='/activities/kangoo-jumps'>
                        Kangoo Jump
                    </Link>
                </li>
                <li className='text-[16px]'>
                    <Link href='/activities/aqua-jump'>
                        Aqua Jump
                    </Link>
                </li>
                <li className='text-[16px]'>
                    <Link href='/activities/aqua-fitness'>
                        Aqua Fitness
                    </Link>
                </li>
                <li className='text-[16px]'>
                    <Link href='/activities/aqua-bike'>
                        Aqua Bike
                    </Link>
                </li>
                <li className='text-[16px]'>
                    <Link href='/activities/aqua-step'>
                        Aqua Step
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterActivities