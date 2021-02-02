import React from "react";
import Button from "./";

export default {
  title: "main/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Submit",
  color: "primary",
  width: "",
  padding: "",
  radius: "",
  fluid: false,
  loading: false,
  disabled: false,
  outline: false,
  rounded: false,
};
