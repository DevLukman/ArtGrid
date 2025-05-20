import { useQuery } from "react-query";
import { getLoggedInUserInformation } from "../../services/apiShippingInformation";

export default function useLoggedInUserInformation(email) {
  const { data: loggedUser, isLoading } = useQuery({
    queryKey: ["email", email],
    queryFn: () => getLoggedInUserInformation(email),
    enabled: !!email,
  });

  return { loggedUser, isLoading };
}
