import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../features/Authentication/useCurrentUser";
import { clearCart, getCart, getTotalPrice } from "../features/cart/cartSlice";
import { downloadReceiptPDF } from "../utils/helpers";
import Receipt from "../features/Checkout/Receipt";
function Success() {
  const receiptRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");
  const { userData = {} } = useCurrentUser();
  const { firstName, email } = userData;
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalPrice);
  const shippingCost = totalPrice * 0.1;
  const taxes = totalPrice * 0.09;
  const total = totalPrice + shippingCost + taxes;

  const dispatch = useDispatch();
  function handleDownload() {
    downloadReceiptPDF(receiptRef, setLoading);
  }
  useEffect(function () {
    confetti({
      particleCount: 1000,
      spread: 1000,
      origin: { y: 0.4 },
    });
  }, []);
  return (
    <>
      <section className="app-container relative h-screen w-full">
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-center text-3xl font-extrabold uppercase md:text-5xl">{`Thank you, ${firstName}!`}</h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 font-normal md:flex-row md:gap-8">
            <button
              className="w-full rounded bg-black py-2 uppercase text-white"
              onClick={handleDownload}
              disabled={loading}
            >
              {loading ? "Generating PDF..." : "Download Receipt"}
            </button>
            <button
              className="w-full rounded bg-black py-2 uppercase text-white"
              onClick={() => {
                navigate("/product");
                dispatch(clearCart());
              }}
            >
              Continue shopping
            </button>
          </div>
        </div>
      </section>
      <div ref={receiptRef}>
        <Receipt
          cart={cart}
          total={total}
          userEmail={email}
          paymentId={Math.random()}
        />
      </div>
    </>
  );
}

export default Success;
