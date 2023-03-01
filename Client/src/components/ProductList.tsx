import React from "react";
import products from "../products.json";
import ProductCard from "./ProductCard";

const ProductList = (): JSX.Element => {
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductList;
