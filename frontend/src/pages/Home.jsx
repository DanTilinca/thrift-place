// src/pages/Home.jsx
import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  // Simulăm o listă de produse
  const products = [
    {
      id: 1,
      name: "Vintage Jacket",
      price: 45,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Leather Boots",
      price: 60,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Retro T-shirt",
      price: 20,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Available Products</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
