import { Text, Box, Image, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import CustomHeading from "../CustomHeading";
import MenuLink from "../Menu/MenuLink";
import firstDish from "../../assets/images/food/Hashlama800.webp";

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

const Menu = () => {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <div style={{}}>
        <Slider {...settings}>
          <Box padding={5}>
            <Image width="100%" src={firstDish} alt="1" marginBottom={2} />
            <Text align="center" fontWeight="bold" color="white">
              Первые блюда
            </Text>
          </Box>
          <Box padding={5}>
            <Image width="100%" src={firstDish} alt="1" marginBottom={2} />
            <Text align="center" fontWeight="bold" color="white">
              Вторые блюда
            </Text>
          </Box>
          <Box padding={5}>
            <Image width="100%" src={firstDish} alt="1" marginBottom={2} />
            <Text align="center" fontWeight="bold" color="white">
              Салаты
            </Text>
          </Box>
          <Box padding={5}>
            <Image width="100%" src={firstDish} alt="1" marginBottom={2} />
            <Text align="center" fontWeight="bold" color="white">
              Холодные закуски
            </Text>
          </Box>
          <Box padding={5}>
            <Image
              width="100%"
              src="src/assets/images/Food/Hashlama800.webp"
              alt="1"
              marginBottom={2}
            />
            <Text align="center" fontWeight="bold" color="white">
              Десерты
            </Text>
          </Box>
        </Slider>
      </div>
      <MenuLink />
    </>
  );
};

export default Menu;
