import { Card, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const MenuItem = () => {
  return (
    <Card borderRadius={5} overflow="hidden">
      <Image
        src="src/assets/images/Food/Hashlama800.webp"
        alt="SomsaBulbulcha"
        loading="lazy"
      />
      <Heading as="h3" size="md" padding={3}>
        Самса бульбульча
      </Heading>
      <Text fontSize="md" padding={3}>
        Слоенное тесто с мысом и овощами, запекается в печке
      </Text>
    </Card>
  );
};

export default MenuItem;
