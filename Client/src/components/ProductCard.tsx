import React from "react";
import styled from "styled-components";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    _id,
    name,
    image,
    description,
    brand,
    category,
    price,
    countInStock,
    rating,
    numReviews,
  } = product;

  return (
    <>
      <Product>
        <img src={image} alt={name} width="300px" />
        <h4>{name}</h4>
        <p>{brand}</p>
        {/* <p>{description}</p> */}
      </Product>
    </>
  );
};

const Product = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  border-radius: 20px;
  padding: 0 20px 0 20px;
  img {
    margin-top: 20px;
    border-radius: 10px;
    width: 300px;
  }
`;

export default ProductCard;
