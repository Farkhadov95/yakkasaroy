import { Text, Box, Image } from "@chakra-ui/react";
import CustomHeading from "../CustomHeading";
import MenuLink from "../Menu/MenuLink";
import MenuDemoSlider from "../MenuDemoSlider";

const Menu = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="white"
        paddingX={10}
        paddingY={5}
      >
        <CustomHeading>МЕНЮ</CustomHeading>

        <Text fontSize="xl" paddingY={5} textAlign="justify">
          Мы предлагаем блюда европейской и национальной кухни. Наши творения не
          оставят вас равнодушными. Оригинальные рецептуры нашего шеф-повара
          приятно удивят даже самого избалованного гостя. Наши повара
          разрабатывают новые грани в кулинарном деле!
        </Text>
      </Box>
      <MenuDemoSlider />
      <MenuLink />
    </>
  );
};

export default Menu;
