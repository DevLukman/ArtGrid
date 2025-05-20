import { useMutation } from "react-query";
import { createInformation as createInformationApi } from "../../services/apiShippingInformation";
import toast from "react-hot-toast";
export function useCreateInformation() {
  const { mutate: createInformation, isLoading } = useMutation({
    mutationFn: (information) => createInformationApi(information),
    onSuccess: () => {
      toast.success("Shipping information added");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createInformation, isLoading };
}
