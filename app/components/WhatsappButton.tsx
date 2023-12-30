import Image from 'next/image'
import Link from 'next/link'
const WhatsappButton = () => {
    return (
        <div className='h-16 w-16 rounded-full cardWP fixed flex items-center justify-center bottom-6 right-6 z-20'>
            <Link href="https://wa.me/905439466" target="_blank" rel="noopener noreferrer">
                <Image src='/wp.webp' alt='whatsapp' width={36} height={36} />
            </Link>
        </div>
    )
}

export default WhatsappButton