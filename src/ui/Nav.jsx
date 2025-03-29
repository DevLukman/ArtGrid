import { Link, NavLink } from "react-router-dom";
import CurationCard from "./CurationCard";
import Tag from "./Tag";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useScrollNav } from "../hooks/useScrollNav";
// import { FaXmark } from "react-icons/fa6";

function Nav() {
  const [input, setInput] = useState("");
  const [activeInput, setActiveInput] = useState(false);
  const [openCuration, setOpenCuration] = useState(false);
  const navRef = useScrollNav();
  const searchref = useOutsideClick(setActiveInput);
  useEffect(
    function () {
      if (openCuration) {
        document.body.classList.add("overflow-hidden");
      }
      return () => document.body.classList.remove("overflow-hidden");
    },
    [openCuration],
  );
  return (
    <>
      <div
        className="fixed inset-x-0 z-50 hidden h-16 transition-all duration-700 lg:block"
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
            <div>
              <ul className="flex items-center gap-6">
                <li className="text-xs font-medium uppercase">
                  <NavLink>Artists</NavLink>
                </li>
                <li className="text-xs font-medium uppercase">
                  <NavLink to="/product">Explore</NavLink>
                </li>
                <li className="text-xs font-medium uppercase">
                  <NavLink>Archive</NavLink>
                </li>
                <li className="text-xs font-medium uppercase">
                  <NavLink>Trending</NavLink>
                </li>
                <li
                  className="flex cursor-pointer items-center gap-1 text-xs font-medium uppercase"
                  onClick={() => setOpenCuration((close) => !close)}
                >
                  <span>Curation</span>
                  {openCuration ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <FaRegUserCircle size="1.3rem" cursor="pointer" />
              <Link className="text-xl font-medium">Cart(0)</Link>
            </div>
          </nav>
        </header>
      </div>

      {activeInput && <Tag holder={searchref} />}
      <AnimatePresence>{openCuration && <CurationCard />}</AnimatePresence>
    </>
  );
}

export default Nav;
