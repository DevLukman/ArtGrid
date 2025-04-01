import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <div className="flex w-full flex-col items-center bg-[#fafafa] py-6 lg:w-[60%]">
      {" "}
      <IoBagOutline className="text-9xl" />
      <p className="mt-4">Your cart is empty</p>
      <Link
        to="/product"
        className="mt-4 rounded bg-[#333] px-8 py-2 text-center text-base font-normal uppercase text-[#fff]"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;
