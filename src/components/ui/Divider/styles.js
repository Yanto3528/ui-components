import styled, { css } from "styled-components";
import { getColor } from "../../../utils";

const orientationLeftStyles = css`
  left: 20px;
  transform: translate(0, -50%);
`;

const orientationRightStyles = css`
  right: 20px;
  transform: translate(0, -50%);
`;

const defaultOrientationStyles = css`
  left: 50%;
`;

export const DividerWrapper = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.lightgrey};
  position: relative;
  margin: 12px 0;
`;

export const DividerContent = styled.span`
  display: inline-block;
  padding: 0 15px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme, bg }) => (bg ? getColor(theme, bg) : "white")};
  color: ${({ theme, color }) => color && getColor(theme, color)};
  font-weight: 500;
  ${({ orientation }) => {
    switch (orientation) {
      case "left":
        return orientationLeftStyles;
      case "right":
        return orientationRightStyles;
      default:
        return defaultOrientationStyles;
    }
  }}
`;
