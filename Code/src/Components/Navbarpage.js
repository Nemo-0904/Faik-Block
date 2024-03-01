import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Navbarpage = () => {
  // const [auth, setAuth] = useState(false);

  // const loginHandler = () => {
  //   setAuth(!auth);
  // };

  return (
    <>
      {/* <Navbar login={loginHandler} status={auth} /> */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default Navbarpage;
