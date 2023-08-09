import { HStack, Box, css } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Function to determine the selected tab from the pathname
  const determineTab = () => {
    switch (location.pathname) {
      case "/about":
        return "about";
      case "/menu":
        return "menu";
      case "/catering":
        return "catering";
      case "/contacts":
        return "contacts";
      default:
        return "home";
    }
  };
  const [selectedTab, setSelectedTab] = useState(determineTab());

  useEffect(() => {
    setSelectedTab(determineTab());
  }, [location.pathname]);

  return (
    <HStack justifyContent="center" spacing={4} padding={4} color="white">
      <Box
        as={Link}
        to="/"
        borderBottom={selectedTab === "home" ? "2px solid #FFCD75" : "none"}
        paddingBottom={2}
        onClick={() => setSelectedTab("home")}
      >
        Главная
      </Box>
      <Box
        as={Link}
        to="/about"
        borderBottom={selectedTab === "about" ? "2px solid #FFCD75" : "none"}
        paddingBottom={2}
        onClick={() => setSelectedTab("about")}
      >
        О нас
      </Box>
      <Box
        as={Link}
        to="/menu"
        borderBottom={selectedTab === "menu" ? "2px solid #FFCD75" : "none"}
        paddingBottom={2}
        onClick={() => setSelectedTab("menu")}
      >
        Меню
      </Box>
      <Box
        as={Link}
        to="/catering"
        borderBottom={selectedTab === "catering" ? "2px solid #FFCD75" : "none"}
        paddingBottom={2}
        onClick={() => setSelectedTab("catering")}
      >
        Кейтеринг
      </Box>
      <Box
        as={Link}
        to=""
        borderBottom={selectedTab === "contacts" ? "2px solid #FFCD75" : "none"}
        paddingBottom={2}
        onClick={() => setSelectedTab("contacts")}
      >
        Контакты
      </Box>
    </HStack>
  );
};

export default Navbar;
