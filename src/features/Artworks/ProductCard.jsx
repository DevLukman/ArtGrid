/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { IoBagAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { addArtwork, getCart } from "../cart/cartSlice";
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const { id, image, name, price, artist } = product;
  function handleAddToCart() {
    const artwork = { id, image, name, price, artist };
    dispatch(addArtwork(artwork));
    toast.success(`${name} added to cart`);
  }
  // To check if that was clicked again is already in cart
  const isCart = cart.map((artwork) => artwork.id).includes(id);
  // Display the toast to show it is already in cart
  function handleIsAlreadyinCart() {
    toast.success(`${name} is already in cart`);
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
          {!isCart ? (
            <IoBagAddOutline
              size="1.5rem"
              cursor="pointer"
              onClick={handleAddToCart}
            />
          ) : (
            <IoBagAddOutline
              size="1.5rem"
              cursor="pointer"
              onClick={handleIsAlreadyinCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
