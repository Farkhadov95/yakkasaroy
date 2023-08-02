import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { MdExpandMore } from "react-icons/md";

const MenuSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<MdExpandMore />}>
        Категории
      </MenuButton>
      <MenuList>
        <MenuItem>Все</MenuItem>
        <MenuItem>Первые блюда</MenuItem>
        <MenuItem>Первые блюда</MenuItem>
        <MenuItem>Салаты</MenuItem>
        <MenuItem>Холодные закуски</MenuItem>
        <MenuItem>Десерты</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuSelector;
