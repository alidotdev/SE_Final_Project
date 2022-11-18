import React from "react";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../actions/posts";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Products = () => {
  const fetchProducts = useDispatch();
  const prod = useSelector((state) => state.products);
  useEffect(() => {
    fetchProducts(getProducts());
  }, []);
  return (
    <Container>
      {prod[0]?.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
