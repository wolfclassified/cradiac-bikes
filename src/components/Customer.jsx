import React from 'react'
import shipping from '../assets/shipping.svg'
import billing from '../assets/Billing.svg'
import order from '../assets/Confirm Order.svg'
import emi from '../assets/emi.svg'
import delivery from '../assets/Home Delivery.svg'
import store from '../assets/In Store.svg'
import bgimgGif from '../assets/bg4.gif'

const Customer = () => {
  return (
    <section className="customer-wrap">
        <div className="container2"
        style={{
            backgroundImage: `url(${bgimgGif})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px"
          }}
          >
            <div className="title2">Customer <span className="highlight">Delight</span></div>
            <div className="grid-container">
                <div className="grid-item">
                    <img src={ shipping } alt="Shipping"/>
                    <h3>Shipping</h3>
                    <p>Fastest & Free Shipping</p>
                </div>
                <div className="grid-item">
                    <img src={ billing } alt="Billing"/>
                    <h3>Billing</h3>
                    <p>Secure Payment</p>
                </div>
                <div className="grid-item">
                    <img src={ order } alt="Confirm Order"/>
                    <h3>Confirm Order</h3>
                    <p>Verify Order Details</p>
                </div>
                <div className="grid-item">
                    <img src={ emi } alt="EMI"/>
                    <h3>EMI</h3>
                    <p>EMI Options On All Products</p>
                </div>
                <div className="grid-item">
                    <img src={ delivery } alt="Home Delivery"/>
                    <h3>Home Delivery</h3>
                    <p>Assembly At Your Doorstep</p>
                </div>
                <div className="grid-item">
                    <img src={ store } alt="In-Store"/>
                    <h3>In-Store</h3>
                    <p>In-Store Pickup Option</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Customer