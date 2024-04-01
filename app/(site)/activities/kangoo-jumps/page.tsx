import { StickyScroll } from '@/app/components/ui/sticky-scroll-reveal'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

export const content = [
    {
        title: "Kangoo Jumps: Sağlığınıza Yepyeni Bir Yaklaşım",
        description:
            "Kangoo Jumps aktivitesi, uzman ve lisanslı eğitmenlerimiz tarafından profesyonelce yönetilmektedir. Aqua Active’in sağladığı bu enerji dolu aktivitede, Kangoo Jumps’ın orijinal ve patentli ürünleri kullanılarak, hem eğlenceli hem de etkili bir antrenman deneyimi sunulmaktadır.",
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
        title: "Fiziksel Rahatlıklar Üzerindeki Etkileri",
        description:
            "  Kangoo Jumps, birçok fiziksel rahatsızlık üzerinde olumlu etkiler sağlar. Kardiyovasküler sistemden lenfatik sisteme, kan dolaşımından metabolizmanın düzenlenmesine kadar geniş bir yelpazede etkileşimde bulunur. Trigliserit, kolesterol, şeker hastalığı ve tansiyon gibi sorunlarda da pozitif etkiler sunar. Ayrıca, duruş bozukluklarına karşı da destek sağlar.",
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
        title: "Mental Sağlık ve Koordinasyon Yeteneği",
        description:
            "Sadece fiziksel sağlığa değil, Kangoo Jumps aynı zamanda mental sağlığa da katkıda bulunur. Uyku problemlerini azaltır, koordinasyon yeteneğini artırır ve beyin fonksiyonlarını hızlandırır. Dikkat artışını düzenler ve geliştirir. Bu, günlük yaşantınıza daha odaklı ve enerjik bir şekilde yaklaşmanızı sağlar.",
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
        title: "Kemik Sağlığı ve Kalori Yakımı",
        description:
            "Kangoo Jumps aktivitesi, tüm vücutta etkili bir şekilde çalışarak aylık %3 oranında kemik gelişimine katkıda bulunur. Bu, kemik sağlığını desteklemenin yanı sıra genel vücut tonusunu da artırır. Başlangıçta 1 saatte 600 ile 800 kcal/h yakılabilirken, 2-3 ay içinde bu rakam 1200-1500 kcal/h’ye çıkabilir. Sağlıklı yaşam için atılan her adım, Aqua Active’in sunduğu Kangoo Jumps ile daha eğlenceli ve etkili hale geliyor. Siz de bu benzersiz aktiviteyle tanışın ve sağlığınıza yeniden bir enerji katın!",
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

]

const KangooJumpPage = () => {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    )
}

export default KangooJumpPage