import { StickyScroll } from '@/app/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import React from 'react'
const content = [
    {
        title: "Aqua Active – Aqua Jumping: Sağlıklı Yaşamın Sırrı",
        description:
            "Aqua Active olarak sunmuş olduğumuz Aqua Jumping aktiviteleri, profesyonel ve lisanslı eğitmenlerimiz tarafından gerçekleştirilmektedir. Bu etkileyici aktivite için kullanılan ekipmanlar, paslanmaz çelik malzemelerden üretilmiş olup CE belgesine sahiptir.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/1.webp"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Hijyen ve Güvenlik İlkeleri",
        description:
            "Aqua Jumping ekipmanları, havuz hijyenine zarar vermez ve klor dengesini olumsuz etkilemez. Açık ve kapalı havuzlarda kullanılabilen ürünümüz, sağlık ve performans odaklı spor yapma imkanı sunar. Ayaklardaki beş adet vantuz, kullanıcılara istikrarlı bir duruş sağlar ve bu sayede aktivite sırasında yaralanma riskini en aza indirir.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/2.webp"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Dayanıklılık ve Estetik Tasarım",
        description:
            "İnox AISI 316 L paslanmaz çelik malzeme kullanılarak üretilen Aqua Jumping, dayanıklılığı ve estetik tasarımıyla öne çıkıyor. Çapı 91,5 x h 22 cm boyutlarındaki ürün, 5 kg ağırlığıyla kolay taşınabilir. Beş adet vantuz sayesinde istikrarlı bir performans sunan Aqua Jumping, 100 – 140 cm su derinliğinde rahatlıkla kullanılabilir.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/3.webp"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Rehabilitasyon ve Fitness İçin İdeal Çözüm",
        description:
            "Rehabilitasyon ve fitness egzersizleri için özel olarak tasarlanan Aqua Jumping, suyun direncini kullanarak vücut üzerinde hafif bir etki yaratır. Bu sayede eklem ve kasları güçlendirir, aynı zamanda kalori yakımını artırır. Sağlıklı yaşamın anahtarını elinizde tutun ve Aqua Jumping ile eğlenceli bir su sporu deneyimi yaşayın.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/images/4.webp"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    }
];

const AquaJumpPage = () => {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    )
}

export default AquaJumpPage