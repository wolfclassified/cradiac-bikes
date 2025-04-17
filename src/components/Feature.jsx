import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bikesData from "../bikeData.json";

const Feature = () => {

  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    setBikes(bikesData);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="pb-[50px]">
        <div className="flex justify-center items-center text-center pt-[50px]">
            <h2 className="text-4xl font-bold mb-6">Feature <em style={{ color: "#8DC63F" }}>Collection</em></h2>
        </div>
    <div className="relative w-full max-w-6xl mx-auto">
    <Slider {...settings}>
      {bikes.map((bike, index) => (
        <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center mx-2">
          <h3 className="text-lg font-semibold">{bike.name}</h3>
          <img src={bike.bicycle_image} alt={bike.name} className="w-full h-auto my-3" />
          <p className="text-gray-500 line-through">₹{bike.actualPrice}</p>
          <p className="text-[#8DC63F] font-bold">₹{bike.discountedPrice}</p>
          <Link to={`/details/${bike.id}`}>
            <button className="mt-3 bg-[#222222] text-white py-2 px-4 rounded-[30px] transition-all duration-300 hover:shadow-lg hover:scale-105">Quick View</button>
          </Link>
        </div>
      ))}
    </Slider>
     </div>
    </div>
        );
    };

    const CustomNextArrow = ({ onClick }) => (
        <div
          className="absolute right-[-45px] top-1/2 transform -translate-y-1/2 bg-[#222222] text-white p-3 rounded-full cursor-pointer flex items-center justify-center w-8 h-8 hover:shadow-lg hover:scale-105"
          onClick={onClick}
        >
          <span>▶</span>
        </div>
      );

      const CustomPrevArrow = ({ onClick }) => (
        <div
          className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-[#222222] text-white p-3 rounded-full cursor-pointer flex items-center justify-center w-8 h-8 hover:shadow-lg hover:scale-105"
          onClick={onClick}
        >
          <span>◀</span>
        </div>
      );
export default Feature