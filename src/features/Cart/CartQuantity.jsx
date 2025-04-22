import { Link } from "react-router-dom";
import { getTotalQuantity } from "./cartSlice";
import { useSelector } from "react-redux";

function CartQuantity() {
  const quantity = useSelector(getTotalQuantity);
  return (
    <Link to="/cart" className="text-xl font-medium">
      Cart({quantity})
    </Link>
  );
}

export default CartQuantity;
