import React, { useState } from 'react';
import VideoBannerSkeleton from './VideoBannerSkeleton';

const VideoBanner = ({ videoSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative">
      {!isLoaded && <VideoBannerSkeleton />}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setIsLoaded(true)}
        className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0 absolute'
        }`}
      />
    </div>
  );
};

export default VideoBanner;