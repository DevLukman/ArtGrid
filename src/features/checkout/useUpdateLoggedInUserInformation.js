import { useMutation, useQueryClient } from "react-query";
import { updateInformation as updateInformationApi } from "../../services/apiShippingInformation";
import toast from "react-hot-toast";

export default function useUpdateLoggedInUserInformation() {
  const queryClient = useQueryClient();
  const { mutate: updateInformation, isLoading } = useMutation({
    mutationFn: ({ id, updateInfo }) =>
      updateInformationApi({ id, updateInfo }),
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateInformation, isLoading };
}
