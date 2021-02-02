import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { getRadius, getColorWithAlpha } from "../../../../utils";

export const SelectDropdown = styled(motion.ul)`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  transform: translateY(100%);
  border: 1px solid ${({ theme }) => theme.lightgrey};
  border-radius: ${getRadius};
  background-color: white;
`;

export const SelectDropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
  }
  ${({ open }) =>
    open &&
    css`
      &:hover {
        background-color: ${getColorWithAlpha};
        border-bottom-color: ${getColorWithAlpha};
      }
    `}
  ${({ center }) =>
    center &&
    css`
      text-align: center;
      color: ${({ theme }) => theme.lightgrey2};
    `}
`;
