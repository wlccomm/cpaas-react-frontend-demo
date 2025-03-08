import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../layout/Layout";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <Layout>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Layout>
  );
}
