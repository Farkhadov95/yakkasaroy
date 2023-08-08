import { Box, Image, Text, Link } from "@chakra-ui/react";
import CustomHeading from "../CustomHeading";

const About = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="white"
      padding={10}
    >
      <CustomHeading>О НАС</CustomHeading>

      <Text fontSize="xl" fontWeight="bold" padding={5} textAlign="center">
        Место где сплетаются судьбы
      </Text>

      <Text fontSize="xl" padding={5} textAlign="justify">
        Банкетный зал «Yakka Saroy» – роскошное и обворожительное место,
        созданное специально для вашего праздника, будь то свадьба, день
        рождение, утренний плов или корпоратив вашей фирмы. Наш ресторан с его
        убранством и высоким сервисом создадут атмосферу, которую вы желаете, а
        еда порадует вас своим вкусом и красивой подачей.
      </Text>

      <iframe
        width="100%"
        height="400x"
        src="https://www.youtube.com/embed/g6FFRDykTTI"
        title='Банкетный зал "Yakka Saroy" в Ташкенте'
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={5}
      >
        <Text>Бронируйте по телефону</Text>
        <Link
          href="tel:+998 (97) 401-00-40"
          className="body-1 contact-number hover-underline"
        >
          +998 (97) 401-00-40
        </Link>
      </Box>
    </Box>
  );
};

export default About;
