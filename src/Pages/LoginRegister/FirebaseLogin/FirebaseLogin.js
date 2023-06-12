import React from "react";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogleAsync } from "../../../StateManagment/FirebaseLoginSlice/FirebaseLoginSlice";
import { Link } from "react-router-dom";

const FirebaseLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.firebaseLogin.user);
  const error = useSelector((state) => state.firebaseLogin.error);

  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogleAsync());
  };

  const googleAuth = () => {
		window.open(
			`http://localhost:5000/auth/google/callback`
		);
	};

  return (
    <div className="flex gap-5 my-5 items-center justify-center">
      <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
        <FaFacebookF />
      </div>
      <Link  onClick={googleAuth} 

        className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown"
      >
        <FaGooglePlusG />
      </Link>
      <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default FirebaseLogin;
