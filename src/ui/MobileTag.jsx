/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import SearchResultsMobile from "./SearchResultsMobile";
function MobileTag({ searchResults, isLoading }) {
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
      <div className="mt-6">
        <SearchResultsMobile
          searchResults={searchResults}
          isLoading={isLoading}
        />
      </div>
    </motion.div>
  );
}

export default MobileTag;
