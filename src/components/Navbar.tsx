import { HStack, Link } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <HStack
      justifyContent="center"
      spacing={4}
      padding={4}
      backgroundColor="black"
      color="white"
    >
      <Link>Главная</Link>
      <Link>Меню</Link>
      <Link>Кейтеринг</Link>
      <Link>Почему Мы</Link>
      <Link>О нас</Link>
      <Link>Контакты</Link>
    </HStack>
  );
};

export default Navbar;
