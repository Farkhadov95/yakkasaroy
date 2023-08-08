import { Box, Heading, Image, Text } from "@chakra-ui/react";

interface Chef {
  imageSrc: string;
  imageInfo: string;
  name: string;
  position: string;
}

const ChefsItem = ({ imageSrc, imageInfo, name, position }: Chef) => {
  return (
    <Box textAlign="center" padding={3}>
      <Image src={imageSrc} alt={imageInfo} paddingBottom={5} />
      <Text fontSize="xl">{name}</Text>
      <Heading fontSize="xl">{position}</Heading>
    </Box>
  );
};

export default ChefsItem;
