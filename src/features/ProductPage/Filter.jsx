/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { motion } from "framer-motion";
function Filter({ setOpenFilter }) {
  const closeRef = useOutsideClick(setOpenFilter);
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
        className="fixed right-0 z-50 h-screen w-[100%] bg-white px-4 py-6 md:w-[60%] xl:w-[37%]"
      >
        <div className="flex items-center justify-between">
          <p className="font-medium">FILTER</p>
          <button onClick={() => setOpenFilter(false)} className="text-xl">
            <FaXmark />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Filter;
