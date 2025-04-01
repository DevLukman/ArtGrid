const privateContent = [
  {
    id: 1,
    image: "/images/abstract.jpg",
    to: "",
    price: 500,
    itemName: "init",
  },
  { id: 2, image: "/images/art.jpg", to: "", price: 700, itemName: "init" },
  {
    id: 3,
    image: "/images/illustraction.jpg",
    to: "",
    price: 900,
    itemName: "init",
  },
  {
    id: 4,
    image: "/images/photography.jpg",
    to: "",
    price: 1200,
    itemName: "init",
  },
  {
    id: 5,
    image: "/images/photography.jpg",
    to: "",
    price: 1200,
    itemName: "init",
  },
  {
    id: 6,
    image: "/images/photography.jpg",
    to: "",
    price: 1200,
    itemName: "init",
  },
  {
    id: 7,
    image: "/images/photography.jpg",
    to: "",
    price: 1200,
    itemName: "init",
  },
  {
    id: 8,
    image: "/images/photography.jpg",
    to: "",
    price: 1200,
    itemName: "init",
  },
];

import { MdOutlineForwardToInbox } from "react-icons/md";
import PrivateSalesItem from "./PrivateSalesItem";
import PrivateSalesInformation from "./PrivateSalesInformation";
function PrivateSalesList() {
  return (
    <section className="relative w-full pb-10">
      <div className="app-container w-full pt-[120px]">
        <div>
          <h1 className="max-w-[300px] text-3xl font-medium md:max-w-[700px] md:text-6xl lg:max-w-full lg:text-6xl">
            Private & Negotiated Sales
          </h1>
          <p className="mb-4 mt-8 max-w-[560px] text-base font-normal">
            Since 2017 ArtGrid has been trailblazing the digital art market,
            having facilitated more than $300M in total marketplace sales to
            date. Our private and negotiated sales service specializes in
            connecting buyers and sellers of top-tier digital artworks and
            collectibles. If you are looking to buy or sell a grail with the
            support of our white-glove, customized support, get in touch!
          </p>
          <button className="flex items-center gap-2 rounded bg-[#333] px-8 py-2 text-center text-base font-normal uppercase text-[#fff]">
            <MdOutlineForwardToInbox />
            <span>Get In Touch</span>
          </button>
        </div>
        {/*  */}
        <PrivateSalesItem privateContent={privateContent} />
        <PrivateSalesInformation />
      </div>
    </section>
  );
}

export default PrivateSalesList;
