import "./style.css";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./datatablesource";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductRequest,
  deleteProductRequest,
} from "../../../redux/reducers/product.js";
import { toast } from "react-toastify";
import ModalAddProduct from "../../product/ModalAddProduct.js";
import ProductForm from "../../product/ProductForm.js";
export default function Datatable() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.allPosts.data);
  const productss = useSelector((state) => state.product.deletePost.data);
  console.log(products);
  useEffect(() => {
    dispatch(getProductRequest());
  }, [productss]);
  const [data, setData] = useState(products);

  const handleDelete = (id) => {
    if (window.confirm("Bạn chắn chắn muốn xóa")) {
      dispatch(deleteProductRequest(id));
      setTimeout(() => {
        toast.success("Đã xóa thành công");
      }, 500);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/product/:id" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div
              className="updateButton"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Update
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Sản phẩm
        <div
          className="link"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Thêm sản phẩm
        </div>
      </div>
      <DataGrid
        className="datagrid"
        rows={products}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      {modalOpen && (
        <ModalAddProduct setOpen={setModalOpen}>
          <ProductForm />
        </ModalAddProduct>
      )}
    </div>
  );
}
