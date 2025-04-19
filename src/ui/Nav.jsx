import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import DesktopAuth from "../features/Authentication/DesktopAuth";
import { useScrollNav } from "../hooks/useScrollNav";
import CurationCard from "./CurationCard";
import NavList from "./NavList";
import Tag from "./Tag";
import { useSearch } from "../features/Artworks/useSearch";

function Nav() {
  const [input, setInput] = useState("");
  const [activeInput, setActiveInput] = useState(false);
  const [openCuration, setOpenCuration] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const navRef = useScrollNav();
  const { data: searchResults, isLoading } = useSearch(input ? input : {});
  useEffect(
    function () {
      if (openCuration || openAuth) {
        document.body.classList.add("overflow-hidden");
      }
      return () => document.body.classList.remove("overflow-hidden");
    },
    [openCuration, openAuth],
  );
  return (
    <>
      <div
        className="fixed inset-x-0 z-40 hidden h-16 transition-all duration-700 lg:block"
        ref={navRef}
      >
        <header className="absolute h-16 w-full overflow-hidden border border-b-[#000] bg-white">
          <nav className="absolute top-1/2 hidden w-full -translate-y-1/2 items-center justify-between px-[2.45rem] lg:flex">
            <div>
              <Link
                to="/"
                className="text-2xl font-semibold transition-all duration-300 hover:scale-75"
              >
                ArtGrid
              </Link>
            </div>
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
                className="border-none px-5 py-1 outline-none placeholder:text-base"
              />
              {input === "" ? (
                ""
              ) : (
                <HiOutlineXMark
                  className="cursor-pointer rounded-full border border-[#dcdcdc] text-gray-500"
                  onClick={() => setInput("")}
                />
              )}
            </form>
            <div className="flex items-center gap-6">
              {/*  */}
              <NavList />
              <div
                className="flex cursor-pointer items-center gap-1 text-xs font-medium uppercase"
                onClick={() => setOpenCuration((close) => !close)}
              >
                <span>Curation</span>
                {openCuration ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaRegUserCircle
                size="1.3rem"
                cursor="pointer"
                onClick={() => setOpenAuth((c) => !c)}
              />
              <Link to="/cart" className="text-xl font-medium">
                Cart(0)
              </Link>
            </div>
          </nav>
        </header>
      </div>

      {activeInput && (
        <Tag
          setActiveInput={setActiveInput}
          searchResults={searchResults}
          isLoading={isLoading}
        />
      )}
      {openCuration && <CurationCard setOpenCuration={setOpenCuration} />}
      {openAuth && <DesktopAuth />}
    </>
  );
}

export default Nav;
