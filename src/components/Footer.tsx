import { Box, ListItem, List, Image, Link, Text, Icon } from "@chakra-ui/react";
import { BsInstagram, BsTelegram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Box>
      <Box>
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3Add07fea009013467b391997ff4ea94c6b44520728e3ef50f9cb58f8e56456ac0&amp;source=constructor"
          width="100%"
          height="450"
        />
      </Box>
      <Image
        margin="auto"
        marginTop={20}
        src="src/assets/icons/logo.svg"
        width="183"
        height="195"
        loading="lazy"
        alt="yakkasaroy home"
      />

      <Image
        src="src/assets/icons/decor_separator.svg"
        width="200px"
        margin="auto"
      />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={10}
        marginBottom={10}
      >
        <address>Яккасарайский район, ул. Абдулла Каххара, дом 40Г</address>

        <Link href="tel:+88123123456">
          Телефон для справок : +998 (97) 040-04-04
        </Link>

        <Text>Каждый день : с 10.00 до 23.00</Text>
        <Link href="mailto:booking@grilli.com">info@yakkasaroy.com</Link>
      </Box>

      <List display="flex" justifyContent="center" paddingBottom={10}>
        <ListItem paddingLeft={5} paddingRight={5}>
          <Link href="https://www.instagram.com/yakkasaroy.uz/">
            <Icon as={BsInstagram} w={5} h={5} fill="brand.900" />
          </Link>
        </ListItem>

        <ListItem paddingLeft={5} paddingRight={5}>
          <Link href="https://t.me/yakkasaroy_com">
            <Icon as={BsTelegram} w={5} h={5} fill="brand.900" />
          </Link>
        </ListItem>

        <ListItem paddingLeft={5} paddingRight={5}>
          <Link href="https://www.facebook.com/pages/%D0%AF%D0%BA%D0%BA%D0%B0%D1%81%D0%B0%D1%80%D0%BE%D0%B9%20%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD/378973378971598/">
            <Icon as={BsFacebook} w={5} h={5} fill="brand.900" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Footer;
