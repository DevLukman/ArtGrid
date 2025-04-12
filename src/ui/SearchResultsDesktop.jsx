import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function SearchResultsDesktop({ searchResults, isLoading }) {
  if (isLoading) return <p>Loading</p>;
  return (
    <div className="mt-5 grid grid-cols-2 gap-4">
      {searchResults.map((result) => (
        <Link
          key={result.id}
          className="flex h-[60px] gap-2"
          to={`/detail/${result.id}`}
        >
          <img
            src={result.image}
            alt={result.name}
            className="w-[100px] object-cover"
          />
          <div className="w-full">
            <p className="w-full text-xs">{result.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchResultsDesktop;
