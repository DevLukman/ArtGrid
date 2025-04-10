import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
const featuredContent = [
  {
    id: 1,
    image: "/images/product2.jpg",
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
function FeaturedOne() {
  return (
    <section className="mt-[90px] w-full pb-10">
      <div className="app-container">
        <div className="w-full text-center">
          <h1 className="mb-4 text-3xl font-semibold uppercase">
            {" "}
            Pixel & Patina
          </h1>
          <p>
            From ArtGrid to Albers, the light carries the A through the grid.
          </p>
          <div className="mt-4">
            <Link
              to="/product"
              className="underline transition-all duration-150 ease-in-out hover:no-underline"
            >
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
              <img
                src={content.image}
                alt={content.price}
                className="h-[200px] w-[200px] object-cover object-center lg:h-[270px] lg:w-[400px]"
              />
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

export default FeaturedOne;
