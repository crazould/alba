import hippoThumbnail from "../assets/hippo.png";
import homelivingThumbnail from "../assets/homeliving.png";
import illiosThumbnail from "../assets/illios.png";

const portfolios = [
  {
    thumbnail: illiosThumbnail,
    type: "Mobile apps",
    title: "ILIOS app (B2B E-commerce)",
    desc: "Has a unique selling point where not all companies offer applications for sales, data collection and management.",
  },
  {
    thumbnail: homelivingThumbnail,
    type: "Website development",
    title: "Home and Living",
    desc: "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living.",
  },
  {
    thumbnail: hippoThumbnail,
    type: "Website development",
    title: "HIPPO",
    desc: "Albatech help to create e-commerce and company profile for Hippo`s Website with realtime transaction and integration with Payment Gateway to accept multi payment.",
  },
];

export default function PortfolioList() {
  return <ul className="grid grid-cols-3 gap-8 mb-8">
    {portfolios.map(({thumbnail, type, title, desc}, idx) => (
      <li key={idx} className="group cursor-pointer">
        <img src={thumbnail} alt={`${title} thumbnail`} className="w-full"/>
        <div className="pt-5 pl-5 pb-10 pr-10 text-sm border-x border-b border-zinc-300 group-hover:border-[var(--accent-color)] rounded-b-xl min-h-[205px] duration-200">
          <p className="mb-2 text-zinc-400">{type}</p>
          <h3 className="text-xl font-bold mb-2 text-[var(--accent-color)]">{title}</h3>
          <p>{desc}</p>
        </div>
      </li>
    ))}
  </ul>;
}
