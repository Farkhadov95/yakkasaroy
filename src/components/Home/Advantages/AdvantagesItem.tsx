import { Card, Image, Text } from "@chakra-ui/react";

export interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Props {
  advantage: Advantage;
}

const AdvantagesItem = ({ advantage }: Props) => {
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
      <Image src={advantage.icon} alt="advantage-menu" />
      <Text fontSize="xl" fontWeight="bold" align="center">
        {advantage.title}
      </Text>
      <Text fontSize="md" align="center">
        {advantage.description}
      </Text>
    </Card>
  );
};

export default AdvantagesItem;
