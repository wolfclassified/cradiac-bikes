import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./context/CartContext.jsx";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App /> 
    </CartProvider>
  </StrictMode>,
);