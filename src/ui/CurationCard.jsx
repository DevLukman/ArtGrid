import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const curationLinks = [
  "Private Sales",
  "Rare Artworks",
  "Trade",
  "Art Advisory",
];

function CurationCard() {
  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute left-[80%] top-[12%] z-40 -translate-x-[80%]">
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
        >
          <div className="flex flex-col gap-2">
            {curationLinks.map((link, index) => (
              <NavLink
                key={index}
                className="w-full rounded px-2 py-2 font-medium duration-100 ease-in-out hover:bg-gray-100"
              >
                {link}
              </NavLink>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CurationCard;
