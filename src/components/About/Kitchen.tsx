import { Text, Box } from "@chakra-ui/react";
import CustomHeading from "../CustomHeading";
import video from "../../assets/video/video.mp4";

const Kitchen = () => {
  return (
    <Box padding={10}>
      <CustomHeading>Наша Кухня</CustomHeading>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Text textAlign="justify" width={{ base: "100%", md: "49%" }}>
          Кухня банкетного зала "Yakka Saroy" - это место, где создаются
          настоящие шедевры кулинарии. Каждое блюдо здесь приготовлено с
          максимальной тщательностью и любовью к профессии. Команда наших
          поваров состоит из настоящих профессионалов, каждый из которых
          специализируется на своем направлении. Наши шеф-повара, которые
          контролируют все процессы на кухне и разрабатывают новые меню. Кроме
          того, есть повара, которые занимаются приготовлением первых и вторых
          блюд, десертов, закусок и других блюд. Каждый член нашей команды
          поваров имеет высокую квалификацию и обладает большим опытом работы.
          Благодаря этому банкетный зал "Yakka Saroy" может предложить своим
          гостям блюда высокого качества и неповторимого вкуса.
        </Text>
        <Box
          width={{ base: "100%", md: "49%" }}
          paddingTop={{ base: 5, md: 0 }}
        >
          <video
            src={video}
            controls={false}
            autoPlay={true}
            muted
            width="100%"
            style={{}}
            loop={true}
          ></video>
        </Box>
      </Box>
    </Box>
  );
};

export default Kitchen;
