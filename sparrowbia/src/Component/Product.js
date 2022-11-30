import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  width: 280px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  // background-color: #f5fbfd;
  position: relative;

  &: hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 82%;
  z-index: 2;
`;
const Detail = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -10px;
  bottom: 0;
`;
const Title = styled.h6``;
const Price = styled.p``;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = (props) => {
  props = props.item;
  function clickIcon(){
    alert("Product Description")
  }
  return (
    <>
      <Container>
        <Image src={props.selectedFile} />
        <Detail>
          <Title>{props.Title}</Title>
          <Price>{props.Price}</Price>
        </Detail>
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon onClick={clickIcon}>
            <SearchOutlinedIcon/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
        </Info>
      </Container>
    </>
  );
};

export default Product;
