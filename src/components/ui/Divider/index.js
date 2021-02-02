import React from "react";

import { DividerWrapper, DividerContent } from "./styles";

const Divider = ({ children, orientation, color, bg, ...props }) => {
  return (
    <DividerWrapper {...props}>
      <DividerContent orientation={orientation} color={color} bg={bg}>
        {children}
      </DividerContent>
    </DividerWrapper>
  );
};

export default Divider;
