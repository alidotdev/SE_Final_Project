import React from "react";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/Login"
import { Routes, Route } from "react-router-dom";
import ManageProducts from "./Pages/ManageProducts";
import ProdList from "./Pages/ProductList";
import ProductDescription from "./Pages/ProductDescription";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/ManageProducts" element={<ManageProducts />} />
        <Route path="/Products" element={<ProdList />} />
        {/* <Route path="/ProductsDescription" element={<ProductDescription />} /> */}
      </Routes>
    </>

  );
}
export default App;
