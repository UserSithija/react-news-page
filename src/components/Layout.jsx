import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* space */}
      <div className="mt-28"> </div>
      <Outlet />
    </>
  );
};

export default Layout;
