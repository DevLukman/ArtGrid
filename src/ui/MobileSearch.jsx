import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

function MobileSearch() {
  const [input, setInput] = useState("");
  const [activeInput, setActiveInput] = useState(false);
  return (
    <div className="fixed inset-0 z-30">
      <div className="app-container relative z-40 h-screen w-full bg-[#fff] pt-[70px] lg:hidden">
        <form
          className={`flex items-center rounded-md border transition-all duration-100 ${
            !activeInput && "border-[#dcdcdc]"
          } px-2 ${activeInput && "border border-[#000]"}`}
          onSubmit={(e) => e.preventDefault()}
          onClick={() => setActiveInput(true)}
        >
          <CiSearch />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search ArtGrid"
            className="w-full border-none px-5 py-1 outline-none placeholder:text-base"
          />
          {input === "" ? (
            ""
          ) : (
            <HiOutlineXMark
              className="cursor-pointer rounded-full border border-gray-300 text-gray-500"
              onClick={() => setInput("")}
            />
          )}
        </form>
        {activeInput && (
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
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default MobileSearch;
