import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function DeliveryInformationForm() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-8 rounded bg-[#fafafa] px-4 py-4">
      <div className="flex w-full items-center justify-between">
        <h2 className="mb-4 text-xl md:text-2xl">Shipping Address</h2>
        <button onClick={() => setIsOpen((c) => !c)}>
          {isOpen ? (
            <IoIosArrowUp size="1.5rem" />
          ) : (
            <IoIosArrowDown size="1.5rem" />
          )}
        </button>
      </div>
      {isOpen && (
        <form className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address 2"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="text"
              placeholder="country"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="city"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="text"
              placeholder="state/region"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="Zip/Postal code"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <button className="rounded bg-black py-3 uppercase text-white">
            Save shipping address
          </button>
        </form>
      )}
    </div>
  );
}

export default DeliveryInformationForm;
