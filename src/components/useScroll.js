import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (num) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: num });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
