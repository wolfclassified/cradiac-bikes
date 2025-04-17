import React from 'react';
import logoBlack from '../assets/logo black.svg';
import search from '../assets/search icon.svg';
import cartIcon from '../assets/cart icon.svg';
import wishlist from '../assets/heart icon.svg';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const { cartItems } = useCart();

  const getActiveLink = () => {
    if (pathname === '/') return 'Home';
    if (
      pathname.includes('/bikegroups') ||
      pathname.includes('/listing') ||
      pathname.includes('/cart') ||
      pathname.includes('/details')
    ) {
      return 'Bike Groups';
    }
    if (pathname.includes('/featurecollection')) return 'Feature Collection';
    return '';
  };

  const activeLink = getActiveLink();

  const linkClasses = (linkName) =>
    `relative pb-1 ${
      activeLink === linkName
        ? 'active'
        : "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-[#E6E6E6] hover:after:rounded-full"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
      <Link to='/'>
    <div className="logo-white" ><img src={ logoBlack } alt="Search" width="150"/>
    </div>
    </Link>
        <ul className="nav-links">
        <li>
        <Link
          to='/'
          className={linkClasses("Home")}
          onClick={() => getActiveLink("Home")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to='/bikegroups'
          className={linkClasses("Bike Groups")}
          onClick={() => getActiveLink("Bike Groups")}
        >
          Bike Groups
        </Link>
      </li>
      <li>
        <Link
          to='/featurecollection'
          className={linkClasses("Feature Collection")}
          onClick={() => getActiveLink("Feature Collection")}
        >
          Feature Collection
        </Link>
      </li>
          <li>
            <div className="button-block">
            {/* <Link to='/' title="Search"><img src={ search } alt="Search"/></Link>
            <Link to='/' title="Wishlist"><img src={wishlist} alt="Wishlist"/></Link> */}
            <Link to='/cart' title="Cart" className="relative inline-block">
                    <img src={cartIcon} alt="Cart" />
                      {cartItems.length > 0 && (
                    <span className="absolute top-[-6px] right-[-10px] bg-red-500 text-white text-[10px] font-semibold rounded-full px-[6px] py-[1px]">
                    {cartItems.length}
                    </span>
                    )}
           </Link>
            </div>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;