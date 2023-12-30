import React from 'react'

const SiteLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        // <div className='flex flex-col items-center justify-center relative'>
        <div className='   w-full relative'>
            <div className='h-[40vh] bg-sea bg-cover'>
            </div>
            {children}
        </div>
        // </div>
    )
}

export default SiteLayout