const cartContent = [
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
    image: "/images/art.jpg",
    to: "",
    price: 700,
    itemName: "init",
    artist: "Flick",
    category: "drawing",
  },
  {
    id: 3,
    image: "/images/illustraction.jpg",
    to: "",
    price: 900,
    itemName: "init",
    artist: "Flick",
    category: "drawing",
  },
  {
    id: 4,
    image: "/images/photography.jpg",
    to: "",
    price: 1200,
    itemName: "init",
    artist: "Flick",
    category: "drawing",
  },
  {
    id: 5,
    image: "/images/photography.jpg",
    to: "",
    price: 1200,
    itemName: "init",
    artist: "Flick",
    category: "drawing",
  },
];
import { AnimatePresence } from "framer-motion";
import CartItems from "./CartItems";
import CartInformation from "./CartInformation";
import EmptyCart from "../../ui/EmptyCart";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function CartList() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full">
      <div className="app-container relative flex w-full flex-col gap-6 pt-[120px] lg:flex-row">
        {cartContent.length > 0 ? (
          <AnimatePresence>
            <CartItems cartContent={cartContent} />
          </AnimatePresence>
        ) : (
          <EmptyCart />
        )}
        <CartInformation />
      </div>
      {/* For navigation */}
      <div>
        <button
          className="absolute left-[3%] hidden items-center gap-2 sm:flex md:top-[5%] lg:top-[6%]"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack size="2rem" />
          Back
        </button>
        <button
          className="absolute left-[3%] top-[5%] flex items-center gap-2 px-1 py-1 sm:hidden"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack size="1rem" />
        </button>
      </div>
    </section>
  );
}

export default CartList;

// bg-[#fafafa]
