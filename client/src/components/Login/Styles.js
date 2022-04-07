import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({}));
export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-1000vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "1000vw",
    scale: 1.2,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export const pageStyle = {
//   position: "absolute",
};
