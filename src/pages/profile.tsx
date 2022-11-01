import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { useTokenContext } from "../context/token";

export default function ProfilePage() {
  const { token } = useTokenContext();
  const nav = useNavigate();

  useEffect(() => {
    if (!token) nav("/login");
  });

  return (
    <Layout>
      <section className="mt-32 mx-4">
        <div className="flex flex-col py-8 md:py-8 px-4 md:px-8 mx-auto max-w-md rounded-xl shadow-xl hover:shadow-2xl relative border border-zinc-300 duration-200">
          <h1 className="font-bold text-4xl text-[var(--secondary-color)] mb-2 cursor-pointer">
            User Profile
          </h1>
          <p className=" mb-6 text-[var(--secondary-color)]">Token : {token}</p>
        </div>
      </section>
    </Layout>
  );
}
