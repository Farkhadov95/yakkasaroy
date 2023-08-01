import { Divider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import MainSlider from "./components/MainSlider";
import About from "./components/About";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <TopBar />
      <Divider orientation="horizontal" />
      <Navbar />
      <MainSlider />
      <About />
      <Divider orientation="horizontal" />
      <Menu />
      <Divider orientation="horizontal" />
    </>
  );
}

export default App;
