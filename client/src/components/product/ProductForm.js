import React, { useState, useEffect } from "react";
import "./ProductForm.css";
import { useDispatch } from "react-redux";
import { createProductRequest } from "../../redux/reducers/product";
import { toast } from "react-toastify";

const ProductForm = ({ btnTxt, data }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [describe, setDescription] = useState("");
  const [img, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
 

  const handleSunmit = (e) => {
    e.preventDefault();
    let newData = { name, describe, img, price, brand };
    dispatch(createProductRequest(newData));
    setTimeout(() =>{ 
      toast.success("Thêm thành công");
    }, 500);
  };

  useEffect(() => {
    if (data) {
      setName(data.title);
      setDescription(data.describe);
      setPrice(data.price);
      setImage(data.img);
      setBrand(data.brand);
    }
  }, [data]);

  return (
    <div className="product_form">
      <form onSubmit={handleSunmit}>
        <input
          type="text"
          value={name}
          placeholder="Product title"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={describe}
          placeholder="Product description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={price}
          placeholder="Product price"
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={brand}
          placeholder="Product brand"
          required
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          value={img}
          placeholder="Product image"
          required
          onChange={(e) => setImage(e.target.value)}
        />

        <button>{true ? "Loading..." : btnTxt}</button>
      </form>
    </div>
  );
};

export default ProductForm;
