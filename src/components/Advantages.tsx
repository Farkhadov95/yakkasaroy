import { Box, Card, Image, SimpleGrid, Text } from "@chakra-ui/react";
import AdvantagesItem from "./Advantages/AdvantagesItem";

const Advantages = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="white"
      padding={10}
    >
      <Text fontSize="2xl" fontWeight="bold">
        Наше преимущество
      </Text>

      <Image
        src="src/assets/icons/decor_separator.svg"
        width="100px"
        height="30px"
        alt="decoration-element"
      />

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        marginTop={5}
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
