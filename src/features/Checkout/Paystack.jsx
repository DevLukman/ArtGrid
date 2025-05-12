/* eslint-disable react/prop-types */
import { PaystackButton } from "react-paystack";
import { useCurrentUser } from "../Authentication/useCurrentUser";
const publicKey = import.meta.env.VITE_PAYSTACK_KEY;
function Paystack({ amount }) {
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
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <PaystackButton
      {...componentProps}
      className="w-full rounded bg-black py-2 uppercase text-white"
    />
  );
}

export default Paystack;
