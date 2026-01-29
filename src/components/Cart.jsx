import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="page">
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      {cart.length > 0 && <Link to="/checkout">Place Order</Link>}
    </div>
  );
}