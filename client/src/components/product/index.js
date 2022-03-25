import React from "react";
import { Container, Grid } from "@mui/material";
import useStyles from "./Styles";

export default function Product({ res , pag }) {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="row-reverse" justifyContent="center">
        {res}
      </Grid>
      {/* //Pagination */}
      {pag}
    </Container>
  );
}
