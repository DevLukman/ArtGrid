import Loading from "../../ui/Loading";
import { useGetArtist } from "./useGetArtist";
import { motion } from "framer-motion";
const DURATION = 0.25;
const STAGGER = 0.025;
function ArtistList() {
  const { artist = [], isLoading } = useGetArtist();
  const uniqueArtists = Array.from(new Set(artist.map((art) => art.artist)));
  if (isLoading) return <Loading />;
  return (
    <section className="relative min-h-screen w-full pb-16">
      <div className="app-container relative w-full gap-10 pt-[100px]">
        <div className="flex w-full items-center justify-center">
          <h1 className="rounded-full bg-[#fafafa] px-4 py-2 text-xs uppercase text-[#000]">
            Featured
          </h1>
        </div>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8">
          {uniqueArtists.map((artist, index) => (
            <motion.div
              initial="initial"
              whileHover="hovered"
              className="relative cursor-pointer overflow-hidden whitespace-nowrap text-2xl uppercase"
              key={index}
            >
              <p>
                {artist.split("").map((i, index) => (
                  <motion.span
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-100%" },
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
              </p>
              <p className="absolute inset-0">
                {artist.split("").map((i, index) => (
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
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-[70px]">
          <p className="text-base font-normal">
            Disclaimer: This website is a practice project created solely for
            educational and portfolio purposes. All artworks displayed on this
            site are the property of their respective artists and owners. I do
            not claim ownership of any artwork featured here. If you are an
            artist or copyright holder and would like your work removed, please
            contact me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArtistList;
