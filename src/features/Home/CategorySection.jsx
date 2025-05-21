import { useNavigate } from "react-router-dom";

const categoryContent = [
  {
    id: 1,
    image:
      "https://eldglheibpfcfzpjfxbh.supabase.co/storage/v1/object/public/artgrid-image//abstractmain.jpg",
    query: "/product?category=abstract",
    tag: "Abstract",
  },
  {
    id: 2,
    image:
      "https://eldglheibpfcfzpjfxbh.supabase.co/storage/v1/object/public/artgrid-image//artmain.jpg",
    query: "/product?category=art",
    tag: "Art",
  },
  {
    id: 3,
    image:
      "https://eldglheibpfcfzpjfxbh.supabase.co/storage/v1/object/public/artgrid-image//illustrationmain.jpg",
    query: "/product?category=illustraction",
    tag: "Illustration",
  },
  {
    id: 4,
    image:
      "https://eldglheibpfcfzpjfxbh.supabase.co/storage/v1/object/public/artgrid-image//photographymain.jpg",
    query: "/product?category=photography",
    tag: "Photography",
  },
  {
    id: 5,
    image:
      "https://eldglheibpfcfzpjfxbh.supabase.co/storage/v1/object/public/artgrid-image//paintinmain.jpg",
    query: "/product?category=painting",
    tag: "Painting",
  },
  {
    id: 6,
    image:
      "https://eldglheibpfcfzpjfxbh.supabase.co/storage/v1/object/public/artgrid-image//drawingmain.jpg",
    query: "/product?category=drawing",
    tag: "Drawing",
  },
  {
    id: 7,
    image:
      "https://eldglheibpfcfzpjfxbh.supabase.co/storage/v1/object/public/artgrid-image//scultpuremain.jpg",
    query: "/product?category=scultpure",
    tag: "scultpure",
  },
  {
    id: 8,
    image:
      "https://eldglheibpfcfzpjfxbh.supabase.co/storage/v1/object/public/artgrid-image//digitalartmain.jpg",
    query: "/product?category=digitalart",
    tag: "digital Art",
  },
];

function CategorySection() {
  const navigate = useNavigate();
  return (
    <section className="app-container mt-[50px] pb-10">
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3">
        {categoryContent.map((content) => (
          <div
            key={content.id}
            onClick={() => navigate(content.query)}
            className="mt-4 h-[180px] max-w-[300px] cursor-pointer bg-cover p-1 transition-all duration-300 ease-in-out hover:scale-[1.01] md:h-[300px]"
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
