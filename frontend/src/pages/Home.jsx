import React from "react";

const Home = () => {
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to Thrift Place</h2>
      <p className="mb-8">Buy and sell second-hand items locally and sustainably.</p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Placeholder for items - these will be dynamic */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-2">
            <h3 className="font-bold text-xl">Product Name</h3>
            <p className="text-gray-700">$Price</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
