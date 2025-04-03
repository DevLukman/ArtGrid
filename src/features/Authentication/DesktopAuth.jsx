import { motion } from "framer-motion";
import AuthButton from "./AuthButton";

function DesktopAuth() {
  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute right-[2%] top-[12%] z-40">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.3 },
          }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { ease: "easeInOut", duration: 0.3 },
          }}
          className="w-[230px] rounded-md border border-[#000] bg-[#fff] px-4 py-4"
        >
          <AuthButton />
        </motion.div>
      </div>
    </div>
  );
}

export default DesktopAuth;
