import { SimpleGrid, Box } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import MenuSelector from "./MenuSelector";
import CustomHeading from "../CustomHeading";
import dishes from "../../data/dishes";

const MenuList = () => {
  return (
    <Box padding="20px">
      <CustomHeading>Наше Меню</CustomHeading>
      <MenuSelector />
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 3, xl: 4 }}
        spacing={5}
        marginTop={5}
      >
        {dishes.map((dish) => (
          <MenuItem key={dish.id} dish={dish} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MenuList;
