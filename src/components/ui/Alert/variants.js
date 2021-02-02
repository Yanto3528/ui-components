export const slideInVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
