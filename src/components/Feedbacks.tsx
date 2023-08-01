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

const Feedbacks = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="white"
      padding={10}
    >
      <Text fontSize="2xl" fontWeight="bold">
        Отзывы
      </Text>

      <Image
        src="src/assets/icons/separator.svg"
        width="100px"
        height="30px"
        alt="decoration-element"
      />

      <SimpleGrid
        marginTop={5}
        spacing={4}
        templateColumns="repeat(3, minmax(200px, 1fr))"
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
            <Text>
              Мне тут очень понравилось. В отличии от других свадебных
              ресторанов Ташкента, качество сервиса и еды замечательны. Еда
              очень вкусная, повара идеально готовят каждое блюдо и эстетично
              украшают её словно высокая кухня. Только интерьер слишком уж
              напоминает фантастические орнаменты, которые в реальной жизни не
              могли бы устоять тяжесть и упасть. В принципе всё классно)
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="md">Аббос Рустамов</Heading>
            <Avatar name="Abbos Rustamov" src="src/assets/images/abbos.jpg" />
          </CardHeader>
          <CardBody>
            <Text>
              Самый популярный ресторан с 5-ю залами для проведения свадебных
              мероприятий с удобной локацией. Все залы обособлены и
              звукоизолированны. Т.е. одновременно Yakkasaroy может принять 5
              свадебных вечеров. Есть вместительные подземный и наземный
              паркинг. Все залы ресторанов оформлены в классическом стиле и
              оборудованы огромными экранами и осветительным оборудованием.
              Круто всё!
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
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
            <Text>
              Все парни весь персонал проста класс! Спасибо всему персоналу за
              хороший вечер.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
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
            <Text>
              Просто супер и интерьер и обслуживание и украшение столов. А
              музыкальная программа просто бомба!!!
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Feedbacks;
