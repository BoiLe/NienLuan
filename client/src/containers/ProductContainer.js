import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductRequest } from "../redux/reducers/product";
import ProductItem from "../components/product/ProductItem.js";
import Product from "../components/product";
import Pagina from "../components/pagination";
export default function ProductContainer({ search }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  React.useEffect(() => {
    dispatch(getProductRequest());
  }, [dispatch]);
  const [itemperPage, setItemperPage] = useState(10);
  const [itemPage, setItemPage] = useState({
    start: 0,
    end: itemperPage,
  });
  const onPaginatinChange = (start, end) => {
    setItemPage({ start: start, end: end });
  };
  const response = products
    //search
    .filter((res) => {
      if (search == "") {
        return res;
      } else if (res.name.toLowerCase().includes(search.toLowerCase())) {
        return res;
      }
    })
    //Pagination
    .slice(itemPage.start, itemPage.end)
    //reder Product
    .map((res) => (
      <Grid item lg={12 / 5} xs={6} md={3} mt={1} mb={1}>
        <Box>
          <ProductItem key={res._id} product={res} />
        </Box>
      </Grid>
    ));

  const totalPage = Math.ceil(products.length / itemperPage);
  const pag = (
    <Pagina
      itemperPage={itemperPage}
      onPaginatinChange={onPaginatinChange}
      totalPage={totalPage}
    />
  );

  return (
    <>
      <Product res={response} pag={pag} />
    </>
  );
}
