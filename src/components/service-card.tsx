import arrow from "../assets/Arrow.svg";

export default function ServiceCard({
  logo,
  title,
  desc,
}: {
  logo: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-xl border-2 border-zinc-400 cursor-pointer duration-200 hover:border-[var(--accent-color)] p-6">
      <img src={logo} alt="Website development logo" className="mb-4" />
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
    </div>
  );
}
