import { useEffect } from "react";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
// import moment from "moment";
// import { incrementHitCountHome } from "../app/appSlice";
import { Layout } from "../layout/Layout";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Layout>
      Home
      <br />
      <br />
      CPaaS Demo App
    </Layout>
  );
}
  