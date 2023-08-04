import { Box, Card, Image, SimpleGrid, Text } from "@chakra-ui/react";
import AdvantagesItem from "./AdvantagesItem";

const Advantages = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="white"
      padding={10}
    >
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        Наше преимущество
      </Text>

      <Image
        src="src/assets/icons/decor_separator.svg"
        width="100px"
        height="30px"
        alt="decoration-element"
      />

      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 4 }}
        spacing={5}
        marginTop={5}
        marginBottom={10}
      >
        <AdvantagesItem />
        <AdvantagesItem />
        <AdvantagesItem />
        <AdvantagesItem />
        <AdvantagesItem />
        <AdvantagesItem />
        <AdvantagesItem />
        <AdvantagesItem />
      </SimpleGrid>
    </Box>
  );
};

export default Advantages;
