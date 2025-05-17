/* eslint-disable react/prop-types */
import { PaystackButton } from "react-paystack";
import { useCurrentUser } from "../Authentication/useCurrentUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const publicKey = import.meta.env.VITE_PAYSTACK_KEY;
function Paystack({ amount }) {
  const navigate = useNavigate();
  const { userData = {} } = useCurrentUser();
  const { email, firstName, phone } = userData;
  const name = firstName;
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Proceed",
    onSuccess: () => {
      navigate("/success");
    },

    onClose: () => {
      toast.error("PAYMENT CANCELED");
    },
  };

  return (
    <PaystackButton
      {...componentProps}
      className="w-full rounded bg-black py-2 uppercase text-white"
    />
  );
}

export default Paystack;
