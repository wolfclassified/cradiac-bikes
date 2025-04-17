import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage';
import BikeGroups from './pages/BikeGroups';
import FeatureCollection from './pages/FeatureCollection';
import Details from './pages/Details';
import Listing from './pages/Listing';
import MainLayouts from './layouts/MainLayouts';
import Cart from './pages/Cart';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/bikegroups' element={<BikeGroups/>}/>
      <Route path='/featurecollection' element={<FeatureCollection/>}/>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/listing/:type" element={<Listing />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;