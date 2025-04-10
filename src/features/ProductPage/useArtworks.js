import { useQuery } from "react-query";
import { getArtworks } from "../../services/apiArtwork";

export function useArtworks() {
  const { data: artworks, isLoading } = useQuery({
    queryKey: ["artworks"],
    queryFn: getArtworks,
  });

  return { artworks, isLoading };
}
