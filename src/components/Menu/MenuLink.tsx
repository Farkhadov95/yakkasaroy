import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuLink = () => {
  return (
    <Box display="flex" justifyContent="center" padding={5}>
      <Button variant="outline" color="white">
        <Link to="/menu">Ознакомиться с меню</Link>
      </Button>
    </Box>
  );
};

export default MenuLink;
