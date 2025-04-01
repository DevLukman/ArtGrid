import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";
/* eslint-disable react/prop-types */
function ArtistListMobile({ artists }) {
  const [imageShow, setImageShow] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { y: scrollY } = useWindowScroll();
  useEffect(
    function () {
      if (scrollY === 0) {
        setImageShow(1);
      } else if (scrollY > lastScrollY) {
        setImageShow((imageShow) => imageShow + 1);
      } else if (scrollY < lastScrollY) {
        setImageShow((imageShow) => imageShow - 1);
      }
      setLastScrollY(scrollY);
    },
    [scrollY, lastScrollY],
  );
  return (
    <>
      <div className="relative mt-6 flex w-full flex-col gap-4 sm:hidden">
        {artists.map((artist) => (
          <div className="flex cursor-pointer" key={artist.id}>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 20 }}
              transition={{ ease: "linear", duration: 0.5 }}
              className="flex items-center gap-4"
            >
              {imageShow === artist.id && (
                <span className="rounded-lg bg-[#000] p-2 text-xs text-white">
                  {artist.icon}
                </span>
              )}
              <h2 className="text-xl font-medium capitalize">
                {artist.artistName}
              </h2>
            </motion.div>
            {imageShow === artist.id && (
              <img
                src={artist.image}
                alt={artist.artistName}
                className={`absolute right-[5%] top-[25%] h-[170px] w-[170px] object-cover`}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ArtistListMobile;
