import { useNavigate } from "react-router-dom";

const categoryContent = [
  {
    id: 1,
    image: "/images/abstract.jpg",
    query: "/product?category=abstract",
    to: "",
    tag: "Abstract",
  },
  {
    id: 2,
    image: "/images/art.jpg",
    query: "/product?category=art",
    to: "",
    tag: "Art",
  },
  {
    id: 3,
    image: "/images/illustraction.jpg",
    query: "/product?category=illustraction",
    to: "",
    tag: "Illustration",
  },
  {
    id: 4,
    image: "/images/photography.jpg",
    query: "/product?category=photography",
    to: "",
    tag: "Photography",
  },
  {
    id: 5,
    image: "/images/painting.jpg",
    query: "/product?category=painting",
    to: "",
    tag: "Painting",
  },
  {
    id: 6,
    image: "/images/drawing.jpg",
    query: "/product?category=drawing",
    to: "",
    tag: "Drawing",
  },
  {
    id: 7,
    image: "/images/scultpure.jpeg",
    query: "/product?category=scultpure",
    to: "",
    tag: "scultpure",
  },
  {
    id: 8,
    image: "/images/digitalart.jpeg",
    query: "/product?category=digitalart",
    to: "",
    tag: "digital Art",
  },
];

function CategorySection() {
  const navigate = useNavigate();
  return (
    <section className="app-container mt-[60px] pb-10">
      <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
        {categoryContent.map((content) => (
          <div
            key={content.id}
            onClick={() => navigate(content.query)}
            className="p-1 transition-all duration-300 ease-in-out hover:scale-[1.01]"
          >
            <img src={content.image} alt={content.tag} />
            <p className="mt-1 text-base uppercase">{content.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
