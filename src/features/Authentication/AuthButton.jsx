import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function AuthButton() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <button
          className="flex-grow rounded bg-[#000] py-2 text-base font-normal uppercase text-white"
          onClick={() => {
            setLogin(true);
          }}
        >
          Login
        </button>
        <button
          className="flex-grow rounded bg-[#000] py-2 text-base font-normal uppercase text-white"
          onClick={() => {
            setSignUp(true);
          }}
        >
          SignUp
        </button>
      </div>
      {login && <LoginForm setLogin={setLogin} setSignUp={setSignUp} />}
      {signUp && <SignUpForm setLogin={setLogin} setSignUp={setSignUp} />}
    </>
  );
}

export default AuthButton;
