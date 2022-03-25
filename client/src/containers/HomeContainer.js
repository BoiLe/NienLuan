import React, { useState } from "react";
import ProductContainer from "./ProductContainer";
import Header from "../components/header";
import Footer from "../components/footer";
export default function HomeContainer() {
  const [searchItem, setsearchItem] = useState("");
  const search = (data) => {
    setsearchItem(data)
  };

  return (
    <>
      <Header searchIte={search} />
      <ProductContainer search={searchItem}/>
      <Footer />
    </>
  );
}
