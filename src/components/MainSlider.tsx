import React from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    speed: 2000,
    fade: true,
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
    <div style={{}}>
      <Slider {...settings}>
        <div>
          <Image src="src/assets/images/sliderImg-01.webp" alt="slider" />
        </div>
        <div>
          <Image src="src/assets/images/sliderImg-02.webp" alt="slider" />
        </div>
        <div>
          <Image src="src/assets/images/sliderImg-03.webp" alt="slider" />
        </div>
        <div>
          <Image src="src/assets/images/sliderImg-04.webp" alt="slider" />
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
