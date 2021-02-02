import React from "react";
import {
  CardContainer,
  CardTitle,
  CardBody,
  CardImage,
  CardButtonGroup,
} from "./styles";

const Card = ({ children, ...props }) => {
  return <CardContainer {...props}>{children}</CardContainer>;
};

Card.Title = ({ children, ...props }) => (
  <CardTitle {...props}>{children}</CardTitle>
);
Card.Body = ({ children, ...props }) => (
  <CardBody {...props}>{children}</CardBody>
);
Card.Image = (props) => <CardImage {...props} />;
Card.ButtonGroup = ({ children, ...props }) => (
  <CardButtonGroup {...props}>{children}</CardButtonGroup>
);

export default Card;
