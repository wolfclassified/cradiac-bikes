import React from 'react';
import { useCart } from '../context/CartContext';
import Banner from '../components/Banner';
import { X } from 'lucide-react';
import emptyCart from '../assets/emptyCart.svg'
import { useState } from 'react';
import OrderPopup from '../components/OrderPopup';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useCart();

  const [showPopup, setShowPopup] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className='mx-[120px]'>
        <div className='pb-4 pt-4'>
        <Banner title="Your Cart" />
        </div>
        <div className="flex flex-col items-center justify-center bg-[#F4F4F4] rounded-[20px] p-20 w-full">
      <img
        src={emptyCart}
        alt="Empty Cart"
        className="mb-6 max-w-[200px]"
      />
      <p
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: '18px',
          color: '#C2C2C2',
          textAlign: 'center',
        }}
      >
        “ This Cart’s emptier than a bike rack at midnight! ”
      </p>
    </div>
      </div>
  );
  }

  return (
    <div className='mx-[120px]'>
      <div className='pt-4'>
        <Banner title="Your Cart" />
        </div>
    <div className="p-10">
      <ul className="space-y-6">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="relative flex items-center justify-between p-12 rounded-[20px] bg-[#F4FAEC] shadow-lg"
          >
            {/* Right Section: Image */}
            <div className="ml-auto pl-32">
              <img
                src={item.bicycle_image}
                alt={item.name}
                className="w-65 h-65 object-contain"
              />
            </div>

            {/* Remove button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="absolute top-5 right-5 bg-[#E83119] text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
              aria-label="Remove item"
            >
              <X size={16} />
            </button>

            {/* Left Section: Details */}
            <div className="flex-1 pl-72 pr-8">
                  <h3 className="text-3xl font-semibold pb-2">{item.name}</h3>

                  <p className="text-gray-600 text-sm mt-1 leading-relaxed break-words w-[600px]">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 mt-4 font-semibold">
                    <span className="text-black text-[25px]">₹ {item.discountedPrice}.00</span>
                    <span className="line-through text-gray-400 font-normal text-[15px]">₹ {item.actualPrice}.00</span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-[#8DC63F] text-[#FFFFFF] font-bold px-2 py-1 rounded hover:bg-[#679428]"
                    >
                      –
                    </button>
                    <span className="border px-4 py-1 rounded text-black bg-white">
                      {item.quantity.toString().padStart(2, '0')}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-[#8DC63F] text-[#FFFFFF] font-bold px-2 py-1 rounded hover:bg-[#679428]"
                    >
                      +
                    </button>
                  </div>
              </div>
          </li>
        ))}
      </ul>

      {/* Total + Place Order */}
      <div className="mt-10 flex justify-end items-center gap-6">
        <h3 className="text-2xl font-semibold text-[#8DC63F]">
          Total - ₹{getTotalPrice()}.00
        </h3>
        <button
        onClick={() => setShowPopup(true)}
        className="bg-[#222222] text-white px-6 py-3 rounded-full text-lg hover:opacity-90">
          Place Order
        </button>
      </div>
      {showPopup && <OrderPopup onClose={() => setShowPopup(false)} />}
    </div>
    </div>
  );
};

export default Cart;