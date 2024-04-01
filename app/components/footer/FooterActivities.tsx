const FooterActivities = () => {
    return (
        <div className='flex flex-col w-screen items-start justify-center p-4 md:p-0 md:w-1/4'>
            <h3 className='font-bold text-3xl mb-10'>AKTIVITELERIMIZ</h3>
            <ul className='flex flex-col items-start justify-center gap-2'>
                <li className='text-[16px]'>
                    <a href='/activities/kangoo-jumps'>
                        Kangoo Jump
                    </a>
                </li>
                <li className='text-[16px]'>
                    <a href='/activities/aqua-jump'>
                        Aqua Jump
                    </a>
                </li>
                <li className='text-[16px]'>
                    <a href='/activities/aqua-fitness'>
                        Aqua Fitness
                    </a>
                </li>
                <li className='text-[16px]'>
                    <a href='/activities/aqua-bike'>
                        Aqua Bike
                    </a>
                </li>
                <li className='text-[16px]'>
                    <a href='/activities/aqua-step'>
                        Aqua Step
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FooterActivities