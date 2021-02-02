import React from "react";
import LoadingIcon from "./styles";

const Spinner = (props) => {
  return (
    <LoadingIcon
      {...props}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, loop: Infinity, ease: "linear" }}
    />
  );
};

export default Spinner;
