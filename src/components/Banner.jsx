import React from "react";
import bgimgGif from '../assets/bg5.gif'

const Banner = ({ title = "Default Title" }) => {
  return (
    <div
      className="bg-[#8DC63F] rounded-2xl h-48 flex items-center justify-center text-white text-5xl font-semibold italic text-center"
      style={{
        height: '220px',
        fontSize: '50px',
        backgroundImage: `url(${bgimgGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Manrope, sans-serif',
      }}
    >
      {title}
    </div>
  );
};

export default Banner;