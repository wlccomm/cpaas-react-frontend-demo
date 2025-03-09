// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useAppSelector } from "../app/hooks";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  // const defaultAccountID = useAppSelector(
  //   (state) => state.app.defaultAccountID
  // );
  // const defaultAccountIDShort = defaultAccountID.slice(0, 6);
  // const defaultAccountName = useAppSelector(
  //   (state) => state.app.defaultAccountName
  // );

  // const [selectedUseCase, setSelectedUseCase] = useState("");
  // const navigate = useNavigate();

  // const handleUseCaseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedOption = event.target.value;
  //   navigate(selectedOption);
  //   setSelectedUseCase(selectedOption);
  // };

  return (
    <div style={{ margin: "5px 10px 10px" }}>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;&nbsp;
      <hr />
      {props.children}
    </div>
  );
};
