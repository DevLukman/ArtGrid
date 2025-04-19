import { motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";
import SearchResultsDesktop from "./SearchResultsDesktop";
/* eslint-disable react/prop-types */
function Tag({ setActiveInput, searchResults, isLoading }) {
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
          ref={closeRef}
          className="ml-[50px] mt-[75px] min-h-[200px] max-w-[500px] rounded-md border border-[#000000c9] bg-[#fff] px-10 py-8"
        >
          <SearchResultsDesktop
            isLoading={isLoading}
            searchResults={searchResults}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Tag;
