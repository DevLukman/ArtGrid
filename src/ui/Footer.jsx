import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaReddit,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { motion } from "framer-motion";
const footerContent1 = ["support", "Help center", "ArtGrid"];
const footerContent2 = [
  "Terms of Service",
  "Privacy Notice",
  "Report Content",
  "Cookie Preferences",
];
const footerContent3 = [
  "community guidelines",
  "Private Sales",
  "Processing Returns",
];
const footerAni = ["Art Grid"];
const DURATION = 0.7;
const STAGGER = 0.05;

function Footer() {
  return (
    <footer className="mt-[60px] w-full border-t border-[#dcdcdc] bg-[#fafafa] px-6 pb-6 md:px-12">
      <div className="mb-6 flex flex-col items-start pt-10 lg:flex-row lg:justify-between">
        <div className="relative flex flex-col gap-2">
          {footerContent1.map((content, index) => (
            <p className="nav-hover-btn w-fit text-xs font-medium" key={index}>
              {content}
            </p>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 lg:mt-0">
          <FaXTwitter size="1.2rem" cursor="pointer" />
          <FaInstagram size="1.2rem" cursor="pointer" />
          <FaYoutube size="1.2rem" cursor="pointer" />
          <FaDiscord size="1.2rem" cursor="pointer" />
          <FaReddit size="1.2rem" cursor="pointer" />
          <FaFacebook size="1.2rem" cursor="pointer" />
        </div>
        <div className="mt-8 flex gap-10 border-t border-[#dcdcdc] pt-8 lg:mt-0 lg:border-none lg:pt-0">
          <div className="flex flex-col gap-2">
            {footerContent2.map((content, index) => (
              <p
                className="nav-hover-btn block w-fit text-xs font-medium"
                key={index}
              >
                {content}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {footerContent3.map((content, index) => (
              <p
                className="nav-hover-btn block w-fit text-xs font-medium"
                key={index}
              >
                {content}
              </p>
            ))}
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs font-normal text-gray-500 lg:mt-0">
          <span> &copy; {new Date().getFullYear()}</span>
          <span> ArtGrid</span>
        </p>
      </div>
      <div className="overflow-hidden">
        {footerAni.map((text, index) => (
          <motion.p
            initial="initial"
            whileInView="textinview"
            className="mt-[35px] w-full text-center text-[12vw] font-extrabold uppercase"
            key={index}
          >
            {text.split("").map((i, num) => (
              <motion.span
                variants={{ initial: { y: 300 }, textinview: { y: 0 } }}
                transition={{
                  ease: "easeInOut",
                  duration: DURATION,
                  delay: STAGGER * num,
                }}
                viewport={{ once: true }}
                className="inline-block"
                key={num}
              >
                {i}
              </motion.span>
            ))}
          </motion.p>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "backInOut" }}
        viewport={{ once: true }}
        className="text-center text-xs font-normal capitalize italic lg:text-right lg:text-base"
      >
        Developed by yours truly: Lukas Flick
      </motion.p>
    </footer>
  );
}

export default Footer;
