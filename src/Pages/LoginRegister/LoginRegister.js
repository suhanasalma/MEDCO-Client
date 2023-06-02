import React from "react";
import "./loginRegister.css";
import { useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginRegister = () => {
  const [add, setAdd] = useState(false);
  const toggleClass = () => {
    setAdd(!add);
    console.log(add);
  };
  return (
    <div className="my-20">
      <div
        className={`logContainer ${add ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form className="flex items-center justify-center flex-col p-12 text-center bg-white">
            <h1 className="font-bold">Create Account</h1>
            <div className="flex gap-5 my-5">
              <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
                {" "}
                <FaFacebookF />
              </div>
              <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
                {" "}
                <FaGooglePlusG />
              </div>
              <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
                {" "}
                <FaLinkedinIn />
              </div>
            </div>
            <span className="text-xs">or use your email for registration</span>
            <input className="logInput" type="text" placeholder="Name" />
            <input className="logInput" type="email" placeholder="Email" />
            <input
              className="logInput"
              type="password"
              placeholder="Password"
            />
            <button className="logBtn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="flex items-center justify-center flex-col p-12 text-center h-full bg-white">
            <h1>Sign in</h1>
            <div className="flex gap-5 my-5">
              <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
                <FaFacebookF />
              </div>
              <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
                <FaGooglePlusG />
              </div>
              <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
                <FaLinkedinIn />
              </div>
            </div>
            <span className="text-xs">or use your account</span>
            <input className="logInput" type="email" placeholder="Email" />
            <input
              className="logInput"
              type="password"
              placeholder="Password"
            />
            <Link to="">Forgot your password?</Link>
            <button className="logBtn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className="logP">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={toggleClass}
                className="ghost logBtn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="logP">
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={toggleClass}
                className="ghost logBtn"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
