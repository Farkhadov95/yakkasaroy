import CustomHeading from "../CustomHeading";
import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import ChefsItem from "./ChefsItem";
import chefAsror from "../../assets/images/chefs/chef-asror.webp";
import chefRavshan from "../../assets/images/chefs/chef-ravshan.webp";
import chefJahongir from "../../assets/images/chefs/chef-jahongir.webp";
import managerSarvar from "../../assets/images/chefs/manager-sarvar.webp";

const Chefs = () => {
  const chefs = [
    {
      img: chefAsror,
      img_info: "chef-asror",
      name: "Asror",
      position: "Шеф-повар",
    },
    {
      img: chefAsror,
      img_info: "chef-ravshan",
      name: "Ravshan",
      position: "Шеф-повар",
    },
    {
      img: chefJahongir,
      img_info: "chef-jahongir",
      name: "Jahongir",
      position: "Шеф-повар выездного ресторанного обслуживания",
    },
    {
      img: managerSarvar,
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
