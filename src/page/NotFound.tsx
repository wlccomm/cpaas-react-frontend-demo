import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BootstrapLayout } from "../layout/BootstrapLayout";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <BootstrapLayout>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </BootstrapLayout>
  );
}
