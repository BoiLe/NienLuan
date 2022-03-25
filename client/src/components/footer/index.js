import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import theme from "../../Theme";
import useStyles from "./Styles";

export default function Footer() {
  const classes = useStyles(theme);
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        className={classes.Box}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
