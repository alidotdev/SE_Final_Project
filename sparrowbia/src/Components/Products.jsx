import React from "react";
import styled from "styled-components";
import { ListingProducts } from "../Data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {ListingProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
