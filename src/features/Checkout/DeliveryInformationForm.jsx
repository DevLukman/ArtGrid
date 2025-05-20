import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ClipLoader } from "react-spinners";
import { useCurrentUser } from "../Authentication/useCurrentUser";
import useLoggedInUserInformation from "./useLoggedInUserInformation";
import useUpdateLoggedInUserInformation from "./useUpdateLoggedInUserInformation";
import { useCreateInformation } from "./useCreateInformation";

function DeliveryInformationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData = {} } = useCurrentUser();
  const { email: apiEmail } = userData;
  const { loggedUser = {}, isLoading } = useLoggedInUserInformation(
    apiEmail ? apiEmail : {},
  );
  const { updateInformation, isLoading: updating } =
    useUpdateLoggedInUserInformation();
  const { createInformation, isLoading: isCreating } = useCreateInformation();
  const {
    address,
    email,
    city,
    country,
    firstName,
    lastName,
    number,
    postalCode,
    state,
    id,
  } = loggedUser;

  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    if (loggedUser.email === apiEmail) {
      updateInformation({ id: id, updateInfo: { ...data } });
    } else {
      const information = data;
      createInformation(information);
    }
  }
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
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              defaultValue={firstName}
              {...register("firstName")}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              defaultValue={lastName}
              {...register("lastName")}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              id="address"
              defaultValue={address}
              {...register("address")}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="text"
              placeholder="country"
              defaultValue={country}
              {...register("country")}
              id="country"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="city"
              defaultValue={city}
              {...register("city")}
              id="city"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="text"
              placeholder="State"
              defaultValue={state}
              id="state"
              {...register("state")}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="Zip/Postal code"
              id="postalCode"
              defaultValue={postalCode}
              {...register("postalCode")}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <input
              type="number"
              placeholder="Phone Number"
              id="number"
              {...register("number")}
              defaultValue={number}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
            <input
              type="text"
              placeholder="Email"
              id="email"
              defaultValue={email}
              {...register("email")}
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
            />
          </div>
          {loggedUser.email === apiEmail ? (
            <button
              className="rounded bg-black py-3 uppercase text-white"
              disabled={isLoading || updating}
            >
              {!updating ? (
                "Update shipping information"
              ) : (
                <ClipLoader color="#fff" />
              )}
            </button>
          ) : (
            <button
              className="rounded bg-black py-3 uppercase text-white"
              disabled={isLoading || isCreating}
            >
              {!isCreating ? (
                "Save shipping information"
              ) : (
                <ClipLoader color="#fff" />
              )}
            </button>
          )}
        </form>
      )}
    </div>
  );
}

export default DeliveryInformationForm;
