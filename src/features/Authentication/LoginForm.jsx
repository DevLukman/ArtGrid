import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import SearchLoading from "../../ui/SearchLoading";
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password) return;
    login({ email, password });
  }
  return (
    <>
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
            <form className="mt-8 px-4 md:px-8" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                disabled={isLoading}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-6 w-full rounded border border-gray-300 px-3 py-3 outline-none focus:border-[#333]"
                required
              />
              <div className="mt-6">
                <button
                  disabled={isLoading}
                  className="w-full rounded bg-[#000] py-2 text-center uppercase text-white"
                >
                  {!isLoading ? "Log In" : <SearchLoading />}
                </button>
              </div>
              <div className="mt-6 w-full">
                <h2 className="text-center font-extrabold">OR</h2>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <button className="flex w-full items-center justify-center rounded border py-2">
                    <FcGoogle />
                  </button>
                  <button className="flex w-full items-center justify-center rounded border py-2">
                    <IoLogoGithub />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-6 flex w-full items-center justify-center gap-2">
              <p className="text-center">Don&apos;t have an account?</p>
              <Link to="/signup" className="underline">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
