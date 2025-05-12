import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import CartInformation from "./CartInformation";
import CartItems from "./CartItems";
import { getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function CartList() {
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
    </section>
  );
}

export default CartList;
