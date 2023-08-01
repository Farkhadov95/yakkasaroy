import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack justifyContent="center" spacing={4} padding={4} color="white">
      <Link to="/">Главная</Link>
      <Link to="/menu">Меню</Link>
      <Link to="/">Кейтеринг</Link>
      <Link to="/">Почему мы</Link>
      <Link to="/">О нас</Link>
      <Link to="/">Контакты</Link>
    </HStack>
  );
};

export default Navbar;
