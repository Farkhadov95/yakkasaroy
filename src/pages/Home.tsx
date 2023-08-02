import { Divider } from "@chakra-ui/react";
import React from "react";
import About from "../components/About";
import Feedbacks from "../components/Feedbacks";
import MainSlider from "../components/MainSlider";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import MenuSection from "../components/MenuSection";
import Advantages from "../components/Advantages";

const Main = () => {
  return (
    <>
      <TopBar />
      <Divider orientation="horizontal" />
      <Navbar />
      <MainSlider />
      <About />
      <Divider orientation="horizontal" />
      <MenuSection />
      <Divider orientation="horizontal" />
      <Feedbacks />
      <Divider orientation="horizontal" />
      <Advantages />
    </>
  );
};

export default Main;
