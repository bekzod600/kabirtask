export default {
  directives: {
    "pop-right": {
      initial: { x: 20, opacity: 0 },
      visibleOnce: {
        x: 0,
        opacity: 1,
        delay: 300,
        transition: { ease: "easyInUot", delay: 300, duration: 1000 },
      },
    },
    "pop-opacity": {
      initial: { opacity: 0 },
      visibleOnce: {
        opacity: 1,
        delay: 300,
        transition: { delay: 300, duration: 1000, ease: "easyInUot" },
      },
    },
  },
};
