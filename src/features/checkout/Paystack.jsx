/* eslint-disable react/prop-types */
import { PaystackButton } from "react-paystack";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const publicKey = "pk_test_fefd5f0c57d317f14504c852b89e33ffdf0d920f";

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
