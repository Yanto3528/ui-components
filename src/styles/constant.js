import { css } from "styled-components";
import { getRadius } from "../utils";

const bottomStyles = css`
  border: none;
  border-radius: 0;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
  border-bottom-color: ${({ error, theme }) => error && theme.danger};
  &:focus {
    border-bottom-color: ${({ error, theme }) => !error && theme.primary};
  }
`;

export const baseInputStyles = css`
  width: 100%;
  outline: none;
  border: 1px solid ${({ theme }) => theme.lightgrey};
  border-radius: ${getRadius};
  padding: ${({ padding }) => (padding ? padding : "10px 15px")};
  transition: all 0.3s;
  border-color: ${({ error, theme }) => error && theme.danger};
  & + svg {
    transition: all 0.3s;
  }
  &:focus {
    border-color: ${({ error, theme }) => !error && theme.primary};
  }
  &:focus + svg {
    fill: ${({ theme }) => theme.lightgrey2};
  }
  ${({ bottom }) => bottom && bottomStyles}
`;
