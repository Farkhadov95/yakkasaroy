import { Divider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import About from "../components/About";
import Feedbacks from "../components/Feedbacks";
import MainSlider from "../components/MainSlider";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import MenuSection from "../components/MenuSection";
import Advantages from "../components/Advantages/Advantages";
import Footer from "../components/Footer";
import DrawerNavigation from "../components/DrawerNavigation";

const Main = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    // Update isSmallScreen state on window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <TopBar />
      <Divider orientation="horizontal" />
      {isSmallScreen ? <DrawerNavigation /> : <Navbar />}
      <MainSlider />
      <About />
      <Divider orientation="horizontal" />
      <MenuSection />
      <Divider orientation="horizontal" />
      <Feedbacks />
      <Divider orientation="horizontal" />
      <Advantages />
      <Divider orientation="horizontal" />
      <Footer />
    </>
  );
};

export default Main;
