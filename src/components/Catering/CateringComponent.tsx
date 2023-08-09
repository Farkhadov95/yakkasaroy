import Slider from "react-slick";
import { Box, Text, Image, Button, Link, Heading } from "@chakra-ui/react";
import MenuLink from "../Menu/MenuLink";
import CustomHeading from "../CustomHeading";
import MenuDemoSlider from "../MenuDemoSlider";

const CateringComponent = () => {
  return (
    <Box padding={10}>
      <Box>
        <CustomHeading>Кейтеринг</CustomHeading>
        <Text align="justify" marginBottom={10}>
          Всегда хотели отметить свое торжество уютно, в домашней обстановке,
          или где-нибудь в интересном для Вас месте? Тогда специально для вас,
          команда нашего банкетного зала предоставляет услугу кейтеринга. Вы
          выбираете локацию, а мы организуем ваш банкет: приготовление пищи,
          сервировка, оформление стола, разлив и подача напитков - ресторан в
          вашей локации. Мы поможем осуществить Ваш гастрономический праздник.
        </Text>

        <Heading fontSize="xl" textAlign="center" paddingY={3}>
          Бронируйте по телефону
        </Heading>

        <Box textAlign="center" marginBottom={10}>
          <Link
            fontSize="lg"
            href="tel:+998 (97) 401-00-40"
            style={{ textDecoration: "underline" }}
          >
            +998 (97) 401-00-40
          </Link>
        </Box>
      </Box>
      <MenuDemoSlider />
      <MenuLink />
    </Box>
  );
};

export default CateringComponent;
