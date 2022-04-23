import React from "react";
import PropTypes from "prop-types";
import SideBar from "../sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import AddEditProduct from "../../features/product/add-edit-product/AddEditProduct";

Admin.propTypes = {};

function Admin(props) {
  return (
    <>
      <SideBar></SideBar>
      <Routes>
        <Route
          path="/add-product"
          element={<AddEditProduct></AddEditProduct>}
        ></Route>
      </Routes>
    </>
  );
}

export default Admin;
