import React from "react";
import { Avatar, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import FeedbackText from "./FeedbackText";

interface Feedback {
  id: number;
  name: string;
  image: string;
  text: string;
}

interface Props {
  feedback: Feedback;
}

const FeedbackCard = ({ feedback }: Props) => {
  return (
    <Card marginX={3}>
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="md">{feedback.name}</Heading>
        <Avatar name={feedback.name} src={feedback.image} />
      </CardHeader>
      <CardBody>
        <FeedbackText>{feedback.text}</FeedbackText>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
