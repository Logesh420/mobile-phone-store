import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Success from "../components/Success";
import { CartProvider } from "../components/CartContext";
import Contact from "../components/Contact";

import products from "../components/Products";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<products />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}