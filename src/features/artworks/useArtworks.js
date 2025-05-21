import { useQuery, useQueryClient } from "react-query";
import { getArtworks } from "../../services/apiArtwork";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/helpers";
export function useArtworks() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //Filter/category
  const filterValue = searchParams.get("category");
  const filter =
    !filterValue || filterValue === "art"
      ? null
      : { field: "category", method: "eq", value: filterValue };

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: artworks, count } = {}, isLoading } = useQuery({
    queryKey: ["artworks", page, filter],
    queryFn: () => getArtworks({ page, filter }),
  });

  //PRE-Fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["artworks", filter, page + 1],
      queryFn: () => getArtworks({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["artworks", filter, page - 1],
      queryFn: () => getArtworks({ page: page - 1 }),
    });

  return { artworks, isLoading, count };
}
