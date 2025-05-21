import { useQuery } from "react-query";
import { getFeatured } from "../../services/apiArtwork";

export function useFeatured() {
  const { data: featured, isLoading } = useQuery({
    queryKey: ["featured"],
    queryFn: getFeatured,
  });
  return { featured, isLoading };
}
