import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useSignUp } from "./useSignUp";
function SignUpForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { signup, isLoading } = useSignUp();
  function onSubmit({ email, password, firstName, lastName, phone }) {
    signup(
      { email, password, firstName, lastName, phone },
      {
        onSettled: () => reset(),
      },
    );
  }
  return (
    <section className="h-screen w-full overflow-hidden bg-[#fafafa]">
      <div className="flex h-screen w-full items-center justify-center">
        <div className="relative mx-auto mt-[30px] min-h-[500px] max-w-[350px] bg-white px-2 py-6 md:max-w-[500px]">
          <h1 className="text-center text-xl md:text-2xl">
            Welcome to ArtGrid
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="absolute right-4 top-4"
          >
            <FaXmark />
          </button>
          <form className="px-4 md:px-8" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              {...register("firstName")}
              className="mt-4 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
              disabled={isLoading}
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              {...register("lastName")}
              className="mt-4 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
              disabled={isLoading}
            />
            <input
              type="text"
              placeholder="Email"
              id="email"
              {...register("email", {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              className="mt-4 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
              disabled={isLoading}
            />
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              {...register("phone")}
              className="mt-4 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
              disabled={isLoading}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              {...register("password")}
              className="mt-4 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
              required
              disabled={isLoading}
            />
            <div className="mt-4">
              <button
                disabled={isLoading}
                className="w-full rounded bg-[#000] py-2 text-center uppercase text-white"
              >
                {!isLoading ? (
                  "Sign up"
                ) : (
                  <ClipLoader color="#fff" size="1.3rem" />
                )}
              </button>
            </div>
          </form>
          <div className="mt-6 flex w-full items-center justify-center gap-2">
            <p className="text-center">Already have an account?</p>
            <Link to="/login" className="underline">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;
