import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledErrorMessage = styled(motion.p)`
  color: ${({ theme }) => theme.danger};
  font-size: 1.4rem;
  > span {
    text-transform: capitalize;
  }
`;
