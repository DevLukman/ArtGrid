/* eslint-disable react/prop-types */
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
function SignUpForm({ setLogin, setSignUp }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123456789");
  function navigateToLogin() {
    setLogin((cur) => !cur);
    setSignUp((cur) => !cur);
  }
  return (
    <div className="fixed inset-0 z-50 w-full bg-gray-50/20 backdrop-blur-sm">
      <div className="mx-auto mt-[70px] min-h-[500px] max-w-[350px] bg-white py-6 sm:max-w-[400px]">
        <h1 className="text-center text-xl md:text-3xl">Welcome to ArtGrid</h1>
        <form className="px-4 md:px-8">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-4 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-4 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
            required
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-4 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
            required
          />
          <div className="mt-4">
            <button className="w-full rounded bg-[#000] py-2 text-center uppercase text-white">
              Sign Up
            </button>
          </div>
          <div className="mt-4 w-full">
            <h2 className="text-center font-extrabold">OR</h2>
            <div className="mt-3 flex items-center justify-between gap-4">
              <button className="flex w-full items-center justify-center border py-2">
                <FcGoogle />
              </button>
              <button className="flex w-full items-center justify-center border py-2">
                <IoLogoGithub />
              </button>
            </div>
          </div>
        </form>
        <div className="mt-6 flex w-full items-center justify-center gap-2">
          <p className="text-center">Already have an account?</p>
          <button className="underline" onClick={navigateToLogin}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
