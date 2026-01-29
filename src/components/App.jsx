import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";
import { CartProvider } from "./CartContext";
import Contact from "./Contact";

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

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
