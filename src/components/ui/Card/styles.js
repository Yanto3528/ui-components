import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.box};
  width: ${({ width }) => (width ? width : "500px")};
  height: ${({ height }) => height};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  padding: 10px 20px;
  text-align: ${({ center }) => (center ? "center" : "left")};
`;
export const CardBody = styled.div`
  padding: 10px 20px;
`;
export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const CardButtonGroup = styled.div`
  display: flex;
  align-self: ${({ position }) => {
    switch (position) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      default:
        return "flex-end";
    }
  }};
  padding: 10px 20px;
  button:not(:last-child) {
    margin-right: 10px;
  }
`;
