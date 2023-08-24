import { Divider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import About from "../components/Home/AboutSection";
import Feedbacks from "../components/Home/Feedbacks/FeedbacksSection";
import MainSlider from "../components/Home/MainSlider";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import MenuSection from "../components/Home/MenuSection";
import Advantages from "../components/Home/Advantages/Advantages";
import Footer from "../components/Footer";
import DrawerNavigation from "../components/DrawerNavigation";
import Layout from "../components/Layout";
import MapSection from "../components/Home/MapSection";

const Home = () => {
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
      <MainSlider />
      <About />
      <Divider orientation="horizontal" />
      <MenuSection />
      <Divider orientation="horizontal" />
      <Feedbacks />
      <Divider orientation="horizontal" />
      <Advantages />
      <Divider orientation="horizontal" />
      <MapSection />
    </>
  );
};

export default Home;
