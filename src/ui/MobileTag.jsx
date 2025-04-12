import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
function MobileTag({ input }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.3 },
      }}
      className="mt-7"
    >
      <h1 className="uppercase text-gray-400">Tags</h1>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            className="rounded-[4px] border border-gray-400 px-2 py-1 text-center transition-all duration-200 ease-in-out hover:border-[#000]"
          >
            {tag.tag}
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>{input}</h1>
      </div>
    </motion.div>
  );
}

export default MobileTag;
