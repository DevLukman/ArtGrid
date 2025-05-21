import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
import { useSearch } from "../features/artworks/useSearch";
import MobileTag from "./MobileTag";
function MobileSearch() {
  const [input, setInput] = useState("");
  const [activeInput, setActiveInput] = useState(false);
  const { data: searchResults, isLoading } = useSearch(input ? input : {});
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
          <MobileTag searchResults={searchResults} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
}

export default MobileSearch;
