import React from "react";

import Textarea from "./";

export default {
  title: "Form/Textarea",
  component: Textarea,
};

const Template = (args) => <Textarea {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Enter your description",
  error: false,
  errorMessage: "Description is required",
  rows: 5,
  cols: 10,
  bottom: false,
  label: "Description",
  icon: null,
};
