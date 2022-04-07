import { makeStyles } from "@mui/styles";
import Color from "color";
import { red } from "@mui/material/colors";
export default makeStyles((theme) => ({
  container: {
    height: "720px",
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
  paper: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    margin: "0 0 10px 0",
  },
  title: {
    marginBottom: "10px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
  },
  footer: {
    marginTop: "10px",
  },
}));
