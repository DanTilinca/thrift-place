import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h3 className="font-bold text-xl">{product.name}</h3>
        <p className="text-gray-700">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
