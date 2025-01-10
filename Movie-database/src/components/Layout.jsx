import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Right from "./Right";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Right />
    </>
  );
};

export default Layout;
