import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    brand: {
      900: "#FFCD75",
    },
  },
});

export default theme;
