import { useQuery } from "react-query";
import { getRealtedArtworks } from "../../services/apiArtwork";

export function useRelatedArtwork(id, category) {
  const { data: relatedArtwork, isLoading } = useQuery({
    queryKey: ["related", id, category],
    queryFn: () => getRealtedArtworks(id, category),
  });

  return { relatedArtwork, isLoading };
}
