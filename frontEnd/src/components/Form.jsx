import { useState } from "react";

const Form = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className="card_wrapper">
      <div className="card_header text-center text-3xl font-semibold">
        {isLoggedIn ? "Register Form" : "Login Form"}
      </div>
      <div className="card_btns mt-8 mb-8 flex justify-evenly border rounded-2xl">
        <button
          className="btn-login text-white font-semibold text-lg"
          onClick={handleToggle}
        >
          Login
        </button>
        <button
          className="btn-register font-semibold text-lg"
          onClick={handleToggle}
        >
          Register
        </button>
      </div>
      <form action="" className="">
        <input
          type="email"
          placeholder="Email Address"
          required
          className="p-3 border w-full rounded-xl mb-6 shadow-md outline-none focus:shadow-lg"
        />
        <input
          type="password"
          placeholder="Enter Password"
          required
          className="p-3 border w-full rounded-xl shadow-md mb-6 outline-none focus:shadow-lg"
        />
        {isLoggedIn ? (
          <input
            type="password"
            placeholder="Confirm the Password"
            required
            className="p-3 border w-full rounded-xl shadow-md mb-6 outline-none focus:shadow-lg"
          />
        ) : null}
      </form>
      {isLoggedIn ? "" : <p className="text-blue-600 mt-4">Forgot Password?</p>}
      {isLoggedIn ? (
        <button className="login-btn rounded-2xl p-3 text-white text-xl mt-6 mb-6">
          Register
        </button>
      ) : (
        <button className="login-btn rounded-2xl p-3 text-white text-xl mt-6 mb-6">
          Login
        </button>
      )}

      <p className="ml-2">
        Not a member?
        <a className="ml-2 text-blue-600" href="#">
          Signup now
        </a>
      </p>
    </div>
  );
};

export default Form;
