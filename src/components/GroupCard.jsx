import React from 'react';
import { Link } from 'react-router-dom';

const GroupCard = ({
  title,
  description,
  features,
  backgroundImage,
  linkPath
}) => {
  return (
    <Link to={linkPath}>
    <div
      className="rounded-2xl p-8 text-white relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]"
      style={{
        height: '400px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
       <div className="p-8 pl-32 pt-8 font-manrope">
            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p className="text-base max-w-6xl mb-3">{description}</p>
            <ul className="mb-4 space-y-1 text-sm max-w-4xl">
             {features.map((feature, index) => (
             <li key={index}>⚪ <strong>{feature.title}:</strong> {feature.detail}</li>
            ))}
            </ul>
             <Link to={linkPath}>
            <button className="bg-[#8DC63F] hover:bg-lime-600 text-white font-semibold py-2 px-6 rounded-full">
            Explore
            </button>
            </Link>
        </div>
    </div>
    </Link>
  );
};

export default GroupCard;