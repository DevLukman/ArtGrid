/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function PrivateSalesItem({ privateContent }) {
  return (
    <>
      <div className="mt-[60px] border-t border-[#000] pt-[60px]">
        <h1 className="text-base font-medium sm:text-3xl">
          Availabe artwork for inquiry
        </h1>
        <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {privateContent.map((content) => (
            <div key={content.id} className="w-full py-2">
              <Link>
                <img src={content.image} alt={content.itemName} />
              </Link>
              <p className="py-2">{content.itemName}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PrivateSalesItem;
