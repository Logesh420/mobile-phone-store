import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <form onSubmit={() => navigate("/success")}>
      <h2>Delivery Address</h2>
      <input placeholder="Name" required />
      <input placeholder="Address" required />
      <input placeholder="Pincode" required />
      <button>Place Order</button>
    </form>
  );
}
