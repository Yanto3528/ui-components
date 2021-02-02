import React from "react";

import { fadeSlideIn } from "../../../../animation";

import { StyledErrorMessage } from "./styles";

const ErrorMessage = (props) => {
  return (
    <StyledErrorMessage
      {...props}
      variants={fadeSlideIn}
      initial="initial"
      animate="animate"
      exit="initial"
    />
  );
};

export default ErrorMessage;
