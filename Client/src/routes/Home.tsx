import React from "react";
import Banner from "../components/Banner";
import products from "../products.json";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <Banner />
      <ProductList heading="Electronics" products={products} />
      <ProductList heading="Kitchen Essentials" products={products} />
      <ProductList heading="For kids" products={products} />
    </>
  );
}

export default Home;
