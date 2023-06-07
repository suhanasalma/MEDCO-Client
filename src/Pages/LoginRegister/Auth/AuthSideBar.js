import React from 'react';
const AuthSideBar = ({signIn,setSignIn,details,title}) => {
    return (
        <div
        style={{
          background: "#2c4c3b",
          background: "-webkit-linear-gradient(to right, #2c4c3b, #af976d)",
          background: "linear-gradient(to right, #2c4c3b, #af976d)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0 0",
          color: "#FFFFFF",
          transition: "transform 0.6s ease-in-out",
        }}
        className={`w-5/12 p-10 text-center text-white hidden sm:flex items-center justify-center duration-1000 ease-in-out ${
          signIn ? " sm:translate-x-[140%] " : ""
        }`}
      >
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm">
           {details}
          </p>
          <button
            onClick={() => setSignIn(!signIn)}
            className="border-2 border-white w-52 rounded-lg px-4 py-2"
          >
            Sign In
          </button>
        </div>
      </div>
    );
};

export default AuthSideBar;