/* eslint-disable react/prop-types */
import { IoBagAddOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { addArtwork } from "../cart/cartSlice";
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { id, image, name, price, artist, category } = product;
  function handleAddToCart() {
    const artwork = { id, image, name, price, artist, category, quantity: 1 };
    dispatch(addArtwork(artwork));
  }

  return (
    <div className="pb-8">
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} loading="lazy" />
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <p>{name}</p>
          <p>{formatCurrency(price)}</p>
        </div>
        <div className="flex items-center gap-2">
          <IoBagAddOutline
            size="1.5rem"
            cursor="pointer"
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
