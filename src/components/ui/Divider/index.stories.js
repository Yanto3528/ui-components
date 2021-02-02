import React from "react";

import Divider from "./";

export default {
  title: "General/Divider",
  component: Divider,
};

const Template = (args) => <Divider {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Text",
  orientation: "",
  color: "",
  bg: "",
};
