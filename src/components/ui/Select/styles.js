import styled, { css } from "styled-components";

import { getRadius } from "../../../utils";

const disabledStyles = css`
  opacity: 0.5;
  cursor: not-allowed;
`;

export const SelectContainer = styled.div`
  width: 100%;
  font-size: 1.4rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  outline: none;
  cursor: pointer;
  border-radius: ${getRadius};
  transition: all 0.3s;
  border-color: ${({ error, theme }) => error && theme.danger};
  > label {
    width: 100%;
  }
  ${({ disabled }) => disabled && disabledStyles};
`;
