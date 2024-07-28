import gsap from "gsap";

const ResetAnimationBottom = (element) => {
  gsap.to(element, { duration: 0.5, y: 20, opacity: 0 });
};
export { ResetAnimationBottom };
