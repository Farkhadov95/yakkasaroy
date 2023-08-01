import { Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import MenuList from "../components/Menu/MenuList";

const Menu = () => {
  return (
    <>
      <TopBar />
      <Divider orientation="horizontal" />
      <Navbar />
      <MenuList />
    </>
  );
};

export default Menu;
