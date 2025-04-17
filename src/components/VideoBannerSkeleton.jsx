import React from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoBannerSkeleton = () => {
  return (
    <div className="w-full bg-gray-100 rounded-xl overflow-hidden relative animate-pulse" style={{ height: '713.570px' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-50 p-4 rounded-full">
          <FaPlay className="text-gray-400 text-3xl" />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-3 bg-black/10">
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default VideoBannerSkeleton;