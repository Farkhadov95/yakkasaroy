import { Box, List } from "@chakra-ui/react";
import CustomHeading from "../../CustomHeading";
import FeedbackText from "./FeedbackText";
import feedbacks from "../../../data/feedbacks";
import FeedbackCard from "./FeedbackCard";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

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
        right: "-15px",
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
        left: "-15px",
      }}
      onClick={onClick}
    />
  );
}

const Feedbacks = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    speed: 1000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Box paddingY={5} width="95%" margin="0 auto">
      <CustomHeading>Отзывы</CustomHeading>
      <Slider {...settings}>
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </Slider>
    </Box>
  );
};

export default Feedbacks;
