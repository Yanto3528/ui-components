export const fadeSlideIn = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
};

export const dropdownfadeSlideIn = {
  initial: {
    opacity: 0,
    y: "90%",
    bottom: 0,
  },
  animate: {
    opacity: 1,
    y: "100%",
    bottom: -10,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: "90%",
    bottom: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const slideLeftIn = {
  initial: {
    width: 0,
  },
  animate: {
    width: "auto",
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    width: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const dropdownPlaceholder = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
};
