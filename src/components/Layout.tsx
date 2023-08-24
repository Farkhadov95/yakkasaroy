import React, { useState, useEffect, ReactNode } from "react";
import { Divider } from "@chakra-ui/react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import DrawerNavigation from "./DrawerNavigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? <DrawerNavigation /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
