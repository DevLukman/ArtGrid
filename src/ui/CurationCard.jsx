import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const curationLinks = [
  { id: 1, link: "Private Sales", to: "/privateSales" },
  { id: 2, link: "Rare Artworks", to: "/rareartwork" },
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
