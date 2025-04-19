/* eslint-disable react/prop-types */
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
function ProductCard({ product }) {
  const { id, image, name, price } = product;
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
          <IoBagAddOutline size="1.5rem" cursor="pointer" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
