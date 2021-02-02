import React from "react";
import { action } from "@storybook/addon-actions";

import Input from "./";

export default {
  title: "Form/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your name",
  error: false,
  errorMessage: "Name is required",
  type: "text",
  bottom: false,
  label: "Name",
  iconName: "",
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  placeholder: "Enter your name",
  error: false,
  errorMessage: "Name is required",
  type: "text",
  bottom: false,
  label: "Name",
  iconName: "AiOutlineUser",
  onIconClick: action("Icon Clicked"),
};
