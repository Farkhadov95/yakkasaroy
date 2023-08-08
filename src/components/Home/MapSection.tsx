import { Box } from "@chakra-ui/react";

const MapSection = () => {
  return (
    <Box>
      <iframe
        src="https://yandex.com/map-widget/v1/?um=constructor%3Add07fea009013467b391997ff4ea94c6b44520728e3ef50f9cb58f8e56456ac0&amp;source=constructor"
        width="100%"
        height="450"
      />
    </Box>
  );
};

export default MapSection;
