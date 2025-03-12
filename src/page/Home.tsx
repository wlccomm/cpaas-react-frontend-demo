import { useEffect } from "react";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
// import moment from "moment";
// import { incrementHitCountHome } from "../app/appSlice";
import { BootstrapLayout } from "../layout/BootstrapLayout";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <BootstrapLayout>
      Home
      <br />
      <br />
      CPaaS Demo App
    </BootstrapLayout>
  );
}
