import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../features/Authentication/useCurrentUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

function Success() {
  const navigate = useNavigate("");
  const { userData = {} } = useCurrentUser();
  const { firstName } = userData;
  const dispatch = useDispatch();

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
            <button className="w-full rounded bg-black py-2 uppercase text-white">
              Download Recepit
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
    </>
  );
}

export default Success;
