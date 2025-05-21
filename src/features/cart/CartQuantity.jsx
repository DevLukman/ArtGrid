import { Link } from "react-router-dom";
import { getTotalQuantity } from "./cartSlice";
import { useSelector } from "react-redux";

function CartQuantity() {
  const quantity = useSelector(getTotalQuantity);
  return (
    <Link to="/cart" className="text-base font-medium md:text-xl">
      Cart (<span className="px-1">{quantity}</span>)
    </Link>
  );
}

export default CartQuantity;
