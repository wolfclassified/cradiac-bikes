import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import bikeData from '../bikeData.json';

const BestSellersCarousel = ({ heading = "Explore Best Sellers", type }) => {
  const [filteredBikes, setFilteredBikes] = useState([]);

  useEffect(() => {
    const filtered = bikeData.filter(bike => bike.type.includes(type));
    setFilteredBikes(filtered);
  }, [type]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="p-6">
      <h2 className="text-[30px] font-bold mb-8 text-[#222222]">
         {heading.split(" ").map((word, index) =>
         ['best', 'arrivals', 'like'].includes(word.toLowerCase()) ? (
         <span key={index} className="text-[#8DC63F]">{word} </span>
         ) : (
         <span key={index}>{word} </span>
         )
         )}
     </h2>

      <Slider {...settings}>
        {filteredBikes.map((bike, index) => (
          <Link to={`/details/${bike.id}`}>
          <div key={index} className="px-0 transform transition duration-300 hover:scale-105 shadow-md">
            <div className="bg-white rounded-xl shadow-md text-center">
              <h3 className="font-semibold mb-5 text-[20px] pt-4">{bike.name}</h3>
              <img src={bike.bicycle_image} alt={bike.name} className="mx-auto h-40 object-contain" />
              <img src={bike.feature_2_image} alt="Feature" className="mx-auto my-3 h-12 object-contain" />
              <div className="text-[#8DC63F] text-lg font-bold text-[22px] pb-4 pt-4">
                ₹{bike.discountedPrice.toLocaleString('en-IN')}
                <span className="text-gray-400 line-through ml-2 font-normal text-[18px]">
                  ₹{bike.actualPrice.toLocaleString('en-IN')}
                </span>
              </div>
              {/* <Link to={`/details/${bike.id}`}>
              <button className="mt-3 bg-black text-white px-4 py-2 rounded-full hover:opacity-90">
                View Details
              </button>
              </Link> */}
            </div>
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => (
    <div
      className="absolute right-[-45px] top-1/2 transform -translate-y-1/2 bg-[#8DC63F] text-white p-3 rounded-full cursor-pointer flex items-center justify-center w-8 h-8 hover:shadow-lg hover:scale-105"
      onClick={onClick}
    >
      <span>▶</span>
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-[#8DC63F] text-white p-3 rounded-full cursor-pointer flex items-center justify-center w-8 h-8 hover:shadow-lg hover:scale-105"
      onClick={onClick}
    >
      <span>◀</span>
    </div>
  );

export default BestSellersCarousel;