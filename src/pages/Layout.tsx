import React, { useState, useEffect, ReactNode } from "react";
import { Divider } from "@chakra-ui/react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import DrawerNavigation from "../components/DrawerNavigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <TopBar />
      <Divider orientation="horizontal" />
      {isSmallScreen ? <DrawerNavigation /> : <Navbar />}
      {/* {children} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
