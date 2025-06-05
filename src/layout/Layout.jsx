import FullScreenAnimation from "@/components/common/FullScreenAnimation";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/Navbar/Navbar";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll to avoid flicker
    window.scrollTo(0, 0);
  }, [pathname]);

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
