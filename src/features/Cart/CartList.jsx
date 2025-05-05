import { AnimatePresence } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartInformation from "./CartInformation";
import CartItems from "./CartItems";
import { getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function CartList() {
  const navigate = useNavigate();
  const cartContent = useSelector(getCart);
  return (
    <section className="w-full">
      <div className="app-container relative flex w-full flex-col gap-6 pt-[120px] lg:flex-row">
        {cartContent?.length > 0 ? (
          <AnimatePresence>
            <CartItems cartContent={cartContent} />
          </AnimatePresence>
        ) : (
          <EmptyCart />
        )}
        <CartInformation />
      </div>
      <div>
        <button
          className="absolute left-[3%] hidden items-center gap-2 sm:flex md:top-[6%] lg:top-[11%]"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack size="2rem" />
          Back
        </button>
        <button
          className="absolute left-[6%] top-[7%] flex items-center gap-2 px-1 py-1 sm:hidden"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack size="1rem" />
        </button>
      </div>
    </section>
  );
}

export default CartList;
