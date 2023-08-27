import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const RightsFooter = () => {
   
  const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     // 👇️ scroll to top on page load
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   }, []);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <div className="text-center text-gray text-sm">
        <hr className="h-2 bg-brown my-5 text-brown" />
        <p className="mb-2">
          Privacy Policy | Terms of Services | Cookies Policy
        </p>
        <small>
          © 2023 MEDCO, all rights reserved by MEDCO
        </small>
        <p className="mb-2 leading-loose">
          33 Sukhumvit 3, Wattana, Dhaka 1207 Bangladesh. <br /> All rights
          reserved.
        </p>
      </div>
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          fontSize: "30px",
          bottom: "40px",
          right: "40px",
          color: "#2c4c3b",
          textAlign: "center",
          display: visible ? "inline" : "none",
        }}
      >
        <FaArrowCircleUp />
      </button>
    </div>
  );
};

export default RightsFooter;
