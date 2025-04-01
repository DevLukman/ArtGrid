import { FaArrowRightLong } from "react-icons/fa6";
import ArtistListDesktop from "./ArtistListDesktop";
import ArtistListMobile from "./ArtistListMobile";
const artists = [
  {
    id: 1,
    artistName: "Flick",
    image: "images/product1.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 2,
    artistName: "Flick",
    image: "images/product2.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 3,
    artistName: "Flick",
    image: "images/product3.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 4,
    artistName: "Flick",
    image: "images/product4.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 5,
    artistName: "Flick",
    image: "images/product1.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 6,
    artistName: "Flick",
    image: "images/product2.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 7,
    artistName: "Flick",
    image: "images/product3.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 8,
    artistName: "Flick",
    image: "images/product4.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 9,
    artistName: "Flick",
    image: "images/product1.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 10,
    artistName: "Flick",
    image: "images/product4.jpg",
    icon: <FaArrowRightLong />,
  },
  {
    id: 11,
    artistName: "Flick",
    image: "images/product2.jpg",
    icon: <FaArrowRightLong />,
  },
];

function ArtistList() {
  return (
    <section className="relative min-h-screen w-full pb-16">
      <div className="app-container relative w-full gap-10 pt-[120px]">
        <div className="flex w-full items-center justify-center">
          <h1 className="rounded-full bg-[#fafafa] px-4 py-2 text-xs uppercase text-[#000]">
            Featured
          </h1>
        </div>
        <ArtistListDesktop artists={artists} />
        <ArtistListMobile artists={artists} />
      </div>
    </section>
  );
}

export default ArtistList;
