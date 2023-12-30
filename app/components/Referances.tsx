import React from 'react'
import { brands } from '../brands'
import Image from 'next/image'
const Referances = () => {
    return (
        <div className='w-screen h-[300px] flex items-center justify-center'>
            {/* <div className='w-full h-fit flex items-center justify-center flex-col border-4'> */}
            <div className='flex w-[1800px] select-none brand'>
                <div className='flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full '>
                    {brands.map((brand, i) => {
                        return (
                            <div key={`b_${i}`} className='grid  place-items-center rounded-full w-[300px] h-[300px] relative'>
                                <Image className='object-contain aspect-auto rounded-full' fill src={brand.image} alt={brand.alt} />
                            </div>
                        )
                    })
                    }
                </div>
                <div className='flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full '>
                    {
                        brands.map((brand, i) => {
                            return (
                                <div key={`b_${i}`} className='grid  place-items-center rounded-full w-[300px] h-[300px] relative'>
                                    <Image className='object-contain aspect-auto rounded-full ' fill src={brand.image} alt={brand.alt} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Referances