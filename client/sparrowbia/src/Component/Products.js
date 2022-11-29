import React from "react";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Products = (props) => {
  props = props.item;
  console.log("In product: ",props)
  return (
    <Container>
      {props[0].map((x) => {
        return <Product item={x} />;
      })}
    </Container>
  );
};

export default Products;
