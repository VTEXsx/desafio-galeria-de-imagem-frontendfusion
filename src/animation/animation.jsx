import gsap from "gsap";

const AnimationBottom = (element) => {
  gsap.to(element, { duration: 1, y: 0, opacity: 1 });
};
export { AnimationBottom };
