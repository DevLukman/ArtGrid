import { Link } from "react-router-dom";

function AuthButton() {
  return (
    <>
      <div className="flex items-center justify-between gap-3 md:flex-col">
        <Link
          to="/login"
          className="w-full flex-grow rounded bg-[#000] py-2 text-center text-base font-normal uppercase text-white"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="w-full flex-grow rounded bg-[#000] py-2 text-center text-base font-normal uppercase text-white"
        >
          SignUp
        </Link>
      </div>
    </>
  );
}

export default AuthButton;
