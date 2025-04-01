const ActiveTwo = (
  <svg
    role="presentation"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      opacity="0.2"
      d="M12 20L12 4"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18 3.99976H6C4.89543 3.99976 4 4.89519 4 5.99976V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V5.99976C20 4.89519 19.1046 3.99976 18 3.99976Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const ActiveFour = (
  <svg
    role="presentation"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 20L12 4"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18 3.99976H6C4.89543 3.99976 4 4.89519 4 5.99976V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V5.99976C20 4.89519 19.1046 3.99976 18 3.99976Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const products = [
  {
    id: 1,
    image: "/images/product1.jpg",
    to: "",
    price: 500,
    itemName: "init",
  },
  {
    id: 2,
    image: "/images/product2.jpg",
    to: "",
    price: 700,
    itemName: "init",
  },
  {
    id: 3,
    image: "/images/product3.jpg",
    to: "",
    price: 900,
    itemName: "init",
  },
  {
    id: 4,
    image: "/images/product4.jpg",
    to: "",
    price: 1200,
    itemName: "init",
  },
  {
    id: 5,
    image: "/images/product1.jpg",
    to: "",
    price: 500,
    itemName: "init",
  },
  {
    id: 6,
    image: "/images/product4.jpg",
    to: "",
    price: 1200,
    itemName: "init",
  },
  {
    id: 7,
    image: "/images/product2.jpg",
    to: "",
    price: 700,
    itemName: "init",
  },
  {
    id: 8,
    image: "/images/product3.jpg",
    to: "",
    price: 900,
    itemName: "init",
  },
];

function Products() {
  const [gridList, setGridList] = useState(true);
  return (
    <>
      <section className="w-full pb-16">
        <div className="app-container w-full pt-[100px]">
          <div className="flex w-full items-center justify-end gap-4">
            <button
              className="rounded-md bg-[#fafafa] px-2 py-1"
              onClick={() => setGridList(!gridList)}
            >
              {gridList ? ActiveFour : ActiveTwo}
            </button>
            <button className="rounded-xl border border-[#000] px-2 py-2">
              Filter
            </button>
          </div>
          <div
            className={`mt-[30px] grid w-full ${
              gridList ? "grid-cols-2" : "grid-cols-1"
            } gap-5 gap-y-8 ${gridList ? "md:grid-cols-4" : "md:grid-cols-2"}`}
          >
            {products.map((product) => (
              <div key={product.id} className="pb-4 pt-4">
                <Link to="/detail">
                  <img
                    src={product.image}
                    alt={product.itemName}
                    loading="lazy"
                  />
                </Link>
                <div className="flex items-center justify-between">
                  <div>
                    <p>{product.itemName}</p>
                    <p>{formatCurrency(product.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiHeart size="1.2rem" cursor="pointer" />
                    <IoBagAddOutline size="1.2rem" cursor="pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
