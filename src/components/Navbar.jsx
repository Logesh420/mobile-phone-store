import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="nav">
      <h2>Mobile Store</h2>
      <input placeholder="Search for mobiles..." />
      <div>
        <Link to="/">Mobiles</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}
