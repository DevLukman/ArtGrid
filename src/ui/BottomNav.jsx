import { Link } from "react-router-dom";
function BottomNav() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 h-14 border-t border-gray-500 transition-all duration-700 lg:hidden">
      <div className="absolute h-14 w-full overflow-hidden bg-white lg:h-16">
        <nav className="app-container absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between lg:hidden">
          <Link
            to="/"
            className="flex-grow border py-1 text-center text-base font-normal uppercase"
          >
            Featured
          </Link>
          <Link className="flex-grow border py-1 text-center text-base font-normal uppercase">
            Cart (0)
          </Link>
          <Link className="flex-grow border py-1 text-center text-base font-normal uppercase">
            Explore
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default BottomNav;
