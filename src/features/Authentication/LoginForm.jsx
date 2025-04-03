/* eslint-disable react/prop-types */
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
function LoginForm({ setLogin, setSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123456789");
  function navigateToSignUp() {
    setLogin((cur) => !cur);
    setSignUp((cur) => !cur);
  }
  return (
    <>
      <div className="fixed inset-0 z-50 w-full bg-gray-50/20 backdrop-blur-sm">
        <div className="mx-auto mt-[80px] min-h-[500px] max-w-[350px] bg-white py-8 sm:max-w-[400px]">
          <h1 className="text-center text-xl md:text-3xl">
            Welcome to ArtGrid
          </h1>
          <form className="mt-8 px-4 md:px-8">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full rounded border border-gray-300 px-3 py-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-6 w-full rounded border border-gray-300 px-3 py-3 outline-none"
              required
            />
            <div className="mt-6">
              <button className="w-full rounded bg-[#000] py-2 text-center uppercase text-white">
                Log In
              </button>
            </div>
            <div className="mt-6 w-full">
              <h2 className="text-center font-extrabold">OR</h2>
              <div className="mt-6 flex items-center justify-between gap-4">
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
            <p className="text-center">Don&apos;t have an account?</p>
            <button className="underline" onClick={navigateToSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
