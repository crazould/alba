import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[var(--accent-color)] font-bold py-4 px-14 rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition duration-300"
    >
      {children}
    </button>
  );
}
