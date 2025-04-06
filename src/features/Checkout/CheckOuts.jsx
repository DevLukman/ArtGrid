import CheckOutContent from "./CheckOutContent";
import DeliveryInformationForm from "./DeliveryInformationForm";
import OrderSummary from "./OrderSummary";

function CheckOuts() {
  return (
    <section className="relative w-full">
      <div className="app-container relative flex w-full flex-col gap-6 pt-[120px] lg:flex-row">
        <div className="w-full lg:w-[60%]">
          <CheckOutContent />
          <DeliveryInformationForm />
        </div>
        <div className="w-full md:ml-10 lg:w-[35%]">
          <OrderSummary />
        </div>
      </div>
    </section>
  );
}

export default CheckOuts;
