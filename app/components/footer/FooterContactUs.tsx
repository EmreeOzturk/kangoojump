import React from 'react'
import { MdPhone, MdMail, MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

const FooterContactUs = () => {
    return (
        <div className='flex flex-col items-start justify-center w-1/4'>
            <h3 className='font-bold text-3xl mb-10'>BIZE ULASIN</h3>
            <ul className='flex  flex-col items-start justify-center gap-2'>
                <li className='flex items-center gap-4 text-[16px]'><MdPhone /> +90 543 9466</li>
                <li className='flex items-center gap-4 text-[16px]'><MdMail /> info@aquaactive.com</li>
                <li className='flex items-center gap-4 text-[16px]'><BiWorld /> http://www.aquaactive.com.tr</li>
                <li className='flex items-center gap-4 text-[16px]'><MdAccessTimeFilled /> 9:00 - 18:00</li>
                <li className='flex items-center gap-4 text-[16px]'><MdLocationOn className="text-xl" /> Çarşı Mah. Seral Sk. No 17 ANTALYA/ALANYA</li>
            </ul>
        </div>
    )
}

export default FooterContactUs