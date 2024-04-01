import { StickyScroll } from '@/app/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import React from 'react'


const content = [
    {
        title: "Aqua Active – Aqua Step",
        description:
            "Aqua Active olarak sunmuş olduğumuz Aqua Step aktiviteleri, profesyonel ve lisanslı eğitmenlerimiz tarafından gerçekleştirilmektedir. Bu etkileyici aktivite için kullanılan ekipmanlar, paslanmaz çelik malzemelerden üretilmiş olup CE belgesine sahiptir.",
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
        title: "Hijyen ve Güvenlik Standartları",
        description:
            "Aqua Step aktiviteleri, profesyonel ve lisanslı eğitmenlerimiz tarafından yönetilmekte olup havuz hijyenine herhangi bir zarar vermez ve klor dengesini olumsuz etkilemez. Bu sayede kullanıcılar, temiz ve güvenli bir ortamda su sporlarının keyfini çıkarabilirler. Alt tarafında bulunan altı adet vantuzlar, aktivite sırasında sağlam bir duruş sağlayarak güvenlik standartlarını en üst düzeye çıkarır.",
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
            "Aqua Step, polietilen malzeme kullanılarak üretilmiş olup dayanıklılığı ön planda tutar. Estetik tasarımıyla da dikkat çeken bu aktivite ekipmanı, 70 x 35 x h 19 cm boyutlarındadır ve 6 kg ağırlığı ile taşınabilir. Hem dayanıklılığı hem de şık görünümüyle Aqua Step, uzun ömürlü ve göz alıcı bir kullanım sunar.",
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
        title: "Rehabilitasyon ve Fitness İçin Özel Çözüm",
        description:
            "Aqua Step, alt tarafındaki vantuzlar sayesinde sabit duruş sağlamasıyla rehabilitasyon ve fitness egzersizleri için özel olarak tasarlanmıştır. Kullanım su derinliği 100 – 140 cm arasında değişmektedir, bu da farklı fitness seviyelerine uygun bir çözüm sunar. Hem eğlenceli hem de etkili olan Aqua Step, su direncini kullanarak vücut üzerinde hafif bir etki yaratır, böylece kullanıcılar eklem ve kaslarını güçlendirirken aynı zamanda kalori yakımını artırabilirler.",
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
    }
];
const AquaStepPage = () => {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    )
}

export default AquaStepPage