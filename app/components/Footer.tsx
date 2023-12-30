import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className='h-96 bg-slate-400 flex items-start justify-between p-24 gap-12'>
            <div className='flex flex-col items-start justify-center w-1/4'>
                <h3 className='font-bold text-3xl mb-10'>HAKKIMIZDA</h3>
                <Logo />
                <p>
                    Alanya merkezli kuruluşumuz, 2023 yılında kurulan ve spor ile sağlıklı yaşamı birleştiren benzersiz bir misyonla hareket eden bir kuruluştur.
                </p>
            </div>
            <div className='flex flex-col items-start justify-center w-1/4'>
                <h3 className='font-bold text-3xl mb-10'>AKTIVITELERIMIZ</h3>
            </div>
            <div className='flex flex-col items-start justify-center w-1/4'>
                <h3 className='font-bold text-3xl mb-10'>KARIYER</h3>
            </div>
            <div className='flex flex-col items-start justify-center w-1/4'>
                <h3 className='font-bold text-3xl mb-10'>BIZE ULASIN</h3>
                <ul>
                    <li>+90 543 9466</li>
                    <li>info@aquaactive.com</li>
                    <li>http://www.aquaactive.com.tr</li>
                    <li>Çarşı Mah. Seral Sk. No 17 ANTALYA/ALANYA</li>
                    <li>9:00 - 18:00</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer