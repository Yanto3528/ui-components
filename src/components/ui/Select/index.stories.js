import React from "react";

import Select from "./";

export default {
  title: "Form/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;
export const Default = Template.bind({});
Default.args = {
  onChange: () => {},
  placeholder: "Hello",
  label: "Food",
  error: false,
  searchable: true,
  errorMessage: "Please choose at least 1 food",
  multiple: false,
  options: [
    { label: "Chicken", value: "chicken" },
    { label: "Pork", value: "pork" },
    { label: "Soup", value: "soup" },
    { label: "Bread", value: "bread" },
    { label: "Rice", value: "rice" },
  ],
};
