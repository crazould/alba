import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { useTokenContext } from "../context/token";

export default function LoginPage() {
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { token, setToken } = useTokenContext();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<string | null>("");
  const nav = useNavigate();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoading(() => true);
    setInfo(() => null);

    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    const data = await response.json();

    setLoading(() => false);
    switch (response.status) {
      case 200: {
        setToken(data.token);
        break;
      }
      default: {
        setInfo(data.error);
        break;
      }
    }
  }

  useEffect(() => {
    if (token) nav("/profile");
  });

  return (
    <Layout>
      <section className="mt-32 mx-4">
        <form
          onSubmit={handleLogin}
          className="flex flex-col py-8 md:py-16 px-4 md:px-8 mx-auto max-w-md rounded-xl shadow-xl relative border border-zinc-300"
        >
          <h1 className="font-bold text-4xl text-[var(--secondary-color)] mb-2">
            Sign in
          </h1>
          <p className=" mb-6 text-[var(--secondary-color)]">
            Join us and build it with Albatech!
          </p>
          <label className="pl-2 mb-1" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            className="mb-4 py-2 pl-4 rounded-full border border-zinc-400 "
            required
            type="email"
            name="email"
            id="email"
          />
          <label className="pl-2 mb-1" htmlFor="password">
            Password
          </label>
          <input
            ref={passwordRef}
            className="mb-32 py-2 pl-4 rounded-full border border-zinc-400 "
            required
            type="password"
            name="password"
            id="password"
          />
          <div
            className={`bg-red-500 py-3 text-center absolute left-0 right-0 bottom-[24%] mx-8 rounded-full text-[var(--primary-color)] duration-200 opacity-0 ${
              info && "opacity-100"
            }`}
          >
            {info}
          </div>
          <button
            type="submit"
            className={`bg-[var(--accent-color)] font-bold py-4 px-14 rounded-full hover:shadow-lg hover:shadow-yellow-400/50 duration-200 ${
              loading && "animate-pulse"
            }`}
          >
            {loading ? "loading..." : "Login"}
          </button>
        </form>
      </section>
    </Layout>
  );
}
