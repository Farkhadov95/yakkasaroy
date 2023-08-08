import React, { ReactNode } from "react";
import { Collapse, Button } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const FeedbackText = ({ children }: Props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Collapse startingHeight={100} in={show}>
        {children}
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Button>
    </>
  );
};

export default FeedbackText;
