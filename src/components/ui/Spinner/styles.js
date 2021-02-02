import styled from "styled-components";
import { motion } from "framer-motion";

import { getColor } from "../../../utils";

export default styled(motion.span).attrs(() => ({ className: "loading-icon" }))`
  display: inline-block;
  width: ${({ size }) => (size ? size : "15px")};
  height: ${({ size }) => (size ? size : "15px")};
  border: 0.2em solid ${({ theme, color }) => getColor(theme, color)};
  border-top-color: transparent;
  border-radius: 50%;
`;
