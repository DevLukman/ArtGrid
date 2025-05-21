import { useMutation } from "react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationKey: ["user"],
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Account succesfully created!");
      navigate("/login", { replace: true });
    },
  });

  return { signup, isLoading };
}
