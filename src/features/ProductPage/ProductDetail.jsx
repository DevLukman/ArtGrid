import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import Nav from "../../ui/Nav";
import MobileNav from "../../ui/MobileNav";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
import { useArtwork } from "./useArtwork";
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
  const { artwork, isLoading } = useArtwork();
  const { image, price, name, detail } = artwork;

  if (isLoading) return <p>Loading</p>;
  return (
    <>
      <Nav />
      <MobileNav />
      <section className="relative mb-[400px] w-full pb-16 md:mb-[0px]">
        <div className="app-container relative flex w-full flex-col gap-10 pt-[120px] md:flex-row">
          <div className="absolute left-0 top-[10%] w-full md:relative md:top-0 md:w-[55%]">
            <img src={image} className="w-full" alt={name} />
          </div>
          <div className="relative top-[390px] w-full md:sticky md:top-[20px] md:h-fit md:w-[45%]">
            <div className="mt-2 flex flex-col">
              <h1 className="text-2xl md:text-2xl">{name}</h1>
              <p>{formatCurrency(price)}</p>
            </div>
            <div className="mt-4 w-full">
              <button className="flex w-full items-center justify-center gap-2 bg-[#000] py-2 text-xs uppercase text-[#fff]">
                <IoBagAddOutline />
                <span> Add to Cart</span>
              </button>
            </div>
            <div className="mt-[40px] border-t border-[#dcdcdc] py-4">
              <h2 className="font-medium">Details:</h2>
              <p className="mt-[10px] text-base font-normal">{detail}</p>
            </div>
          </div>
        </div>
        {/* For navigation */}
        <div>
          <button
            className="absolute left-[3%] top-[7%] hidden items-center gap-2 sm:flex"
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
