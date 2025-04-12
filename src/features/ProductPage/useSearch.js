import { useQuery } from "react-query";
import { searchArtwork } from "../../services/apiArtwork";
export function useSearch(name) {
  const { data, isLoading } = useQuery({
    queryKey: ["name", name],
    queryFn: () => searchArtwork(name),
  });

  return { data, isLoading };
}
