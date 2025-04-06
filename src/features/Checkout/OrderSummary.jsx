import { useState } from "react";

function OrderSummary() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="rounded bg-[#fafafa] px-5 py-4 font-medium">
      <div className="flex flex-col gap-3 pb-3">
        <h1 className="text-base font-medium md:text-2xl">Order Summary</h1>
        <p>Payment Method</p>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <input type="checkbox" onClick={() => setChecked((c) => !c)} />
          <p>Stripe</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p>PayPal</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p>FlutterWave</p>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p>SUB Total</p>
            <p>XXX</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Shipping Cost</p>
            <p>XXX</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Taxes</p>
            <p>XXX</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>XXX</p>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center">
          <button
            disabled={checked}
            className={`w-full rounded ${checked ? "bg-gray-400" : "bg-[black]"} py-2 text-white`}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderSummary;
