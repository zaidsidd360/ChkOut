import React from "react";
import styled from "styled-components";
import products from "../products.json";
import ProductCard from "./ProductCard";

const ProductList = (): JSX.Element => {
  return (
    <Container>
      <List>
        {products.map((product, idx) => {
          return <ProductCard product={product} key={idx} />;
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin: 30px 0 30px 0;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px; */
`;

export default ProductList;
