import React from "react";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { StyledTextarea } from "./styles";

const Textarea = ({ error, errorMessage, label, name, ...props }) => (
  <Label htmlFor={name}>
    <span>{label}</span>
    <StyledTextarea name={name} error={error} {...props} />
    {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </Label>
);

export default Textarea;
