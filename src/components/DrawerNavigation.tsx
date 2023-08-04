import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const DrawerNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        color="brand.900"
        onClick={onOpen}
        width="50px"
        borderRadius="0"
      >
        <Icon as={MdMenu} boxSize={6} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Навигация</DrawerHeader>

          <DrawerBody>
            <VStack
              justifyContent="center"
              spacing={4}
              padding={4}
              color="white"
            >
              <Link to="/">Главная</Link>
              <Link to="/menu">Меню</Link>
              <Link to="/">Кейтеринг</Link>
              <Link to="/">Почему мы</Link>
              <Link to="/">О нас</Link>
              <Link to="/">Контакты</Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Отмена
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
