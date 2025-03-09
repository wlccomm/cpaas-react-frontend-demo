import { useEffect } from "react";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
// import moment from "moment";
// import { incrementHitCountHome } from "../app/appSlice";
import { Layout } from "../layout/Layout";
import Button from 'react-bootstrap/Button';

export default function Bootstrap() {
  useEffect(() => {
    document.title = "Bootstrap";
  }, []);

  return (
    <Layout>
      Bootstrap
      <br />
      <br />
      Bootstrap Sample
      <br />
      <Button variant="outline-success">
        Close me
      </Button>
    </Layout>
  );
}
  