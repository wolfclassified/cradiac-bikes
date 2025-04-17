import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import orderConfirmed from '../assets/orderConfirmed.mp4'

const OrderPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const { clearCart } = useCart(); // Make sure this exists in your context

  const handleContinue = () => {
    clearCart();        // Empties the cart
    onClose();          // Close popup
    navigate('/');      // Go to Home
  };

  // Disable scroll on mount, re-enable on unmount
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent scroll
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scroll when popup closes
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-[20px] w-[600px] shadow-lg overflow-hidden">
        {/* Top Half Image */}
        <div className="h-[300px] w-full">
        <video
            src={orderConfirmed}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lower Half Content */}
        <div className="p-10 text-center">
          <h2
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: '50px',
              color: '#222222',
            }}
          >
            Order Confirmed
          </h2>
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: '16px',
              color: '#696969',
              marginTop: '10px',
              lineHeight: '1.6',
            }}
          >
            Kick your feet up—your bike’s rolling out!
            <br />
            Get ready to meet your new two-wheeled partner in thrill!
          </p>
          <button
            className="mt-6 px-6 py-3 rounded-full transform transition duration-300 shadow-md text-white hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#8DC63F' }}
            onClick={handleContinue}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;