import { Link } from "react-router-dom";
import Layout from "../components/layout";
import heroImg from "../assets/hero-img.png";
import ServiceList from "../components/service-list";
import SkillList from "../components/skill-list";
import PortfolioList from "../components/portfolio-list";
import PortfolioCarousel from "../components/portfolio-carousel";

export default function HomePage() {
  return (
    <Layout>
      <div
        className="overflow-x-hidden"
        style={{
          backgroundColor: "#ffffff",
          opacity: "1",
          backgroundImage:
            "linear-gradient(#f3f4f6 1.4px, transparent 1.4px), linear-gradient(to right, #f3f4f6 1.4px, #ffffff 1.4px)",
          backgroundSize: "50px 50px",
        }}
      >
        <section id="about" className="py-8 flex justify-between items-center">
          <div className="relative left-[16%] z-10">
            <h2
              className="font-black text-5xl text-[var(--secondary-color)] bg-[var(--primary-color)] p-4 px-6 w-fit mb-4"
              style={{ textShadow: "-1px 0px 2px var(--secondary-color)" }}
            >
              Build or scale up
            </h2>
            <p className="text-5xl text-[var(--secondary-color)] ml-4 mb-4 whitespace-nowrap">
              your development team
            </p>
            <p className=" bg-[var(--primary-color)] p-4 px-6 w-fit ml-4 mb-4">
              <span className="inline-block bg-[var(--accent-color)] w-[75px] h-[5px] mr-4"></span>{" "}
              in weeks, not months
            </p>
            <Link
              type="button"
              className="ml-4 bg-[var(--accent-color)] font-bold py-4 px-14 rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition duration-300"
              to="/login"
            >
              Book now
            </Link>
          </div>
          <img src={heroImg} alt="albatech hero image" className="relative w-screen lg:w-[65vw]" />
        </section>
        <section
          id="service"
          className="px-4 bg-white"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl py-8">
            <p className="text-center mb-2 text-zinc-400">Complete Package</p>
            <h2 className="font-bold text-3xl text-center text-[var(--secondary-color)] mb-8">
              From product design to software continuous delivery
            </h2>
            <ServiceList />
            <SkillList />
          </div>
        </section>
        <section className="bg-[var(--secondary-color)]">
          <div className="py-8 max-w-7xl m-auto px-4">
            <h2 className="font-bold text-3xl text-center text-[var(--accent-color)] mb-8">
              Our Progress Comes with a Collaboration Between <br /> Creativity,
              Ideas, and Technology
            </h2>
            <div className="text-[var(--primary-color)] flex justify-between">
              <div className="flex items-center flex-col">
                <div className="text-5xl mb-2">1000+</div>
                <div className="text-xl">Designs</div>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-5xl mb-2">30+</div>
                <div className="text-xl">Products</div>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-5xl mb-2">58+</div>
                <div className="text-xl">Web Developments</div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="px-4 bg-white">
          <div className="flex flex-col items-center mx-auto max-w-7xl py-8">
            <p className="text-center mb-2 text-zinc-400">Portfolio</p>
            <h2 className="font-bold text-3xl text-center text-[var(--secondary-color)] mb-8">
              The software that we build <br /> takes our clients to the next
              level
            </h2>
            <PortfolioList />
            <Link
              type="button"
              className="bg-[var(--accent-color)] font-bold py-4 px-14 rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition duration-300"
              to="/login"
            >
              Learn more
            </Link>
          </div>
        </section>
        <section id="testimonials" className="bg-white">
          <p className="text-center mb-2 text-zinc-400">Testimonials</p>
          <h2 className="font-bold text-3xl text-center text-[var(--secondary-color)]">
            What clients love in working <br /> with Albatech Team
          </h2>
        </section>
        <section className="bg-white">
          <div className="mx-auto max-w-7xl py-8">
            <PortfolioCarousel />
          </div>
        </section>
        <section className="px-4 pb-16 bg-white">
          <div className="flex flex-col items-center py-8 mx-auto max-w-7xl bg-[var(--accent-color)] rounded-xl ">
            <p className="mb-6">Is software important for your business?</p>
            <h2 className="text-4xl mb-8">Build it with Albatech</h2>
            <Link
              type="button"
              className="bg-[var(--accent-color)] font-bold py-4 px-14 rounded-full border-2 border-[var(--secondary-color)]"
              to="/login"
            >
              Consultation Now
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
