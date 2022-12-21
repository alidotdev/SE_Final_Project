import React from "react";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/Login"
import { Routes, Route } from "react-router-dom";
import ManageProducts from "./Pages/ManageProducts";
import ProdList from "./Pages/ProductList";
import ProductDescription from "./Pages/ProductDescription";
import Cart from "./Pages/Cart";
import Address from "./Pages/Address";
import Payment from "./Pages/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe("pk_test_51MCNmyE4XPO5iY4D7GcWPdlJ4oeBcUM4jU4qxR0wX9nCekT73Ko1ITHPmXmUQpw7v8iyWOMuomXSCDVddS1UKvuA00po5k9r4m");

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/ManageProducts" element={<ManageProducts />} />
        <Route path="/Products" element={<ProdList />} />
        <Route path="/ProductsDescription" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements> } />

      </Routes>
    </>

  );
}
export default App;
