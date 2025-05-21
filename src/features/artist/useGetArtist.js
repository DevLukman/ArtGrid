import { useQuery } from "react-query";
import { getAllArtist } from "../../services/apiArtwork";

export function useGetArtist() {
  const { data: artist, isLoading } = useQuery({
    queryKey: ["artist"],
    queryFn: getAllArtist,
  });

  return { artist, isLoading };
}
