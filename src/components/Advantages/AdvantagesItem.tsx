import { Card, Image, Text } from "@chakra-ui/react";

const AdvantagesItem = () => {
  return (
    <Card
      backgroundColor="black"
      width="100%"
      padding={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Image src="src/assets/icons/adv_menu.svg" alt="advantage-menu" />
      <Text fontSize="xl" fontWeight="bold">
        Меню
      </Text>
      <Text fontSize="md">Большой выбор блюд</Text>
    </Card>
  );
};

export default AdvantagesItem;
