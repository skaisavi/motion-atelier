export const atelierEase = [0.22, 1, 0.36, 1] as const;

export const revealTransition = {
  duration: 1.1,
  ease: atelierEase,
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};
