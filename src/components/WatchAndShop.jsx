import { Link } from 'react-router-dom';

const WatchAndShop = () => {
  const videoCards = [
    { id: 1, path: '/details/daily-slick', videoSrc: "https://wolfclassified.github.io/cradiac-bikes/assets/video1.mp4"},
    { id: 2, path: '/details/rapid-commute', videoSrc: "https://wolfclassified.github.io/cradiac-bikes/assets/video2.mp4" },
    { id: 3, path: '/details/velvet-ride', videoSrc: "https://wolfclassified.github.io/cradiac-bikes/assets/video3.mp4"},
    { id: 4, path: '/details/pace-trail-cx', videoSrc: "https://wolfclassified.github.io/cradiac-bikes/assets/video4.mp4"}, 
  ];

  return (
    <div className="px-8 py-12 bg-white">
      <h2 className="text-3xl font-semibold mb-7">
        <span style={{ color: '#222222' }}>Watch </span>
        <span style={{ color: '#8DC63F' }}>and</span>
        <span style={{ color: '#222222' }}> Shop</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videoCards.map(({ id, path, videoSrc }) => (
          <Link key={id} to={path}>
            <div
              className="rounded-3xl overflow-hidden transform transition duration-300 hover:scale-105 shadow-md"
              style={{ height: 650 }}
            >
              <video
                src={videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchAndShop;