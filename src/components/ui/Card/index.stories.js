import React from "react";
import Card from "./";
import Button from "../Button";

export default {
  title: "main/Card",
  component: Card,
};

const Title = (args) => <Card.Title {...args} />;
const Body = (args) => <Card.Body {...args} />;
const Image = (args) => <Card.Image {...args} />;
const ButtonGroup = (args) => <Card.ButtonGroup {...args} />;

export const MainCard = (args) => (
  <Card {...args}>
    <Title {...Title.args} />
    <Body {...Body.args} />
    <Image {...Image.args} />
    <ButtonGroup {...ButtonGroup.args} />
  </Card>
);

Title.args = {
  children: "Hello There",
};
Body.args = {
  children: "I am a web developer",
};

Image.args = {
  src:
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
};

ButtonGroup.args = {
  children: (
    <>
      <Button color="danger">Cancel</Button>
      <Button color="primary">Save</Button>
    </>
  ),
};
