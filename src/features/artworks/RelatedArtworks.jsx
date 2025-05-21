/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
function RelatedArtworks({ relatedArtwork }) {
  if (relatedArtwork.length === 0) return;
  return (
    <aside className="app-container">
      <div>
        <h3 className="text-2xl uppercase">Keep Exploring</h3>
        <div className="mt-[20px] grid w-full grid-cols-2 gap-6 gap-y-8 sm:grid-cols-4 sm:gap-8">
          {relatedArtwork.map((content) => (
            <Link
              key={content.id}
              className="py-2 transition-all duration-300 ease-in-out hover:scale-[1.01]"
              to={`/detail/${content.id}`}
            >
              <img src={content.image} alt={content.price} />
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
    </aside>
  );
}

export default RelatedArtworks;
