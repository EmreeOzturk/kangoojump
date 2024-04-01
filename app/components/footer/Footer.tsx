import FooterActivities from './FooterActivities';
import FooterCarrier from './FooterCarrier';
import FooterContactUs from './FooterContactUs';
import FooterAboutUs from './FooterAboutUs';
const Footer = () => {
    return (
        <div className='md:h-80 bg-black/40 text-slate-300 flex flex-col md:flex-row items-center justify-between md:px-24 gap-6 md:gap-12'>
            <FooterAboutUs />
            <FooterActivities />
            {/* <FooterCarrier /> */}
            <FooterContactUs />
        </div>
    )
}

export default Footer