import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../bikeData.json";
import Banner from "../components/Banner";
import { useCart } from "../context/CartContext";

const Listing = () => {
  const { type } = useParams();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState([]);
  const filteredBikes = data.filter((bike) => bike.type.includes(type));

  const handleAddToCart = (bike) => {
    addToCart(bike);
    setAddedItems((prev) => [...prev, bike.id]);
  };

  return (
    <div className="mx-[120px]">
      <div className="pt-4">
        <Banner title={`${type} Bikes`} />
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredBikes.map((bike, index) => {
            const isAdded = addedItems.includes(bike.id);
            return (
              <div key={index} className="px-0">
                <div className="bg-white rounded-xl shadow-md text-center p-6">
                  <h3 className="font-semibold mb-5 text-[20px]">{bike.name}</h3>
                  <Link to={`/details/${bike.id}`}>
                    <img
                      src={bike.bicycle_image}
                      alt={bike.name}
                      className="mx-auto h-40 object-contain"
                    />
                  </Link>
                  <img
                    src={bike.feature_2_image}
                    alt="Feature"
                    className="mx-auto my-3 h-12 object-contain"
                  />
                  <div className="text-[#8DC63F] text-lg font-bold">
                    ₹{bike.discountedPrice.toLocaleString("en-IN")}
                    <span className="text-gray-400 line-through ml-2 font-normal">
                      ₹{bike.actualPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(bike)}
                    disabled={isAdded}
                    className={`mt-3 px-4 py-2 rounded-full transform transition duration-300 shadow-md text-white ${
                      isAdded
                        ? "bg-[#8DC63F] cursor-default"
                        : "bg-[#222222] hover:scale-105"
                    }`}
                  >
                    {isAdded ? "✔ Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listing;