import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductRequest } from "../redux/reducers/product";
import ProductItem from "../components/product/ProductItem.js";
import Product from "../components/product";
import Pagina from "../components/pagination";
export default function ProductContainer(searchItem) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  React.useEffect(() => {
    dispatch(getProductRequest());
  }, [dispatch]);
  const [itemperPage, setItemperPage] = useState(5);
  const [itemPage, setItemPage] = useState({
    start: 0,
    end: itemperPage,
  });
  const onPaginatinChange = (start, end) => {
    setItemPage({ start: start, end: end });
  };
  console.log(searchItem)
  const res = products.slice(itemPage.start, itemPage.end).map((product) => (
    <Grid item lg={12 / 5} xs={6} md={3} mt={1} mb={1}>
      <Box>
        <ProductItem key={product._id} product={product} />
      </Box>
    </Grid>
  ));
  console.log(res);
  const totalPage = Math.ceil(products.length / itemperPage);
  const pag = 
    <Pagina
      itemperPage={itemperPage}
      onPaginatinChange={onPaginatinChange}
      totalPage={totalPage}
    />
    
  return (
    <>
      <Product res={res} pag={pag} />
    </>
  );
}
