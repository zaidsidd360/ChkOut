import React from "react";

interface ProductCardProps {
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
}

const ProductCard = (product: ProductCardProps) => {
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
      <div>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProductCard;
