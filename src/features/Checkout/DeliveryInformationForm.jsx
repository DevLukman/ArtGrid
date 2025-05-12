import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useCurrentUser } from "../Authentication/useCurrentUser";

function DeliveryInformationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData = {} } = useCurrentUser();
  const { email, firstName, lastName, phone } = userData;
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
              id="firstName"
              defaultValue={firstName}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              defaultValue={lastName}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              id="address"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address 2"
              id="address2"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="text"
              placeholder="country"
              id="country"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="city"
              id="city"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="text"
              placeholder="state/region"
              id="state/region"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="Zip/Postal code"
              id="zip"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="number"
              placeholder="Phone Number"
              id="phoneNumber"
              defaultValue={phone}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="Email"
              id="email"
              defaultValue={email}
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
