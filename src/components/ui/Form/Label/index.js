import React from "react";

import { FormLabel } from "./styles";

const Label = ({ children, ...props }) => (
  <FormLabel {...props}>{children}</FormLabel>
);

export default Label;
