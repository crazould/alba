import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/alba-logo.png";
import menuButton from "../assets/burger-menu.png";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <header className="fixed w-full bg-white z-40">
      <div className="max-w-7xl m-auto p-4 flex justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Alba logo" />
          </Link>
        </div>
        <nav className="hidden md:block md:w-[48%] lg:w-2/4 xl:w-3/5 ">
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
        <div className="flex items-center ">
          <button
            type="button"
            className="hidden md:block bg-[var(--accent-color)] font-bold py-4 px-14 rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition duration-300"
          >
            Contact Us
          </button>
          <button
            className="block md:hidden"
            onClick={() => setShow((currVal) => !currVal)}
          >
            <img src={menuButton} alt="burger menu icon" />
          </button>
        </div>
      </div>
      <nav className={`fixed ${show ? "left-0" : "left-[100vw]"} duration-500 md:hidden`}>
        <ul className="fixed w-screen h-screen z-50 bg-white ">
          <li className="py-4 font-bold text-center">
            <a href="#about">About</a>
          </li>
          <li className="py-4 font-bold text-center">
            <a href="#service">Service</a>
          </li>
          <li className="py-4 font-bold text-center">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="py-4 font-bold text-center">
            <a href="#blog">Blog</a>
          </li>
          <li className="py-4 font-bold text-center">
            <a href="#career">Career</a>
          </li>
          <li className="py-4  font-bold text-center ">
            <a
              href="#career"
              className="bg-[var(--accent-color)] p-4 rounded-md"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
