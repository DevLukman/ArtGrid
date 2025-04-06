/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";

const curationLinks = [
  { id: 1, link: "Private Sales", to: "/privateSales" },
  { id: 2, link: "Rare Artworks", to: "/rareartwork" },
];

function CurationCard({ setOpenCuration }) {
  const closeRef = useOutsideClick(setOpenCuration);
  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute left-[80%] z-40 -translate-x-[80%] lg:top-[6%] xl:top-[12%]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.3 },
          }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { ease: "easeInOut", duration: 0.3 },
          }}
          className="w-[230px] rounded-md border border-[#000] bg-[#fff] px-4 py-4"
          ref={closeRef}
        >
          <div className="flex flex-col gap-2">
            {curationLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                className="w-full rounded px-2 py-2 font-medium duration-100 ease-in-out hover:bg-gray-100"
              >
                {link.link}
              </NavLink>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CurationCard;
