import { StickyScroll } from '@/app/components/ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
    {
        title: "Hijyen ve Güvenlik İlkeleri",
        description:
            "Aqua Bike aktiviteleri, profesyonel ve lisanslı eğitmenler tarafından sağlanmaktadır. İtalyan tasarıma sahip su bisikleti, renkli ABS kapağı ile estetik bir görünüm sunarken aynı zamanda güvenli bir kullanım sağlar. Pedal çevirme rahatlığı için çıplak ayaklarla kullanılabilmektedir.",
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
        title: "Dayanıklılık",
        description:
            "Paslanmaz çelik AISI 316 L gövdeye sahip olan su bisikleti, dayanıklılığı ile öne çıkar. Hem ön hem de arka dengeyi destekleyen dört adet vantuz ve ön alt kısımda bulunan iki tekerlek, dayanıklı ve stabil bir kullanım sunar. Uzun ömürlü malzemelerle üretilmiş olup, havuza indirip çıkartma işlemlerinde kolaylık sağlar.",
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
        title: "Rehabilitasyon ve Fitness",
        description:
            " Su bisikleti, kullanım su derinliği ayarlanabilir özellikleri sayesinde rehabilitasyon ve fitness amaçlı kullanıma uygundur. Gidon ve sele ayarlanabilir özelliklere sahiptir, böylece kullanıcıların ihtiyaçlarına uygun bir deneyim sunar. Spor yaparken suyun direnci, kasları güçlendirir ve rehabilitasyon süreçlerine katkı sağlar. Bu özellikleriyle Aqua Bike, hem fiziksel formu korumak hem de rehabilitasyon süreçlerine destek olmak için ideal bir seçenektir.",
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
const AquaBikePage = () => {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    )
}

export default AquaBikePage