import { Text, Box, Image } from "@chakra-ui/react";
import CustomHeading from "../CustomHeading";

const History = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      padding={10}
      justifyContent="space-between"
    >
      <Box
        width={{ sm: "100%", md: "47.5%", lg: "47.5%" }}
        marginBottom={{ sm: "15px", md: "0", lg: "0" }}
      >
        <CustomHeading>История</CustomHeading>

        <Text mb={2} textAlign="justify">
          Банкетный зал Yakka Saroy начал свою деятельность в 2011 году и
          завоевал доверие не только среди узбекистанцев, но и среди иностранных
          гостей.
        </Text>
        <Text mb={2} textAlign="justify">
          История Yakka Saroy начинается с семьи, где было пятеро детей. В тот
          момент, когда каждый в семье имел свой путь, тянул «свою тележку»,
          отец решил собрать и сплотить их всех и поставить общую цель. Чтобы
          каждый в семье вложил свой посильный вклад в общее дело. Они все
          вместе перепробовали разные виды бизнеса и наконец они приходят к
          тому, что хотят испытать свои силы в ресторанном бизнесе. После долгих
          усилий и ремонтных работ, наконец 10 декабря 2011 году ресторан
          открывает свои двери для народа.
        </Text>
        <Text mb={2} textAlign="justify">
          Самым ярким событием в истории «Yakka Saroy» является именно тот
          момент, когда глава семьи первым зашел в ресторан и смотря в сторону
          Кибла прочитал молитву. И после этого, дела пошли в гору.
        </Text>
        <Text mb={2} textAlign="justify">
          История Yakka Saroy является ярким примером проявления отцовской воли,
          который смог сплотить свою семью и что любая цель осуществима
          благодаря помощи и поддержки друг-друга.
        </Text>
      </Box>
      <Box
        width={{ sm: "100%", md: "47.5%", lg: "47.5%" }}
        backgroundImage="src/assets/icons/decor_img-pattern.svg"
      >
        <Image
          src="src/assets/images/about/about-banner.webp"
          alt="Демо фото ресторана"
          width={450}
          marginLeft="auto"
        />
        <Image
          src="src/assets/images/about/about-abs-image.webp"
          alt="Демо фото"
          width={250}
          marginTop="-20%"
          marginLeft="10%"
        />
      </Box>
    </Box>
  );
};

export default History;
