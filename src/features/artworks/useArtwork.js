import { useQuery } from "react-query";
import { getArtwork } from "../../services/apiArtwork";
import { useParams } from "react-router-dom";

export function useArtwork() {
  const { id } = useParams();
  const { data: artwork = {}, isLoading } = useQuery({
    queryKey: ["artwork", id],
    queryFn: () => getArtwork(id),
  });

  return { artwork, isLoading };
}
