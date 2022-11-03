import hippoLogo from "../assets/hippo-logo.png";
import homelivingLogo from "../assets/homeliving-logo.png";
import iliosLogo from "../assets/ilios-logo.png";
import dioLogo from "../assets/dio-logo.png";
import melaLogo from "../assets/mela-logo.png";
import { useState } from "react";

const logos = [hippoLogo, homelivingLogo, iliosLogo, dioLogo, melaLogo];
const slides = [logos, logos, logos];

const carouselWrapper = screen.width;
const slideWidth = carouselWrapper >= 1264 ? 1280 : carouselWrapper;

export default function PortfolioCarousel() {
  
  const [slider, setSlider] = useState(slideWidth * 1);
  const [indicator, setIndicator] = useState(0);

  function handleSlide(idx: number) {
    switch (idx) {
      case 0:
        setSlider(slideWidth * 1);
        break;
      case 1:
        setSlider(slideWidth * 0);
        break;
      case 2:
        setSlider(slideWidth * -1);
        break;
    }
    setIndicator(idx);
  }

  return (
    <div id="carousel">
      <div
        className="mx-auto relative overflow-x-hidden mb-4"
        style={{ height: `calc(100vw/5)` }}
      >
        <div
          className="relative duration-500"
          style={{
            left: `${slider}px`,
            width: `100vw`,
            maxWidth: `1280px`,
          }}
        >
          {slides.map((logos, idx) => {
            return (
              <div
                key={idx}
                className={`grid grid-cols-5 absolute gap-8`}
                style={{
                  left: `${slideWidth * (idx - 1)}px`,
                  width: `100vw`,
                  maxWidth: `1280px`,
                }}
              >
                {logos.map((logo) => (
                  <img key={logo} src={logo} alt="portfolio item logo" />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto flex w-32 justify-between">
        {slides.map((_, idx) => (
          <button
            className={`rounded-full p-2 duration-500 ${
              idx === indicator ? "bg-[var(--accent-color)]" : "bg-zinc-400"
            }`}
            key={idx}
            onClick={() => handleSlide(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
}
