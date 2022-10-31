import webDevLogo from "../assets/web-dev.png";
import mobileDevLogo from "../assets/m-dev.png";
import productDesignLogo from "../assets/pro-des.png";
import maintenanceLogo from "../assets/main.png";
import cmsDevLogo from "../assets/cms-dev.png";
import payLogo from "../assets/pay.png";
import ServiceCard from "../components/service-card";

const services = [
  {
    logo: webDevLogo,
    title: "Website development",
    desc: "High-performance website to reach out more your potential customers",
  },
  {
    logo: mobileDevLogo,
    title: "Mobile apps development",
    desc: "To accelerate your business process",
  },
  {
    logo: productDesignLogo,
    title: "Digital product design",
    desc: "Complete digital product creations from UX prototyping to final UI designs",
  },
  {
    logo: maintenanceLogo,
    title: "Maintenance",
    desc: "Make sure your digital environment keep online and updated",
  },
  {
    logo: cmsDevLogo,
    title: "CMS development",
    desc: "You can update your website content yourself",
  },
  {
    logo: payLogo,
    title: "Integrated payment gateway",
    desc: "Simplify the payment system with just one step",
  },
];

export default function ServiceList() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {services.map(({ logo, title, desc }, idx) => (
        <ServiceCard key={idx} logo={logo} title={title} desc={desc} />
      ))}
    </div>
  );
}
