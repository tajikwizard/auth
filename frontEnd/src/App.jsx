import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <Card>
        <div className="card_wrapper">
          <div className="card_header text-center text-3xl font-semibold">
            <h1>Login Form</h1>
          </div>
          <div className="card_btns mt-8 mb-8 flex justify-evenly border rounded-2xl">
            <button className="btn-login text-white font-semibold text-lg">
              Login
            </button>
            <button className="btn-register font-semibold text-lg">
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
          </form>
          <p className="text-blue-600 mt-4">Forgot Password?</p>
          <button className="login-btn rounded-2xl p-3 text-white text-xl mt-6 mb-6">
            Login
          </button>
          <p className="ml-2">
            Not a member?
            <a className="ml-2 text-blue-600" href="#">
              Signup now
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default App;
