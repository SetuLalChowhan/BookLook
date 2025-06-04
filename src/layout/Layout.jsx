import FullScreenAnimation from "@/components/common/FullScreenAnimation";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <FullScreenAnimation />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
