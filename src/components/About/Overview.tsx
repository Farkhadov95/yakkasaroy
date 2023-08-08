import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../CustomHeading";

const Overview = () => {
  return (
    <Box paddingTop={10}>
      <CustomHeading>Наш Ресторан</CustomHeading>
      <Text textAlign="center" fontSize="xl">
        Виртуальный тур
      </Text>
      <Box paddingTop={5} paddingBottom={10}>
        <iframe
          id="advanced_iframe_2"
          name="advanced_iframe_2"
          src="https://pro360.uz/yakkasaroy-restaurant/"
          width="100%"
          height="500"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Overview;
