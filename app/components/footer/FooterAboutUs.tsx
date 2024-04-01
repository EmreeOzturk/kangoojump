import React from 'react'
import Logo from '../Logo'
const FooterAboutUs = () => {
    return (
        <div className='flex flex-col items-start justify-center w-1/4'>
            <h3 className='font-bold text-3xl mb-10'>HAKKIMIZDA</h3>
            <Logo />
            <p>
                Alanya merkezli kuruluşumuz, 2023 yılında kurulan ve spor ile sağlıklı yaşamı birleştiren benzersiz bir misyonla hareket eden bir kuruluştur.
            </p>
        </div>
    )
}

export default FooterAboutUs