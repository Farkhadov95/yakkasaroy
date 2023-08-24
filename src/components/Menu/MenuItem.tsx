import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

export interface Dish {
  id: number;
  name: string;
  type: string;
  src: string;
  description: string;
}

interface Props {
  dish: Dish;
}

const MenuItem = ({ dish }: Props) => {
  return (
    <Card borderRadius={5} overflow="hidden">
      <Image src={dish.src} alt={dish.name} loading="lazy" />
      <CardBody>
        <Heading as="h3" size="md">
          {dish.name}
        </Heading>
        <Text fontSize="md" paddingTop={3}>
          {dish.description}
        </Text>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
