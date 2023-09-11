import React, { useRef, useState } from "react";
import { VscTrash } from "react-icons/vsc";
import selectImage from "../../../Assests/Logo/selectimages.png";
import { TbCircleCheckFilled } from "react-icons/tb";
import LinkButton from "../../../Components/LinkButton/LinkButton";
import BookDoctorList from "../BookDoctorList/BookDoctorList";

const TelemedicineAppointment = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(selectImage);
  const [recommendDoctor, setRecommendDoctor] = useState("");
  const [earlyTime, setEarlyTime] = useState("");
  const [openModal,setOpenModal] = useState(false)

  const displaySelectedImage = (e) => {
    const files = e.target.files;
    if (files && files[0] && files[0].size < 240000) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      window.prompt("file size is bigger then 3kb");
      fileInputRef.current.value = "";
      setSelectedImage(selectImage);
    }
  };
  const deleteImage = () => {
    setSelectedImage(selectImage);
    fileInputRef.current.value = "";
  };
  return (
    <div className="font-semibold text-soft_black shadow-xl p-4 pb-20 mb-20">
      <p className="mt-5 mb-10 text-center">
        Get your online doctor's appointment today! •{" "}
        <span className="text-gray text-md font-normal ">
          You can have this whole conversation with your doctor without ever
          having to leave home.
        </span>
      </p>
      <article className="w-7/12 mx-auto  space-y-3">
        <p>Book an Appointment</p>
        <p className="text-gray font-normal">
          Please fill in the form below to book an appointment at Bumrungrad.
        </p>
        <form>
          <section className="">
            <p className="mb-5">What is your condition or treatment needed?</p>
            <div className="bg-light-green p-5">
              <textarea
                maxlength="2000"
                placeholder="ex: Rash, Genral checkup"
                className="border-2 border-light-gray block w-full"
                cols="80"
              />
              <div className="text-right">
                {" "}
                <span className=" text-light-gray">0/2000</span>
              </div>
              <p>
                Attach a file{" "}
                <span className="text-gray text-sm">(Optional)</span>
              </p>
              <div className="relative mt-5">
                <div className="image-input h-52 w-40">
                  <label
                    htmlFor="upload-image"
                    className="image-input-label mx-auto"
                  >
                    <img
                      alt="select"
                      id="selected-image"
                      className="w-full h-full object-contain selected-image"
                      src={selectedImage}
                    />
                  </label>
                  <input
                    accept=".jpg, .jpeg, .png"
                    ref={fileInputRef}
                    type="file"
                    id="upload-image"
                    className="image-input-field"
                    onChange={(e) => displaySelectedImage(e)}
                  />
                </div>

                <VscTrash
                  onClick={deleteImage}
                  className="absolute -top-3 left-0 font-bold text-white w-6 h-6  border-2 rounded-full  bg-gray flex items-center justify-center"
                />
              </div>
            </div>
          </section>
          <section className="my-5">
            <p>Would you like us to recommend a doctor?</p>
            <div className="font-normal text-sm space-y-5">
              <p
                onClick={() => setRecommendDoctor("recommend_doctor")}
                className={`${
                  recommendDoctor === "recommend_doctor"
                    ? "bg-light-green text-green font-semibold shadow-sm border-2 border-light-green"
                    : "border-2 border-light-gray"
                }  rounded-lg p-2 flex justify-between items-center cursor-pointer`}
              >
                Yes, recommend a doctor for me{" "}
                {recommendDoctor === "recommend_doctor" && (
                  <span
                    className={`${
                      recommendDoctor === "recommend_doctor" && "text-green"
                    }`}
                  >
                    <TbCircleCheckFilled />
                  </span>
                )}
              </p>
              <div
                
                className={`${
                  recommendDoctor === "not_recommend_doctor"
                    ? "bg-light-green text-green font-semibold shadow-sm border-2 border-light-green"
                    : "border-2 border-light-gray"
                } rounded-lg 
              p-2 cursor-pointer`}
              >
                <p onClick={() => setRecommendDoctor("not_recommend_doctor")} className="flex justify-between items-center">
                  No, I will choose my doctor{" "}
                  {recommendDoctor === "not_recommend_doctor" && (
                    <span
                      className={`${
                        recommendDoctor === "not_recommend_doctor" &&
                        "text-green"
                      }`}
                    >
                      <TbCircleCheckFilled />
                    </span>
                  )}
                </p>
               
                {recommendDoctor === "not_recommend_doctor"  && <div><hr className="text-green my-2"/> <div className="flex justify-between items-center">
                  <p className="text-gray">Please select a doctor</p>
                  <p onClick={()=>setOpenModal(true)} className="text-green underline ">Select</p>
                </div>
                </div>}
              </div>
            </div>
          </section>
          <section className="mb-10">
            <p>When would you like to book this appointment for?</p>
            <div className="font-normal text-sm space-y-5">
              <p
                onClick={() => setEarlyTime("early_time")}
                className={`${
                  earlyTime === "early_time"
                    ? "bg-light-green text-green font-semibold shadow-sm border-2 border-light-green"
                    : "border-2 border-light-gray"
                }  rounded-lg p-2 flex justify-between items-center`}
              >
                Earliest availability{" "}
                {earlyTime === "early_time" && (
                  <span
                    className={`${earlyTime === "early_time" && "text-green"}`}
                  >
                    <TbCircleCheckFilled />
                  </span>
                )}
              </p>
              <p
                onClick={() => setEarlyTime("select_time")}
                className={`${
                  earlyTime === "select_time"
                    ? "bg-light-green text-green font-semibold shadow-sm border-2 border-light-green"
                    : "border-2 border-light-gray"
                }  rounded-lg p-2 flex justify-between items-center`}
              >
                Choose a preferred a date and time{" "}
                {earlyTime === "select_time" && (
                  <span
                    className={`${earlyTime === "select_time" && "text-green"}`}
                  >
                    <TbCircleCheckFilled />
                  </span>
                )}
              </p>
            </div>
          </section>
          <div className="bg-green text-white p-2 text-center rounded-lg">
            <button>Next</button>
          </div>
        </form>
      </article>
    {openModal&&  <BookDoctorList openModal={openModal} setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default TelemedicineAppointment;
