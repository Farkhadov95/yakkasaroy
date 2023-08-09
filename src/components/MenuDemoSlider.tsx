import { Text, Box, Image } from "@chakra-ui/react";
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

const MenuDemoSlider = () => {
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
    <Slider {...settings}>
      <Box padding={5}>
        <Image
          width="100%"
          src="/images/food/Hashlama800.webp"
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
          src="/images/food/Hashlama800.webp"
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
          src="/images/food/Hashlama800.webp"
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
          src="/images/food/Hashlama800.webp"
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
          src="/images/food/Hashlama800.webp"
          alt="1"
          marginBottom={2}
        />
        <Text align="center" fontWeight="bold" color="white">
          Десерты
        </Text>
      </Box>
    </Slider>
  );
};

export default MenuDemoSlider;
