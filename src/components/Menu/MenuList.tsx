import {
  GridItem,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import MenuSelector from "./MenuSelector";

const MenuListItemst = () => {
  return (
    <Box padding="20px">
      <MenuSelector />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        marginTop={5}
      >
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </SimpleGrid>
    </Box>
  );
};

export default MenuListItemst;
