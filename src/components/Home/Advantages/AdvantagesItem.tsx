import { Card, Image, Text } from "@chakra-ui/react";
import adv_menu from "../../../assets/icons/adv_menu.svg";

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
      <Image src={adv_menu} alt="advantage-menu" />
      <Text fontSize="xl" fontWeight="bold">
        Меню
      </Text>
      <Text fontSize="md">Большой выбор блюд</Text>
    </Card>
  );
};

export default AdvantagesItem;
