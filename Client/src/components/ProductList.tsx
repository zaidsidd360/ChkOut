import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

interface ProductListProps {
  heading: string;
  products: any;
}

const ProductList = (props: ProductListProps): JSX.Element => {
  const { heading, products } = props;
  return (
    <>
      <ContainerMain>
        <h1>{heading}</h1>
        <ProductsContainer>
          {products.map((product: any, idx: number) => {
            return <ProductCard product={product} key={idx} />;
          })}
        </ProductsContainer>
        <span>View more</span>
      </ContainerMain>
    </>
  );
};

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0 2em 0;
  h1 {
    font-size: 2.5em;
    margin: 1em 0 1em 0.5em;
  }
  span {
    padding: 0.3em;
    border-radius: 0.8em;
    background-color: #151515;
    text-decoration: none;
    color: #ffffff;
    margin-left: auto;
    cursor: pointer;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  gap: 1em;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-bottom: 1em;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default ProductList;
