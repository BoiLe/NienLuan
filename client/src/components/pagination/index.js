import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Button,
  Stack,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import useStyles from "./Styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Pagina({ itemperPage, onPaginatinChange, totalPage }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    onPaginatinChange(itemperPage * page - itemperPage, itemperPage * page);
  }, [page]);
  const classes = useStyles();
  return (
    <Stack spacing={2} alignItems="center"  className= {classes.pag}>
      <Typography>Page: {page}</Typography>
      <Pagination
        variant="outlined"
        color="secondary"
        onChange={handleChange}
        count={totalPage}
        renderItem={(item) => (
          <PaginationItem
            size="large"
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
