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
      <h1>Profile Page</h1>
      <p>token: {token}</p>
    </Layout>
  );
}
