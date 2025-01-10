import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Right from "./Right";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Right />
    </div>
  );
};

export default Layout;
