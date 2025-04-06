import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useScrollNav } from "../hooks/useScrollNav";
import { useEffect, useState } from "react";
import MobileNavLinks from "./MobileNavLinks";
import { FaXmark } from "react-icons/fa6";
import MobileSearch from "./MobileSearch";
function MobileNav() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useScrollNav();
  useEffect(
    function () {
      if (openNavbar) {
        document.body.classList.add("overflow-hidden");
      }
      return () => document.body.classList.remove("overflow-hidden");
    },
    [openNavbar],
  );
  return (
    <>
      <div
        className="fixed inset-x-0 z-40 h-14 transition-all duration-700 lg:hidden"
        ref={navRef}
      >
        <header className="absolute h-14 w-full overflow-hidden border-2 border-b-[#000] bg-white lg:h-16">
          <nav className="app-container absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between lg:hidden">
            <div>
              <Link
                to="/"
                className="text-xl font-semibold transition-all duration-300 hover:scale-75"
              >
                AG
              </Link>
            </div>
            <div className="flex items-center gap-2">
              {searchOpen ? (
                <FaXmark
                  onClick={() => setSearchOpen(!searchOpen)}
                  cursor="pointer"
                  className="rounded border bg-gray-200 px-1 py-1 transition-all duration-150 ease-in-out"
                  size="1.8rem"
                />
              ) : (
                <CiSearch
                  className="rounded border border-gray-200 px-1 py-1"
                  size="1.8rem"
                  cursor="pointer"
                  onClick={() => setSearchOpen(!searchOpen)}
                />
              )}
              {openNavbar ? (
                <FaXmark
                  onClick={() => setOpenNavbar(!openNavbar)}
                  cursor="pointer"
                  className="rounded border bg-gray-200 px-1 py-1 transition-all duration-150 ease-in-out"
                  size="1.8rem"
                />
              ) : (
                <RxHamburgerMenu
                  cursor="pointer"
                  className="rounded border border-gray-200 px-1 py-1 transition-all duration-150 ease-in-out"
                  size="1.8rem"
                  onClick={() => setOpenNavbar(!openNavbar)}
                />
              )}
            </div>
          </nav>
        </header>
      </div>
      {openNavbar && <MobileNavLinks />}
      {searchOpen && <MobileSearch />}
    </>
  );
}

export default MobileNav;
