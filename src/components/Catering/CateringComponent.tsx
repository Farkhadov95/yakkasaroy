import Slider from "react-slick";
import { Box, Text, Image, Button, Link, Heading } from "@chakra-ui/react";
import MenuLink from "../Menu/MenuLink";
import CustomHeading from "../CustomHeading";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

const CateringComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
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
      <Box>
        <Slider {...settings}>
          <Box padding={5}>
            <Image
              width="100%"
              src="src/assets/images/food/Hashlama800.webp"
              alt="1"
              marginBottom={2}
            />
            <Text align="center" fontWeight="bold" color="white">
              Первые блюда
            </Text>
          </Box>
          <Box padding={5}>
            <Image
              width="100%"
              src="src/assets/images/food/Hashlama800.webp"
              alt="1"
              marginBottom={2}
            />
            <Text align="center" fontWeight="bold" color="white">
              Вторые блюда
            </Text>
          </Box>
          <Box padding={5}>
            <Image
              width="100%"
              src="src/assets/images/food/Hashlama800.webp"
              alt="1"
              marginBottom={2}
            />
            <Text align="center" fontWeight="bold" color="white">
              Салаты
            </Text>
          </Box>
          <Box padding={5}>
            <Image
              width="100%"
              src="src/assets/images/food/Hashlama800.webp"
              alt="1"
              marginBottom={2}
            />
            <Text align="center" fontWeight="bold" color="white">
              Холодные закуски
            </Text>
          </Box>
          <Box padding={5}>
            <Image
              width="100%"
              src="src/assets/images/food/Hashlama800.webp"
              alt="1"
              marginBottom={2}
            />
            <Text align="center" fontWeight="bold" color="white">
              Десерты
            </Text>
          </Box>
        </Slider>
      </Box>

      <MenuLink />
    </Box>
  );
};

export default CateringComponent;
