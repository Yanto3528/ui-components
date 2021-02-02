export const getColor = (theme, color) => {
  if (!color) {
    return theme.primary;
  }

  return theme[color] ? theme[color] : color;
};

export const getColorWithAlpha = ({ theme, color }) => {
  return getColor({ theme, color }) + "26";
};

export const getRadius = ({ rounded, radius }) => {
  return rounded ? "24px" : radius ? radius : "5px";
};
