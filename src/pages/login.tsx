import { FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { useTokenContext } from "../context/token";

// {
//   "email": "eve.holt@reqres.in",
//   "password": "bebas"
//   }

export default function LoginPage() {
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { token, setToken } = useTokenContext();
  const nav = useNavigate();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

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
    switch (response.status) {
      case 400: {
        break;
      }
      case 200: {
        setToken(data.token);
        break;
      }
      default: {
        break;
      }
    }
  }

  useEffect(() => {
    if (token) nav("/profile");
  });

  return (
    <Layout>
      <div className="mt-32 mx-4">
        <form
          onSubmit={handleLogin}
          className="flex flex-col py-8 md:py-16 px-4 md:px-8 mx-auto max-w-md bg-[var(--accent-color)] rounded-xl shadow-xl"
        >
          <h2 className="font-bold text-4xl text-[var(--secondary-color)] mb-2">
            Sign in
          </h2>
          <p className=" mb-6 text-[var(--secondary-color)]">
            Join us and build it with Albatech!
          </p>
          <label className="pl-2 mb-1" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            className="mb-4 py-2 pl-4 rounded-full"
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
            className="mb-32 py-2 pl-4 rounded-full"
            required
            type="password"
            name="password"
            id="password"
          />
          <button
            type="submit"
            className="bg-[var(--accent-color)] font-bold py-4 px-14 rounded-full border-2 border-[var(--secondary-color)]"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}
