import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import Nav from "../../ui/Nav";
import MobileNav from "../../ui/MobileNav";

import { IoIosArrowRoundBack } from "react-icons/io";
const featuredContent = [
  {
    id: 1,
    image: "/images/abstract.jpg",
    to: "",
    price: 500,
    itemName: "init",
  },
  { id: 2, image: "/images/art.jpg", to: "", price: 700, itemName: "init" },
  {
    id: 3,
    image: "/images/illustraction.jpg",
    to: "",
    price: 900,
    itemName: "init",
  },
  {
    id: 4,
    image: "/images/photography.jpg",
    to: "",
    price: 1200,
    itemName: "init",
  },
];

function ProductDetail() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <MobileNav />
      <section className="relative mb-[400px] w-full pb-16 md:mb-[0px]">
        <div className="app-container relative flex w-full flex-col gap-10 pt-[120px] md:flex-row">
          <div className="absolute left-0 top-[10%] w-full md:relative md:top-0 md:w-[55%]">
            <img src="/images/product1.jpg" className="w-full" />
          </div>
          <div className="relative top-[380px] w-full md:sticky md:top-[20px] md:h-fit md:w-[45%]">
            <h1 className="text-2xl">Ineffable</h1>
            <p className="mt-2">{formatCurrency(1500)}</p>
            <div className="mt-4 w-full">
              <button className="w-full bg-[#000] py-2 uppercase text-[#fff]">
                Add to Cart
              </button>
            </div>
            <div className="mt-[40px] border-t border-[#dcdcdc] py-4">
              <h2 className="font-medium">Details:</h2>
              <p className="mt-[10px] text-base font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
                sed eligendi obcaecati nam quos voluptatum neque incidunt
                doloribus placeat eius reiciendis exercitationem nisi! Excepturi
                consequatur doloremque reiciendis. Impedit, quasi voluptas.
              </p>
            </div>
          </div>
        </div>
        {/* For navigation */}
        <div>
          <button
            className="absolute left-[3%] top-[9%] hidden items-center gap-2 sm:flex"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowRoundBack size="2rem" />
            Back
          </button>
          <button
            className="absolute left-[3%] top-[12%] flex items-center gap-2 bg-[#fafafa] px-1 py-1 sm:hidden"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowRoundBack size="1rem" />
          </button>
        </div>
      </section>
      <aside className="app-container">
        <div>
          <h3 className="text-2xl uppercase">Keep Exploring</h3>
          <div className="mt-[20px] grid w-full grid-cols-2 gap-6 gap-y-8 sm:grid-cols-4 sm:gap-8">
            {featuredContent.map((content) => (
              <Link
                key={content.id}
                className="py-2 transition-all duration-300 ease-in-out hover:scale-[1.01]"
              >
                <img src={content.image} alt={content.price} />
                <div>
                  <p className="mt-1 text-xs uppercase">{content.itemName}</p>
                  <p className="mt-1 text-xs uppercase">
                    {formatCurrency(content.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default ProductDetail;
