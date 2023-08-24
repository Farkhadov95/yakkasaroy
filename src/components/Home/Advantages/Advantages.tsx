import { Box, Card, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import AdvantagesItem, { Advantage } from "./AdvantagesItem";
import CustomHeading from "../../CustomHeading";
import advantages from "../../../data/advantages";

const Advantages = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="white"
      padding={10}
    >
      <CustomHeading>Наши преимущества</CustomHeading>

      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 3, lg: 4, xl: 4 }}
        spacing={5}
        marginTop={5}
        marginBottom={10}
      >
        {advantages.map((advantage: Advantage) => (
          <AdvantagesItem key={advantage.id} advantage={advantage} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Advantages;
