import { useQuery } from "react-query";
import { getArtworks } from "../../services/apiArtwork";
import { useSearchParams } from "react-router-dom";
export function useArtworks() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("category");
  const filter =
    !filterValue || filterValue === "art"
      ? null
      : { field: "category", value: filterValue };
  const { data: artworks, isLoading } = useQuery({
    queryKey: ["artworks", filter],
    queryFn: () => getArtworks(filter),
  });

  return { artworks, isLoading };
}
