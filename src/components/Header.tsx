import Headroom from "react-headroom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import { Box, Divider } from "@chakra-ui/react";

const Header = () => {
  return (
    <Headroom>
      <Box backgroundColor="black">
        <TopBar />
        <Divider />
        <Navbar />
      </Box>
    </Headroom>
  );
};

export default Header;
