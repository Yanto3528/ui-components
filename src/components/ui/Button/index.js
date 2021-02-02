import React from "react";
import ButtonStyles from "./styles";
import Spinner from "../Spinner";

const Button = ({ children, loading, disabled, ...props }) => {
  return (
    <ButtonStyles disabled={loading ? loading : disabled} {...props}>
      {loading ? <Spinner /> : children}
    </ButtonStyles>
  );
};

export default Button;
