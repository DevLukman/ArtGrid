import { IoIosArrowRoundBack } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import MobileNav from "../../ui/MobileNav";
import Nav from "../../ui/Nav";
import { formatCurrency } from "../../utils/helpers";
import { addArtwork } from "../cart/cartSlice";
import RelatedArtworks from "./RelatedArtworks";
import { useArtwork } from "./useArtwork";
import { useRelatedArtwork } from "./useRelatedArtwork";

function ProductDetail() {
  const navigate = useNavigate();
  const { artwork, isLoading } = useArtwork();
  const { image, price, name, detail, id, category, artist } = artwork;
  const { relatedArtwork, isLoading: isLoadingRelated } = useRelatedArtwork(
    id,
    category,
  );
  const dispatch = useDispatch();
  function handleAddToCart() {
    const artwork = { id, image, name, price, artist, category, quantity: 1 };
    dispatch(addArtwork(artwork));
  }

  if (isLoading || isLoadingRelated) return <Loading />;
  return (
    <>
      <Nav />
      <MobileNav />
      <section className="relative mb-[400px] w-full pb-16 md:mb-[0px]">
        <div className="app-container relative flex w-full flex-col gap-10 pt-[120px] md:flex-row">
          <div className="absolute left-0 top-[10%] w-full md:relative md:top-0 md:w-[55%]">
            <img src={image} className="w-full" alt={name} />
          </div>
          <div className="relative top-[400px] w-full md:sticky md:top-[20px] md:h-fit md:w-[45%]">
            <div className="mt-2 flex flex-col">
              <h1 className="text-xl capitalize md:text-2xl">{name}</h1>
              <p>{formatCurrency(price)}</p>
            </div>
            <div className="mt-2 w-full">
              <button
                onClick={handleAddToCart}
                className="flex w-full items-center justify-center gap-2 bg-[#000] py-2 text-xs uppercase text-[#fff]"
              >
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
            className="absolute left-[3%] top-[14%] flex items-center gap-2 bg-[#fafafa] px-1 py-1 sm:hidden"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowRoundBack size="1.2rem" />
          </button>
        </div>
      </section>
      <RelatedArtworks relatedArtwork={relatedArtwork} />
    </>
  );
}

export default ProductDetail;
