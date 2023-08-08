import { HStack, Text, Icon, Link, Flex, Box, Divider } from "@chakra-ui/react";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        padding={3}
        color="white"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 2, md: 5 }}
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 2, md: 5 }}
        >
          <Flex>
            <Icon as={MdLocationOn} marginEnd={1} />
            <Text fontSize="xs">
              Яккасарайский район, ул. Абдулла Каххара, дом 40Г
            </Text>
          </Flex>

          <Flex>
            <Icon as={MdAccessTime} marginEnd={1} />
            <Text fontSize="xs">Каждый день : с 10.00 до 23.00</Text>
          </Flex>
        </Flex>

        <Flex
          flexDirection={{ base: "row", sm: "column", md: "row" }}
          gap={{ base: 2, md: 5 }}
        >
          <Link href="tel:+11234567890">
            <Flex>
              <Icon as={MdPhone} marginEnd={1} />
              <Text fontSize="xs">+998(97)040-04-04</Text>
            </Flex>
          </Link>

          <Link href="mailto:info@yakkasaroy.com">
            <Flex>
              <Icon as={MdEmail} marginEnd={1} />
              <Text fontSize="xs">info@yakkasaroy.com</Text>
            </Flex>
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default TopBar;
