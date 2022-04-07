import React, { useEffect, useState } from "react";
import ProductContainer from "./ProductContainer";
import Header from "../components/header";
import Footer from "../components/footer";
import Loading from "../components/loading/loading.js";
import { ToastContainer } from "react-toastify";
export default function HomeContainer() {
  const [searchItem, setsearchItem] = useState("");

  const search = (data) => {
    setsearchItem(data);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });
  return (
    <div>
      
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header searchIte={search} />
          <ProductContainer search={searchItem} />
          <Footer />
        </>
      )}
    </div>
  );
}
