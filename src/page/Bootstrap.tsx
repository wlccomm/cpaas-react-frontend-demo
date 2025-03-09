import { useEffect } from "react";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
// import moment from "moment";
// import { incrementHitCountHome } from "../app/appSlice";
import { BootstrapLayout } from "../layout/BootstrapLayout";
import Button from 'react-bootstrap/Button';
import BreakpointHelper from "../comp/BreakpointHelper/BreakpointHelper";

export default function Bootstrap() {
  useEffect(() => {
    document.title = "Bootstrap";
  }, []);

  return (
    <BootstrapLayout>
      Bootstrap
      <br />
      <br />
      Bootstrap BreakpointHelper: shows your react-bootstrap breakpoint
      <br />
      <BreakpointHelper />
      <br />
      <Button variant="outline-success">
        Close me
      </Button>
    </BootstrapLayout>
  );
}
  