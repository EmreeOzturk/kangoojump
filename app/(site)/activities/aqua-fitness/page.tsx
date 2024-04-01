import { StickyScroll } from '@/app/components/ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
    {
        title: "Aqua Active – Aqua Fitness: Sağlıklı Yaşamın Sırrı",
        description:
            " Aqua Active olarak sunduğumuz Aqua Fitness aktiviteleri, uzman profesyoneller ve lisanslı eğitmenlerimiz tarafından yönetilmektedir. Bu etkileyici aktiviteler, suyun direncini kullanarak sağlıklı yaşamı desteklemeyi amaçlar. Aynı özeni, hijyen ve güvenlik standartlarına da taşıyoruz.",
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
        title: "Profesyonel Eğitim ve Deneyim",
        description:
            "Aqua Fitness aktivitelerimiz, alanında uzmanlaşmış eğitmen kadromuz tarafından gerçekleştirilmektedir. Sağlıklı yaşam hedeflerinize ulaşmanıza rehberlik etmek için profesyonel deneyimimizi kullanıyoruz.",
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
        title: "Yüksek Kaliteli Ekipmanlar ve Hijyen Standartları",
        description:
            " Aqua Fitness aktivitelerimiz için kullanılan ekipmanlar, CE belgesine sahip paslanmaz çelik malzemelerden üretilmiştir. Aynı zamanda Aqua Fitness dünyasında hijyen standartlarına da önem veriyoruz. Kullanılan dumbeller, su aktiviteleri için ideal olan yumuşak tutuşlu PE foam malzemeden üretilmiştir. Bu malzeme, su içinde hafif bir tutuş sağlar ve su altına girdiklerinde hijyen standartlarına uygun bir deneyim sunar.",
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
        title: "Su Direnciyle Etkili Antrenman ve Ergonomik Tasarım",
        description:
            "Aqua Fitness aktiviteleri, suyun direncini kullanarak vücutta hafif bir etki yaratır. Bu, kasları güçlendirir, dayanıklılığı artırır ve tonusunuzu geliştirir. Yumuşak tutuşlu sert köpük dumbellerin ergonomik tasarımı, kullanıcıların su altında etkili bir şekilde çalışma yapmalarına uygun olacak şekilde düşünülmüş, pratik bir yaklaşıma sahiptir.",
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
    },
    {
        title: "Rehabilitasyon ve Fitness İçin Uygun",
        description:
            "Aqua Fitness, hem rehabilitasyon hem de fitness egzersizleri için uygundur. Su direncini kullanmak, eklemleri korurken aynı zamanda kalori yakımını artırır. Aqua fitness aktiviteleri, profesyonel ve lisanslı eğitmenler tarafından verilerek rehabilitasyon ve fitness egzersizleri için ideal bir çözüm sunar.",
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
const AquaFitnessPage = () => {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    )
}

export default AquaFitnessPage