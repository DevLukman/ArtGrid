import { useQuery } from "react-query";
import { getRealtedArtworks } from "../../services/apiArtwork";

export function useRelatedArtwork(id, category) {
  const { data: relatedArtwork, isLoading } = useQuery({
    queryKey: ["relatedArtwork", id, category],
    queryFn: () => getRealtedArtworks(id, category),
    enabled: !!category || !!id,
  });
  return { relatedArtwork, isLoading };
}
