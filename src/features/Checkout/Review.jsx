import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const reviewSummary = [
  {
    id: 1,
    image: "/images/abstract.jpg",
    to: "",
    price: 500,
    itemName: "init",
    artist: "Flick",
    category: "drawing",
  },
  {
    id: 2,
    image: "/images/abstract.jpg",
    to: "",
    price: 500,
    itemName: "init",
    artist: "Flick",
    category: "drawing",
  },
  {
    id: 3,
    image: "/images/abstract.jpg",
    to: "",
    price: 500,
    itemName: "init",
    artist: "Flick",
    category: "drawing",
  },
];

function Review() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full rounded bg-[#fafafa] px-4 py-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="mb-4 text-xl md:text-2xl">Review Items and shipping</h1>
        <button onClick={() => setIsOpen((c) => !c)}>
          {isOpen ? (
            <IoIosArrowUp size="1.5rem" />
          ) : (
            <IoIosArrowDown size="1.5rem" />
          )}
        </button>
      </div>
      {isOpen &&
        reviewSummary.map((cart) => (
          <div
            key={cart.id}
            className="flex justify-between border-b border-[#dcdcdc]"
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
              <p>{formatCurrency(cart.price)}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Review;
