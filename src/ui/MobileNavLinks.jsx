import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import AuthButton from "../features/Authentication/AuthButton";
const navLinks = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Explore", to: "/product" },
  { id: 3, name: "Artists", to: "/artist" },
];
const curationLinks = [
  { id: 1, name: "Private Sales", to: "/privateSales" },
  { id: 2, name: "Rare Artworks", to: "/rareartwork" },
];
function MobileNavLinks() {
  return (
    <div className="fixed inset-0 z-40">
      <div className="app-container z-40 h-screen w-full bg-[#fff] pt-[70px] lg:hidden">
        {/*  */}
        <AuthButton />
        <div className="mt-4 flex flex-col gap-3 border-b border-b-gray-400 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="text-base font-medium sm:text-xl"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3 border-b border-b-gray-400 pb-4">
          {curationLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="text-base font-medium sm:text-xl"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-4 border-b border-b-gray-400 pb-4">
          <p className="text-base font-medium sm:text-xl">Help center</p>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <FaXTwitter size="1.5rem" />
          <FaInstagram size="1.5rem" />
          <FaYoutube size="1.5rem" />
          <FaDiscord size="1.5rem" />
          <FaReddit size="1.5rem" />
          <FaFacebook size="1.5rem" />
        </div>
      </div>
    </div>
  );
}

export default MobileNavLinks;
