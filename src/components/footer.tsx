import logo from "../assets/alba-logo.png";
import fb from "../assets/Fb.png";
import ig from "../assets/ig.png";
import linkedin from "../assets/Linked.png";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl m-auto flex flex-wrap justify-between px-4 py-8 border-y border-zinc-400">
        <div className="mb-8 md:basis-1/4 lg:basis-1/2">
          <img src={logo} alt="Alba logo" className="mb-8" />
          <p className="mb-8">
            Albatech acts as a corporate partner to help digitize their business
            to accelerate trends in remote work.
          </p>
          <div className="flex w-[115px] justify-between">
            <a href="#">
              <img src={fb} alt="alba facebook media logo" />
            </a>
            <a href="#">
              <img src={ig} alt="alba instagram media logo" />
            </a>
            <a href="#">
              <img src={linkedin} alt="alba linkedin media logo" />
            </a>
          </div>
        </div>
        <div className="basis-1/4">
          <h6 className="font-bold mb-8">Website</h6>
          <ul>
            <li className="mb-6">
              <a href="#about">About</a>
            </li>
            <li className="mb-6">
              <a href="#service">Service</a>
            </li>
            <li className="mb-6">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="mb-6">
              <a href="#blog">Blog</a>
            </li>
            <li className="mb-6">
              <a href="#career">Career</a>
            </li>
          </ul>
        </div>
        <div className="basis-1/4">
          <h6 className="font-bold mb-8">Contact</h6>
          <ul>
            <li className="mb-6">
              The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera,
              Kota Tangerang, Banten 15143
            </li>
            <li className="mb-6">
              <b>P</b> : +62 81 1889 3383
            </li>
            <li className="mb-6">
              <b>E</b> : info@albatech.id
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl m-auto flex justify-between p-4 text-zinc-400 text-xs">
        <p>©PT. Alba Digital Teknologi 2021 | All Rights Reserved</p>
        <p>Privacy policy | Terms of service</p>
      </div>
    </footer>
  );
}
