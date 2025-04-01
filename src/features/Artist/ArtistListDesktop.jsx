import { useState } from "react";
import { motion } from "framer-motion";
/* eslint-disable react/prop-types */
function ArtistListDesktop({ artists }) {
  const [imageShow, setImageShow] = useState(null);
  function handleMouseEnter(id) {
    setImageShow(id);
  }
  function handleMouseLeave() {
    setImageShow(null);
  }
  return (
    <div className="relative mt-6 hidden w-full flex-col items-center justify-center gap-4 sm:flex">
      {artists.map((artist) => (
        <div
          className="flex cursor-pointer"
          key={artist.id}
          onMouseEnter={() => handleMouseEnter(artist.id)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: -30 }}
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
              className={`absolute right-[15%] top-[15%] h-[270px] w-[270px] -translate-y-[15%] translate-x-[-15%] object-cover`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ArtistListDesktop;
