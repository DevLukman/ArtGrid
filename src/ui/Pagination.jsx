/* eslint-disable react/prop-types */
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/helpers";
function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="app-container mt-10 flex items-center justify-between">
      <p className="text-xs font-normal md:text-base">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span>
        <span> to </span>
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className="flex items-center gap-1 sm:gap-4">
        <Button onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          Prev
        </Button>
        <Button onClick={nextPage} disabled={currentPage === pageCount}>
          Next
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
}

function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-1 rounded-md px-2 py-1 text-base transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-white"
    >
      {children}
    </button>
  );
}
export default Pagination;
