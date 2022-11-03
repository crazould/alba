import webDevLogo from "../assets/web-dev.png";
import mobileDevLogo from "../assets/m-dev.png";
import productDesignLogo from "../assets/pro-des.png";
import maintenanceLogo from "../assets/main.png";
import cmsDevLogo from "../assets/cms-dev.png";
import payLogo from "../assets/pay.png";
import arrow from "../assets/Arrow.svg";

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
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8 mb-12">
      {services.map(({ logo, title, desc }, idx) => (
        <li
          key={idx}
          className="group bg-white rounded-xl border-2 border-zinc-400 cursor-pointer duration-200 hover:border-[var(--accent-color)] p-6"
        >
          <img src={logo} alt={`${title} logo`} className="mb-4" />
          <h3 className="text-xl font-bold mb-2 text-[var(--accent-color)] flex items-center">
            {title}
            <span
              className="opacity-0 group-hover:opacity-100 duration-200"
              style={{
                backgroundImage: `url(${arrow})`,
                display: "inline-block",
                width: "24px",
                height: "24px",
                marginLeft: "8px",
              }}
            ></span>
          </h3>
          <p>{desc}</p>
        </li>
      ))}
    </ul>
  );
}
