import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";
const tags = [
  { id: 1, tag: "abstract", query: "" },
  { id: 2, tag: "art", query: "" },
  { id: 3, tag: "illustration", query: "" },
  { id: 4, tag: "photography", query: "" },
  { id: 5, tag: "painting", query: "" },
  { id: 6, tag: "digital art", query: "" },
  { id: 7, tag: "drawing", query: "" },
  { id: 8, tag: "scultpure", query: "" },
];
/* eslint-disable react/prop-types */
function Tag({ setActiveInput }) {
  const closeRef = useOutsideClick(setActiveInput);
  return (
    <div className="fixed inset-0 z-30 w-full bg-gray-50/20 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-lg">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.3 },
          }}
          exit={{ y: 300, opacity: 0 }}
          ref={closeRef}
          className="ml-[50px] mt-[75px] min-h-[200px] max-w-[500px] rounded-md border border-[#000000c9] bg-[#fff] px-10 py-8"
        >
          <h1 className="uppercase text-gray-400">Tags</h1>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.id}
                className="rounded-[4px] border border-gray-400 px-2 text-center transition-all duration-200 ease-in-out hover:border-[#000]"
              >
                {tag.tag}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Tag;
