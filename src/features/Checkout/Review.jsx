import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
function Review() {
  const [isOpen, setIsOpen] = useState(false);
  const cartContent = useSelector(getCart);
  return (
    <div className="w-full rounded bg-[#fafafa] px-4 py-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="mb-4 text-xl md:text-2xl">Review Items and shipping</h1>
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
          {isOpen ? (
            <IoIosArrowUp size="1.5rem" />
          ) : (
            <IoIosArrowDown size="1.5rem" />
          )}
        </button>
      </div>
      {isOpen &&
        cartContent.map((cart) => (
          <div
            key={cart.id}
            className="flex justify-between border-b border-[#dcdcdc]"
          >
            <div className="flex gap-3">
              <img
                src={cart.image}
                alt={cart.name}
                className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px]"
              />
              <div className="flex flex-col">
                <p className="capitalize">{cart.name}</p>
                <p className="capitalize">{cart.artist}</p>
                <p className="capitalize">{cart.category}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <p>{formatCurrency(cart.price)}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Review;
