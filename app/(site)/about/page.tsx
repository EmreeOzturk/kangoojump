import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal"
import Image from "next/image";

const content = [
  {
    title: "Misyonumuz",
    description:
      "Alanya merkezli Aqua Active, 2023 yılında kurulan ve benzersiz bir spor ve sağlıklı yaşam misyonu ile öne çıkan bir kuruluştur. Aqua Active, sporun sadece fiziksel bir aktivite olmanın ötesinde, motive edici ve yenilikçi bir deneyim olması vizyonuyla faaliyet göstermektedir. Aqua Jump, Aqua Step, Aqua Spinning, Aquafitness, Kangoo Jumps gibi geniş bir spor yelpazesi sunarak katılımcılarına çeşitli seçenekler sunmayı amaçlamaktadır.",
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
    description:
      "Müşteri memnuniyetini temel ilke olarak benimseyen Aqua Active, uzman ekibiyle birlikte Alanya’da spor ve sağlıklı yaşam konusunda öncü bir rol oynamayı hedeflemektedir. Sağlıklı yaşamın ve sporum birleşiminden doğan bu misyon doğrultusunda, her spor branşını özenle tasarlayarak bireylerin sadece bedensel sağlıklarına değil, aynı zamanda zihinsel ve sosyal bienallerine de katkı sağlamayı amaçlamaktadır.",
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
    description:
      "Aqua Active, sadece fiziksel aktivite sınırının ötesine geçerek, sporun yaşam kalitesi ve genel sağlık üzerindeki olumlu etkilerini vurgulamaktadır. Bu bağlamda, Alanya’da turistik bir destinasyon olarak sunduğu spor ve sağlıklı yaşam hizmetleri ile hem yerel halka hem de ziyaretçilere unutulmaz deneyimler yaşatmayı amaçlamaktadır. Geleceğe yönelik sürdürülebilir bir başarı anlayışıyla, Aqua Active, her geçen gün kaliteli hizmet anlayışını daha da güçlendirmekte ve sporu yaşam tarzı haline getirmeyi misyon edinmektedir.",
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
    title: "Vizyonumuz",
    description:
      "Turizm sektörüne değer katan Aqua Active, dünya genelinde spor ve sağlıklı yaşam konusunda uluslararası bir referans noktası olma vizyonuyla hareket etmektedir. Sadece Alanya’nın güzelliklerini turistlere sunmakla kalmayıp, aynı zamanda sağlıklı yaşam ve sporun yaşam kalitesine kattığı değeri vurgulayarak destinasyona ek bir anlam katmayı amaçlamaktadır. Aqua Active, bu çerçevede topluma sporu sevdirmeyi, yaşam kalitesini arttırmayı ve sağlıklı bir yaşam tarzını teşvik etmeyi misyon edinmiştir.",
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
    description:
      "Sürdürülebilir bir başarı hedefiyle Aqua Active, her geçen gün kaliteli hizmet anlayışını daha da güçlendirmekte ve sporun yaşam tarzı haline gelmesini desteklemektedir. Spor ve sağlıklı yaşamın turizme kattığı değeri vurgulayarak, Aqua Active, ziyaretçilere unutulmaz deneyimler yaşatmanın yanı sıra, sağlıklı bir yaşamın ve aktif bir tatilin tadını çıkarmalarına olanak sağlamayı amaçlamaktadır.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/5.webp"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    description:
      "Aqua Active, uluslararası alanda marka değerini artırarak spor ve sağlıklı yaşam konusunda lider bir konumda bulunma hedefine odaklanmaktadır. Bu doğrultuda, turistlere sadece fiziksel değil aynı zamanda zihinsel ve sosyal bir deneyim sunarak destinasyona katkı sağlamayı sürdürmektedir. Bu kararlılıkla Aqua Active, herkesi sağlıklı bir yaşama davet ederek, sporun ve aktif yaşamın güzelliklerini dünya geneline yaymayı amaçlamaktadır.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/6.webp"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const About = () => {

  return <StickyScroll content={content as { title: string; description: string; content?: any; }[]} />
  // <div className='w-full flex flex-col items-center justify-start py-20 gap-4 bg-white '>
  {/* <h1 className='font-bold text-5xl uppercase'>Misyonumuz</h1>
      <div className="flex flex-col items-center justify-center gap-4 text-center text-lg max-w-5xl">
        <p>Alanya merkezli Aqua Active, 2023 yılında kurulan ve benzersiz bir spor ve sağlıklı yaşam misyonu ile öne çıkan bir kuruluştur. Aqua Active, sporun sadece fiziksel bir aktivite olmanın ötesinde, motive edici ve yenilikçi bir deneyim olması vizyonuyla faaliyet göstermektedir. Aqua Jump, Aqua Step, Aqua Spinning, Aquafitness, Kangoo Jumps gibi geniş bir spor yelpazesi sunarak katılımcılarına çeşitli seçenekler sunmayı amaçlamaktadır.</p>
        <p>Müşteri memnuniyetini temel ilke olarak benimseyen Aqua Active, uzman ekibiyle birlikte Alanya’da spor ve sağlıklı yaşam konusunda öncü bir rol oynamayı hedeflemektedir. Sağlıklı yaşamın ve sporum birleşiminden doğan bu misyon doğrultusunda, her spor branşını özenle tasarlayarak bireylerin sadece bedensel sağlıklarına değil, aynı zamanda zihinsel ve sosyal bienallerine de katkı sağlamayı amaçlamaktadır.</p>
        <p>Aqua Active, sadece fiziksel aktivite sınırının ötesine geçerek, sporun yaşam kalitesi ve genel sağlık üzerindeki olumlu etkilerini vurgulamaktadır. Bu bağlamda, Alanya’da turistik bir destinasyon olarak sunduğu spor ve sağlıklı yaşam hizmetleri ile hem yerel halka hem de ziyaretçilere unutulmaz deneyimler yaşatmayı amaçlamaktadır. Geleceğe yönelik sürdürülebilir bir başarı anlayışıyla, Aqua Active, her geçen gün kaliteli hizmet anlayışını daha da güçlendirmekte ve sporu yaşam tarzı haline getirmeyi misyon edinmektedir.</p>
      </div>

      <h1 className='font-bold text-5xl uppercase mt-10'>Vizyonumuz</h1>
      <div className="flex flex-col items-center justify-center gap-4 text-center text-lg max-w-5xl">
        <p>Turizm sektörüne değer katan Aqua Active, dünya genelinde spor ve sağlıklı yaşam konusunda uluslararası bir referans noktası olma vizyonuyla hareket etmektedir. Sadece Alanya’nın güzelliklerini turistlere sunmakla kalmayıp, aynı zamanda sağlıklı yaşam ve sporun yaşam kalitesine kattığı değeri vurgulayarak destinasyona ek bir anlam katmayı amaçlamaktadır. Aqua Active, bu çerçevede topluma sporu sevdirmeyi, yaşam kalitesini arttırmayı ve sağlıklı bir yaşam tarzını teşvik etmeyi misyon edinmiştir.</p>
        <p>Sürdürülebilir bir başarı hedefiyle Aqua Active, her geçen gün kaliteli hizmet anlayışını daha da güçlendirmekte ve sporun yaşam tarzı haline gelmesini desteklemektedir. Spor ve sağlıklı yaşamın turizme kattığı değeri vurgulayarak, Aqua Active, ziyaretçilere unutulmaz deneyimler yaşatmanın yanı sıra, sağlıklı bir yaşamın ve aktif bir tatilin tadını çıkarmalarına olanak sağlamayı amaçlamaktadır.</p>
        <p>Aqua Active, uluslararası alanda marka değerini artırarak spor ve sağlıklı yaşam konusunda lider bir konumda bulunma hedefine odaklanmaktadır. Bu doğrultuda, turistlere sadece fiziksel değil aynı zamanda zihinsel ve sosyal bir deneyim sunarak destinasyona katkı sağlamayı sürdürmektedir. Bu kararlılıkla Aqua Active, herkesi sağlıklı bir yaşama davet ederek, sporun ve aktif yaşamın güzelliklerini dünya geneline yaymayı amaçlamaktadır.</p>
      </div> */}

  {/* </div> */ }



}

export default About