import FooterActivities from "./FooterActivities";
import FooterContactUs from "./FooterContactUs";
import FooterAboutUs from "./FooterAboutUs";
const Footer = () => {
  return (
    <div className="md:h-80 bg-zinc-950/80 text-slate-300 flex flex-col md:flex-row items-start pt-5 justify-between md:px-24 gap-6 md:gap-12">
      <FooterAboutUs />
      <FooterActivities />
      <FooterContactUs />
    </div>
  );
};

export default Footer;
