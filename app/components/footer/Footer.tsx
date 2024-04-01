import FooterActivities from './FooterActivities';
import FooterCarrier from './FooterCarrier';
import FooterContactUs from './FooterContactUs';
import FooterAboutUs from './FooterAboutUs';
const Footer = () => {
    return (
        <div className='h-80 bg-black/40 text-slate-300 flex items-center justify-between px-24 gap-12'>
            <FooterAboutUs />
            <FooterActivities />
            <FooterCarrier />
            <FooterContactUs />
        </div>
    )
}

export default Footer