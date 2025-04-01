import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";
/* eslint-disable react/prop-types */
function ArtistListMobile({ artists }) {
  const [imageShow, setImageShow] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);
  const ref = useRef(null);
  const { y: scrollY } = useWindowScroll(ref);
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
      <div ref={ref} className="relative mt-6 flex w-full flex-col gap-4">
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
              <h2 className="text-3xl font-medium capitalize">
                {artist.artistName}
              </h2>
            </motion.div>
            {imageShow === artist.id && (
              <img
                src={artist.image}
                alt={artist.artistName}
                className={`absolute right-[20%] top-[25%] h-[170px] w-[170px] -translate-y-[20%] translate-x-[-20%] object-cover`}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ArtistListMobile;
