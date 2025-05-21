import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useCurrentUser } from "./useCurrentUser";
import { useLogout } from "./useLogout";
function AuthButton() {
  const { isAuthenticated } = useCurrentUser();
  const { logout, isLoading } = useLogout();
  if (isAuthenticated)
    return (
      <button
        onClick={logout}
        className="w-full flex-grow rounded bg-[#000] py-2 text-center text-base font-normal uppercase text-white"
      >
        {!isLoading ? "Log out" : <ClipLoader color="#fff" size="1.3rem" />}
      </button>
    );
  return (
    <>
      <div className="flex items-center justify-between gap-3 md:flex-col">
        <Link
          role="button"
          to="/login"
          className="w-full flex-grow rounded bg-[#000] py-2 text-center text-base font-normal uppercase text-white"
        >
          Login
        </Link>
        <Link
          role="button"
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
