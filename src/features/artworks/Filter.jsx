const filterCategory = [
  { id: 1, category: "Abstract", set: "", htmlFor: "abstract" },
  { id: 2, category: "Art", set: "", htmlFor: "art" },
  { id: 3, category: "digital art", set: "", htmlFor: "digitalart" },
  { id: 4, category: "drawing", set: "", htmlFor: "drawing" },
  { id: 5, category: "illustration", set: "", htmlFor: "illustration" },
  { id: 7, category: "painting", set: "", htmlFor: "painting" },
  { id: 8, category: "scultpure", set: "", htmlFor: "scultpure" },
];

/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
function Filter({ setOpenFilter }) {
  const [cateOpen, setCateOpen] = useState(false);
  const closeRef = useOutsideClick(setOpenFilter);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }
  function handleClear() {
    setSearchParams("");
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "linear", duration: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "linear" } }}
      className="fixed inset-0 z-40 h-screen w-full bg-black/20"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ ease: "circInOut", duration: 0.5 }}
        exit={{ x: "100%", transition: { ease: "circInOut", duration: 0.5 } }}
        ref={closeRef}
        className="fixed right-0 z-50 h-screen w-[100%] bg-white px-6 py-6 md:w-[60%] xl:w-[37%]"
      >
        <div className="flex items-center justify-between">
          <p className="font-medium">FILTER</p>
          <button onClick={() => setOpenFilter(false)} className="text-xl">
            <FaXmark />
          </button>
        </div>
        <form className="w-full">
          <div className="mt-8">
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => {
                setCateOpen((c) => !c);
              }}
            >
              <p>Cateory</p>
              {cateOpen ? (
                <IoIosArrowUp size="1.5rem" />
              ) : (
                <IoIosArrowDown size="1.5rem" />
              )}
            </div>
            {cateOpen &&
              filterCategory.map((category, id) => (
                <div key={id} className="my-4 flex items-center gap-3">
                  <input
                    id={category.htmlFor}
                    type="checkbox"
                    className="h-[20px] w-[20px] cursor-pointer accent-gray-300"
                    onClick={() => handleFilter(category.htmlFor)}
                  />
                  <label className="cursor-pointer" htmlFor={category.htmlFor}>
                    {category.category}
                  </label>
                </div>
              ))}
          </div>
          <div></div>
          <div className="mt-8">
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => {
                setCateOpen(false);
              }}
            ></div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button
              className="mt-4 rounded bg-[#333] px-8 py-2 text-center text-base font-normal uppercase text-[#fff]"
              onClick={(e) => {
                e.preventDefault();
                handleClear();
              }}
            >
              Clear All
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Filter;
