import { Heading, Image } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CustomHeading = ({ children }: Props) => {
  return (
    <>
      <Heading fontSize="2xl" textAlign="center">
        {children}
      </Heading>

      <Image
        src="src/assets/icons/decor_separator.svg"
        width="100px"
        height="30px"
        alt="decoration-element"
        margin="auto"
        marginBottom={5}
      />
    </>
  );
};

export default CustomHeading;
