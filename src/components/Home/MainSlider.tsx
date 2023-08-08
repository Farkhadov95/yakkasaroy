import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg01 from "../../assets/images/main-slider/sliderImg-01.webp";
import sliderImg02 from "../../assets/images/main-slider/sliderImg-02.webp";
import sliderImg03 from "../../assets/images/main-slider/sliderImg-03.webp";
import sliderImg04 from "../../assets/images/main-slider/sliderImg-04.webp";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        zIndex: "1",
        right: "25px",
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
        display: "block",
        position: "absolute",
        zIndex: "1",
        left: "25px",
      }}
      onClick={onClick}
    />
  );
}

const MainSlider = () => {
  let settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 3000,
    fade: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    adaptiveHeight: true,
  };

  return (
    <Box>
      <Slider {...settings}>
        <div>
          <Image src={sliderImg01} alt="slider" />
        </div>
        <div>
          <Image src={sliderImg02} alt="slider" />
        </div>
        <div>
          <Image src={sliderImg03} alt="slider" />
        </div>
        <div>
          <Image src={sliderImg04} alt="slider" />
        </div>
      </Slider>
    </Box>
  );
};

export default MainSlider;
