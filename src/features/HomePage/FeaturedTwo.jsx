import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
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
function FeaturedTwo() {
  return (
    <section className="mt-[100px] w-full pb-10">
      <div className="app-container">
        <div className="w-full text-center">
          <h1 className="mb-4 text-3xl font-semibold uppercase">
            Frozen in Frame
          </h1>
          <p>
            In a world rushing forward, ArtGrid holds the art that makes time
            pause
          </p>
          <div className="mt-4">
            <Link className="underline transition-all duration-150 ease-in-out hover:no-underline">
              Discover the Collection
            </Link>
          </div>
        </div>
        <div className="mt-[40px]">
          <img
            src="images/featured2.jpg"
            alt="Pixel & Patina"
            className="h-[500px] w-full"
          />
        </div>
        <div className="mt-[60px] grid w-full grid-cols-2 gap-6 gap-y-8 sm:grid-cols-4 sm:gap-8 lg:mt-[100px]">
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
    </section>
  );
}

export default FeaturedTwo;
