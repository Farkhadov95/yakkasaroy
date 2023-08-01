import { Text, Box, Image, Button } from "@chakra-ui/react";
import Slider from "react-slick";

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
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        backgroundColor="black"
        color="white"
        padding={10}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Меню
        </Text>

        <Image
          src="src/assets/icons/separator.svg"
          width="100px"
          height="30px"
          alt="decoration-element"
        />

        <Text fontSize="xl" padding={5}>
          Мы предлагаем блюда европейской и национальной кухни. Наши творения не
          оставят вас равнодушными. Оригинальные рецептуры нашего шеф-повара
          приятно удивят даже самого избалованного гостя. Наши повара
          разрабатывают новые грани в кулинарном деле!
        </Text>
      </Box>
      <div style={{ backgroundColor: "black" }}>
        <Slider {...settings}>
          <Box padding={5}>
            <Image
              width="100%"
              src="src/assets/images/Food/Hashlama800.webp"
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
              src="src/assets/images/Food/Hashlama800.webp"
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
              src="src/assets/images/Food/Hashlama800.webp"
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
              src="src/assets/images/Food/Hashlama800.webp"
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
      <Box
        display="flex"
        justifyContent="center"
        padding={5}
        backgroundColor="black"
      >
        <Button variant="outline" color="white">
          Смотреть все меню
        </Button>
      </Box>
      '
    </>
  );
};

export default Menu;
