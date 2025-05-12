import { useSelector } from "react-redux";
import { getTotalPrice } from "../cart/cartSlice";
import Paystack from "./Paystack";
import { formatCurrency } from "../../utils/helpers";

function OrderSummary() {
  const totalPrice = useSelector(getTotalPrice);
  const shippingCost = totalPrice * 0.1;
  const taxes = totalPrice * 0.09;
  const amount = totalPrice + shippingCost + taxes;
  return (
    <div className="rounded bg-[#fafafa] px-5 py-4 font-medium">
      <div className="flex flex-col gap-3 pb-3">
        <h1 className="text-base font-medium uppercase md:text-xl">
          Order Summary
        </h1>
        <p>Payment Method: PayStack</p>
      </div>
      <div className="mt-4 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <p>SUB Total</p>
          <p>{formatCurrency(totalPrice)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping Cost</p>
          <p>{formatCurrency(shippingCost)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Taxes</p>
          <p>{formatCurrency(taxes)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Total</p>
          <p>{formatCurrency(amount)}</p>
        </div>
        <Paystack amount={amount * 100} />
      </div>
    </div>
  );
}

export default OrderSummary;
