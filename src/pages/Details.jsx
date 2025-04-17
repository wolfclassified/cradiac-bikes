import React from 'react';
import { useParams } from 'react-router-dom';
import bicycles from "../bikeData.json";
import BikeDetails from '../components/bikeDetails';
import ProductDetails from '../components/productDetail';
import ReturnsAndShipping from '../components/ReturnsAndShipping'
import Showcase from '../components/Showcase'

const Details = () => {
  const { id } = useParams();
  const bike = bicycles.find((b) => String(b.id) === id);

  if (!bike) return <div>Bike not found!</div>;

  return (
    <div className="mx-[120px]">
    <BikeDetails/>
    <ProductDetails/>
    <ReturnsAndShipping/>
    <Showcase heading="Bikes You May Like" type="Like"/>
    </div>
  );
};

export default Details;