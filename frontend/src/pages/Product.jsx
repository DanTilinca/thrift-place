import React from "react";

const Product = () => {
  return (
    <main className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-64 object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">Product Name</h2>
        <p className="text-gray-700 mb-4">$Price</p>
        <p className="text-gray-700">Detailed description of the product...</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Buy Now</button>
      </div>
    </main>
  );
};

export default Product;
