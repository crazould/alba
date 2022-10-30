import logo from "../assets/alba-logo.png";
import Button from "./button";

export default function Header() {
  return (
    <header className="fixed w-full bg-white">
      <div className="max-w-7xl m-auto flex justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="Alba logo" />
        </div>
        <nav className="lg:w-2/4 xl:w-3/5">
          <ul className="flex py-2  justify-between">
            <li className="py-4 font-bold">
              <a href="#about">About</a>
            </li>
            <li className="py-4 font-bold">
              <a href="#service">Service</a>
            </li>
            <li className="py-4 font-bold">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="py-4 font-bold">
              <a href="#blog">Blog</a>
            </li>
            <li className="py-4 font-bold">
              <a href="#career">Career</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <Button onClick={() => {}}>Contact Us</Button>
        </div>
      </div>
    </header>
  );
}
