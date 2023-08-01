import { Box, Image, Text, Link } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor="black"
      color="white"
      padding={10}
    >
      <Text fontSize="2xl" fontWeight="bold">
        О НАС
      </Text>

      <Image
        src="src/assets/icons/separator.svg"
        width="100px"
        height="30px"
        alt="decoration-element"
      />

      <Text fontSize="2xl" padding={5}>
        Место где сплетаются судьбы
      </Text>

      <Text fontSize="xl" fontWeight="bold" padding={5}>
        Банкетный зал «Yakka Saroy» – роскошное и обворожительное место,
        созданное специально для вашего праздника, будь то свадьба, день
        рождение, утренний плов или корпоратив вашей фирмы. Наш ресторан с его
        убранством и высоким сервисом создадут атмосферу, которую вы желаете, а
        еда порадует вас своим вкусом и красивой подачей.
      </Text>

      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/g6FFRDykTTI"
        title='Банкетный зал "Yakka Saroy" в Ташкенте'
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

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
