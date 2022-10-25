import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Header from "../Components/Header";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

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
  return (
    <Container>
      <Announcement />
      <Header />
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
        <Filter>
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
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
