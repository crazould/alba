import { Link } from "react-router-dom";
import Layout from "../components/layout";

export default function LoginPage() {
  return (
    <Layout>
      <div>
        LoginPage
        <Link
          type="button"
          className="bg-[var(--accent-color)] font-bold py-4 px-14 rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition duration-300"
          to="/profile"
        >
          Login
        </Link>
      </div>
    </Layout>
  );
}
