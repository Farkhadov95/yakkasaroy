import { Divider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import MainSlider from "./components/MainSlider";
import About from "./components/About";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <MainSlider />
      <About />
    </>
  );
}

export default App;
