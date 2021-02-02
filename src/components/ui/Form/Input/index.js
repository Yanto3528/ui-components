import React from "react";
import { AnimatePresence } from "framer-motion";
import * as Icon from "react-icons/ai";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import { StyledInput } from "./styles";

const Input = React.forwardRef(
  (
    { error, errorMessage, label, name, iconName, onIconClick, ...props },
    ref
  ) => {
    const IconComponent = Icon[iconName];
    return (
      <Label htmlFor={name}>
        <span>{label}</span>
        {IconComponent ? (
          <div>
            <StyledInput name={name} error={error} {...props} ref={ref} />
            <IconComponent size="1.2em" onClick={onIconClick} />
          </div>
        ) : (
          <StyledInput name={name} error={error} {...props} ref={ref} />
        )}
        <AnimatePresence>
          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </AnimatePresence>
      </Label>
    );
  }
);

export default Input;
