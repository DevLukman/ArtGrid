/* eslint-disable react/prop-types */
import { HiOutlineXMark } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
function CartItems({ cartContent }) {
  return (
    <>
      <div className="w-full lg:w-[60%]">
        <div className="mb-4 w-full bg-[#fafafa] p-6 lg:hidden">
          <h1>You have X items in your cart.</h1>
        </div>
        <div className="w-full bg-[#fafafa]">
          <div className="hidden w-full border-b border-[#dcdcdc] p-6 lg:block">
            <h1>You have X items in your cart.</h1>
          </div>

          <AnimatePresence>
            {cartContent.map((cart) => (
              <motion.div
                layout
                initial={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { ease: "linear", duration: 0.5 },
                }}
                key={cart.id}
                className="flex justify-between border-b border-[#dcdcdc] px-6 py-4"
              >
                <div className="flex gap-3">
                  <img
                    src={cart.image}
                    alt={cart.itemName}
                    className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px]"
                  />
                  <div className="flex flex-col">
                    <p className="capitalize">{cart.itemName}</p>
                    <p className="capitalize">{cart.artist}</p>
                    <p className="capitalize">{cart.category}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <HiOutlineXMark
                    className="flex w-full justify-end text-xl"
                    cursor="pointer"
                  />
                  <p>{formatCurrency(cart.price)}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="flex w-full items-center justify-between border-b border-[#dcdcdc] p-6">
            <h2>SUBTOTAL</h2>
            <p>{formatCurrency(4000)}</p>
          </div>
          <div className="w-full border-b border-[#dcdcdc] p-6">
            <div className="flex items-center justify-between">
              <h2>ShIPPING COST</h2>
              <p>-</p>
            </div>
            <p className="mt-2 text-xs">
              shipping cost will be calculated during checkout
            </p>
          </div>
          <div className="w-full border-b border-[#dcdcdc] p-6">
            <div className="flex items-center justify-between">
              <h2>TAXES</h2>
              <p>-</p>
            </div>
            <p className="mt-2 text-xs">
              Taxes will be calculated during checkout
            </p>
          </div>
          <div className="flex w-full items-center justify-between border-b border-[#dcdcdc] p-6">
            <h3>TOTAL</h3>
            <p>{formatCurrency(40000)}</p>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center bg-[#fafafa] py-5 lg:relative">
          <Link
            to="/checkout"
            className="rounded bg-[#333] px-8 py-2 text-center text-base font-normal uppercase text-[#fff]"
          >
            Check out
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartItems;
