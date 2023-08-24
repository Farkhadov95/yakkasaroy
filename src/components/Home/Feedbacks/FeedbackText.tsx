import React, { ReactNode, useState } from "react";
import { Collapse, Button } from "@chakra-ui/react";

interface Props {
  children: string;
}

const FeedbackText = ({ children }: Props) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const TEXT_LENGTH = 115;
  const isShort = children.length < TEXT_LENGTH;

  return (
    <>
      <Collapse startingHeight={100} in={show}>
        {children}
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem" hidden={isShort}>
        Показать {show ? "меньше" : "больше"}
      </Button>
    </>
  );
};

export default FeedbackText;
