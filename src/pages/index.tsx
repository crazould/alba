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
      <div className="overflow-x-hidden">
        <section id="about" className="relative px-4 py-8 min-h-[632px]">
          <div className="absolute right-0">
            <img src={heroImg} alt="alba hero image" />
          </div>
          <div className="absolute">
            <h2
              className="font-black text-5xl text-[var(--secondary-color)] bg-[var(--primary-color)] p-4 px-6 w-fit"
              style={{ textShadow: "-1px 0px 2px var(--secondary-color)" }}
            >
              Build or scale up
            </h2>
            <h2 className="text-5xl text-[var(--secondary-color)]">
              your development team
            </h2>
            <p>in weeks, not months</p>
            <Link
              type="button"
              className="bg-[var(--accent-color)] font-bold py-4 px-14 rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition duration-300"
              to="/login"
            >
              Book now
            </Link>
          </div>
        </section>
        <section id="service" className="mx-4 ">
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
        <section id="portfolio" className="mx-4">
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
        <section id="testimonials">
          <p className="text-center mb-2 text-zinc-400">Testimonials</p>
          <h2 className="font-bold text-3xl text-center text-[var(--secondary-color)] mb-8">
            What clients love in working <br /> with Albatech Team
          </h2>
        </section>
        <section >
          <div className="mx-auto max-w-7xl py-8">
            <PortfolioCarousel />
          </div>
        </section>
        <section className="mx-4 mb-16">
          <div className="flex flex-col items-center py-8 mx-auto max-w-7xl bg-[var(--accent-color)] rounded-xl">
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
