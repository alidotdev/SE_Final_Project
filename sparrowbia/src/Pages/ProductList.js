import React from "react";
import styled from "styled-components";
import Products from "../Component/Products";
import Footer from "../Component/footer";
import Title from "../Component/MainTitle";
import Navbar from "../Component/NavBar";
import { useSelector } from "react-redux";
const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
`;
const Option = styled.option``;

const ProductList = () => {

  const product = useSelector((state) => state.products);
  console.log("products",product)
  return (
    <Container>
      <Title />
      <Navbar />
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Brown</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Purple</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Extra-Small</Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
            <Option>Extra-Large</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Fabric
            </Option>
            <Option>Chiffon</Option>
            <Option>Cotton</Option>
            <Option>Crepe</Option>
            <Option>Linen</Option>
            <Option>Satin</Option>
            <Option>Silk</Option>
          </Select>
        </Filter>
        {/* <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Oldest</Option>
            <Option>Alphabetically (A-Z)</Option>
            <Option>Alphabetically (Z-A)</Option>
            <Option>Price (Low to High)</Option>
            <Option>Price (High to Low)</Option>
          </Select>
        </Filter> */}
      </FilterContainer>
      <Products item = {product} />
      <Footer />
    </Container>
  );
};

export default ProductList;
