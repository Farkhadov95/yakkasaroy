import { Heading, Image } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import titleDecoration from "../assets/icons/decor_separator.svg";

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
        src={titleDecoration}
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
