import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const navList = [
  { id: 1, link: "Home", to: "/" },
  { id: 2, link: "Artist", to: "/artist" },
  { id: 3, link: "Explore", to: "/product" },
  { id: 4, link: "Trending", to: "" },
];
const DURATION = 0.25;
const STAGGER = 0.025;
function NavList() {
  return (
    <ul className="flex items-center gap-6">
      {navList.map((list) => (
        <motion.li
          initial="initial"
          whileHover="hovered"
          key={list.id}
          className="relative overflow-hidden whitespace-nowrap text-xs font-medium uppercase"
        >
          <div>
            <Link to={list.to}>
              {list.link.split("").map((i, index) => (
                <motion.span
                  variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * index,
                  }}
                  className="inline-block"
                  key={index}
                >
                  {i}
                </motion.span>
              ))}
            </Link>
          </div>
          <div className="absolute inset-0">
            <Link to={list.to}>
              {list.link.split("").map((i, index) => (
                <motion.span
                  variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * index,
                  }}
                  className="inline-block"
                  key={index}
                >
                  {i}
                </motion.span>
              ))}
            </Link>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
export default NavList;
