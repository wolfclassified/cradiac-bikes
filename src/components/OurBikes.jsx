import React from 'react'
import { Link } from 'react-router-dom';
import bike1 from '../assets/bike1.svg';
import bike2 from '../assets/bike2.svg';
import bike3 from '../assets/bike3.svg';
import bike4 from '../assets/bike4.svg';
import bike5 from '../assets/bike5.svg';

const OurBikes = () => {
  return (
    <section className="bikes-section">
        <h2 className="bikes-heading">Bike <em style={{ color: "#8DC63F" }}>Groups</em></h2>
        <div className="bikes-container">
<Link to="/listing/Mountain" className="bike-card">
  <div>
    <h3>MTB</h3>
    <p>A mountain bike is specially designed for traveling off-road and hill climbing.</p>
    <div className="bike-image">
      <img src={bike1} alt="MTB Bike" />
    </div>
  </div>
</Link>

<Link to="/listing/Hybrid" className="bike-card">
  <div>
    <h3>Hybrid</h3>
    <p>Hybrid bicycles have the traits of city bikes and mountain bikes and is a generic model.</p>
    <div className="bike-image">
      <img src={bike2} alt="Hybrid Bike" />
    </div>
  </div>
</Link>

<Link to="/listing/City" className="bike-card">
  <div>
    <h3>City Bikes</h3>
    <p>City bikes are generally mild and rapid and designed to be ridden on paved surfaces.</p>
    <div className="bike-image">
      <img src={bike3} alt="City Bike" />
    </div>
  </div>
</Link>

<Link to="/listing/Women" className="bike-card">
  <div>
    <h3>Women</h3>
    <p>A bike designed for women's comfort, with frame and seat adjusted to body proportions.</p>
    <div className="bike-image">
      <img src={bike4} alt="Women's Bike" />
    </div>
  </div>
</Link>

<Link to="/listing/Kids" className="bike-card">
  <div>
    <h3>Kids</h3>
    <p>A small, lightweight bike with safety features, ideal for children learning to ride.</p>
    <div className="bike-image">
      <img src={bike5} alt="Kid's Bike" />
    </div>
  </div>
</Link>
        </div>
    </section>
  )
}

export default OurBikes