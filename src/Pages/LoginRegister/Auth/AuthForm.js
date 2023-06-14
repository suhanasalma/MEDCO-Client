import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useRef } from "react";

const AuthForm = ({ isOpen, onClose }) => {
  const [signIn, setSignIn] = useState(false);
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling of the page when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling of the page when the modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      className="w-full fixed top-0 lg:left-0 right-0 h-full  bg-white z-50 overflow-scroll"
      style={{
        position: "",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      }}
    >
      <div className="md:w-full h-10/12 lg:h-full flex justify-center items-center ">
        <Register onClose={onClose} signIn={signIn} setSignIn={setSignIn} />

        <Login onClose={onClose} signIn={signIn} setSignIn={setSignIn} />
      </div>
    </div>
  );
};

export default AuthForm;
