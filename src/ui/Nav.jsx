import { Link } from "react-router-dom";
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
import NavList from "./NavList";

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
              <FaRegUserCircle size="1.3rem" cursor="pointer" />
              <Link to="/cart" className="text-xl font-medium">
                Cart(0)
              </Link>
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
