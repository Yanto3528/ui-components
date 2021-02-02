import React from "react";
import * as Icon from "react-icons/ai";

import IconContainer from "../../storybook/IconContainer";

const icons = Object.keys(Icon);

export default {
  title: "Icon/icon",
  component: Icon,
  argTypes: {
    color: { control: "color" },
  },
};

export const Icons = (args) =>
  icons.map((icon, index) => {
    const IconComponent = Icon[icon];
    return (
      <IconContainer>
        <IconComponent key={index} {...args} />
        <p>{icon}</p>
      </IconContainer>
    );
  });

Icons.args = {
  size: "1.5em",
  color: "",
};
