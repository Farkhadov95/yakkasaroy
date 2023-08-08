import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CustomHeading from "../../CustomHeading";
import FeedbackText from "./FeedbackText";
import userAbbos from "../../../assets/images/feedbacks/abbos.jpg";

const Feedbacks = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="white"
      padding={10}
    >
      <CustomHeading>Отзывы</CustomHeading>

      <SimpleGrid
        marginTop={5}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
      >
        <Card>
          <CardHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="md">Амир Фархадов</Heading>
            <Avatar name="Amir Farkhadov" src="" />
          </CardHeader>
          <CardBody>
            <FeedbackText>
              Мне тут очень понравилось. В отличии от других свадебных
              ресторанов Ташкента, качество сервиса и еды замечательны. Еда
              очень вкусная, повара идеально готовят каждое блюдо и эстетично
              украшают её словно высокая кухня. Только интерьер слишком уж
              напоминает фантастические орнаменты, которые в реальной жизни не
              могли бы устоять тяжесть и упасть. В принципе всё классно)
            </FeedbackText>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="md">Аббос Рустамов</Heading>
            <Avatar name="Abbos Rustamov" src={userAbbos} />
          </CardHeader>
          <CardBody>
            <FeedbackText>
              Самый популярный ресторан с 5-ю залами для проведения свадебных
              мероприятий с удобной локацией. Все залы обособлены и
              звукоизолированны. Т.е. одновременно Yakkasaroy может принять 5
              свадебных вечеров. Есть вместительные подземный и наземный
              паркинг. Все залы ресторанов оформлены в классическом стиле и
              оборудованы огромными экранами и осветительным оборудованием.
              Круто всё!
            </FeedbackText>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="md">Саша Щербаков</Heading>
            <Avatar name="Sasha Shcherbakov" src="" />
          </CardHeader>
          <CardBody>
            <FeedbackText>
              Все парни весь персонал проста класс! Спасибо всему персоналу за
              хороший вечер.
            </FeedbackText>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="md">Александр Щеглов</Heading>
            <Avatar name="Alexander Scheglov" src="" />
          </CardHeader>
          <CardBody>
            <FeedbackText>
              Просто супер и интерьер и обслуживание и украшение столов. А
              музыкальная программа просто бомба!!!
            </FeedbackText>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Feedbacks;
