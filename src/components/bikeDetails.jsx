import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import bicycles from '../bikeData.json';
import { useCart } from "../context/CartContext";

const BikeDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const bike = bicycles.find((b) => String(b.id) === id);
  const [isAdded, setIsAdded] = useState(false); // track add state

  if (!bike) return <div>Bike not found!</div>;

  const handleAddToCart = () => {
    addToCart(bike);
    setIsAdded(true);
  };

  return (
    <div className="flex bg-[#F4FAEC] rounded-[20px] pt-[100px] pb-[100px] px-10 w-full my-10 shadow-md">
      {/* Left Side - Image */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={bike.bicycle_image}
          alt={bike.name}
          className="h-[350px] object-contain"
        />
      </div>

      {/* Right Side - Details */}
      <div className="w-1/2 pl-[140px] flex flex-col justify-center">
        <h2 className="text-5xl font-bold mb-6">{bike.name}</h2>
        <p className="text-gray-600 mb-5 max-w-[500px]">{bike.description}</p>

        <img
          src={bike.feature_1_image}
          alt="Feature Icons"
          className="mb-5 max-w-[300px]"
        />

        <div className="flex items-center mb-5">
          <span className="text-black font-semibold mr-4 text-[25px]">
            ₹{bike.discountedPrice}.00
          </span>
          <span className="line-through text-gray-400 text-[20px]">
            ₹{bike.actualPrice}.00
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`text-white px-6 py-2 rounded-full transition duration-200 w-fit shadow-md ${
            isAdded ? 'bg-[#222222]' : 'bg-[#8DC63F] hover:bg-[#74A631]'
          }`}
          disabled={isAdded}
        >
          {isAdded ? "✔ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default BikeDetails;