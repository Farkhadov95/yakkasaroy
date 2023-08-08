import CustomHeading from "../CustomHeading";
import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import ChefsItem from "./ChefsItem";

const Chefs = () => {
  const chefs = [
    {
      img: "src/assets/images/chefs/chef-asror.webp",
      img_info: "chef-asror",
      name: "Asror",
      position: "Шеф-повар",
    },
    {
      img: "src/assets/images/chefs/chef-ravshan.webp",
      img_info: "chef-ravshan",
      name: "Ravshan",
      position: "Шеф-повар",
    },
    {
      img: "src/assets/images/chefs/chef-jahongir.webp",
      img_info: "chef-jahongir",
      name: "Jahongir",
      position: "Шеф-повар выездного ресторанного обслуживания",
    },
    {
      img: "src/assets/images/chefs/manager-sarvar.webp",
      img_info: "manager-Sarvar",
      name: "Sarvar",
      position: "F&B менеджер",
    },
  ];

  return (
    <Box paddingY={10}>
      <CustomHeading>Наши Повара</CustomHeading>
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        justifyContent="space-between"
        padding={3}
      >
        {chefs.map((chef, index) => (
          <ChefsItem
            key={index}
            imageSrc={chef.img}
            imageInfo={chef.img_info}
            name={chef.name}
            position={chef.position}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Chefs;
