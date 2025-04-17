import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../bikeData.json";
import { Link } from 'react-router-dom'

const BicycleCarousel = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    setBicycles(data);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-[#222222] text-white py-10 px-10 rounded-[20px]">
      <div className="text-center mb-5">
      <h2 className="text-[40px] font-bold leading-[1.1] pb-[15px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Uncover <br />
            <em className="text-[#8DC63F]">Cradiac Collection</em>
            <img src="/assets/bike-1-charac.svg" alt="Direct Test" />
     </h2>
      </div>

      <Slider {...settings }>
        {bicycles.map((bike, index) => (
          <Link to={`/details/${bike.id}`}>
          <div key={index} className="bg-white text-black p-4 rounded-lg transition-transform duration-300 hover:scale-105 shadow-md">
            <h3 className="text-[30px] font-bold text-center mb-2">{bike.name}</h3>
            <img src={bike.feature_1_image} alt="Feature" className="mx-auto mb-2" />
            <img src={bike.bicycle_image} alt={bike.name} className="mx-auto mb-2" />
            <img src={bike.feature_2_image} alt="Feature" className="mx-auto mb-2" />
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default BicycleCarousel;