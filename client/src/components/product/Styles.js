import { makeStyles } from "@mui/styles";
import Color from "color";
import { red } from "@mui/material/colors";
export default makeStyles((theme) => ({
  container: {
    height: "430px",
    borderStyle: "solid",
    borderColor: theme.palette.primary,
    borderRadius: 16,
    
  },
  actionArea: {
    borderRadius: 16,
    
  },
  card: ({ color }) => ({
    width: 220,
    borderRadius: 1,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 8px 0 ${Color("#5ce54c")
        .rotate(-10)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));
