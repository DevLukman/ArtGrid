import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { useFeatured } from "./useFeatured";
import Loading from "../../ui/Loading";
function FeaturedTwo() {
  const { featured = [], isLoading } = useFeatured();
  const results = featured.slice(15, 19);
  if (isLoading) return <Loading />;
  return (
    <section className="mt-[70px] w-full pb-10">
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
            src="https://eldglheibpfcfzpjfxbh.supabase.co/storage/v1/object/public/artworks//featured-2.jpg"
            alt="Pixel & Patina"
            className="h-[500px] w-full"
          />
        </div>
        <div className="mt-[60px] grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-8 lg:mt-[100px]">
          {results.map((content) => (
            <Link
              key={content.id}
              to={`/detail/${content.id}`}
              className="transition-all duration-300 ease-in-out hover:scale-[1.01]"
            >
              <img
                src={content.image}
                alt={content.name}
                className="h-[200px] w-[200px] object-cover object-center lg:h-[270px] lg:w-[400px]"
              />
              <div>
                <p className="mt-1 text-xs uppercase">{content.name}</p>
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
