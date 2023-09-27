import React, { useRef, useState } from "react";
import { VscTrash } from "react-icons/vsc";
import selectImage from "../../../Assests/Logo/selectimages.png";
import { TbCircleCheckFilled ,TbCalendar} from "react-icons/tb";
import DoctorListModal from "../DoctorListModal/DoctorListModal";
import {departments,availableSlots,doctorList} from "../DepartmentSelect/departments";
import DepartmentSelect from "../DepartmentSelect/DepartmentSelect";
import DoctorSlotsModal from "../../../Components/ReactDayPicker/DoctorSlotsModal";
import AppointmentSummery from "../../../Components/AppointmentSummery/AppointmentSummery";
import Select from "react-select";
import SelectOptions from "../../../Components/SelectOptions/SelectOptions";

const TelemedicineAppointment = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(selectImage);
  const [recommendDoctor, setRecommendDoctor] = useState("");
  const [earlyTime, setEarlyTime] = useState("");
  const [openModal,setOpenModal] = useState(false)
  const [textLength,setTextLength] = useState(0)
  const [selectDoctor,setSelectDoctor] = useState('')
  const [selectDepartment,setSelectDepartment] = useState('')
  const [openSelectIndex, setOpenSelectIndex] = useState(null);
  const [selectAppointmentDateModal,setSelectAppointmentDateModal] = useState(false)
  const [selectAppointmentDate,setSelectAppointmentDate] = useState(null)
  const [appointmentSummeryPage, setAppointmentSummeryPage] = useState(false);


  const handleSelectToggle = (index) => {
    setOpenSelectIndex(index === openSelectIndex ? null : index);
  };
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

  const selectDateAndTime = () =>{
    if(selectDepartment || selectDoctor){
        setSelectAppointmentDateModal(true)
    }else{
        alert('please select a doctor or any department')
    }
  }


  return (
    <div className="font-semibold text-soft_black shadow-xl p-4 pb-20 mb-20">
      <p className="mt-5 mb-10 text-center">
        Get your online doctor's appointment today! •{" "}
        <span className="text-gray text-md font-normal ">
          You can have this whole conversation with your doctor without ever
          having to leave home.
        </span>
      </p>
     <article className="w-10/12 sm:w-8/12 lg:w-7/12 mx-auto  space-y-3">
     { !appointmentSummeryPage ? <><p>Book an Appointment</p>
        <p className="text-gray font-normal">
          Please fill in the form below to book an appointment at Bumrungrad.
        </p>
        <form>
          <section className="">
            <p className="mb-5">What is your condition or treatment needed?</p>
            <div className="bg-light-green p-5">
              <textarea onInput={(e)=>setTextLength(e.target.value.length)}
                maxLength="2000"
                placeholder="ex: Rash, Genral checkup"
                className="border-2 border-light-gray block w-full text-soft_black"
                cols="80"
              />
              <div className="text-right">
                <span className=" text-light-gray">{textLength}/2000</span>
              </div>
              <p>
                Attach a file{" "}
                <span className="text-gray text-sm">(Optional)</span>
              </p>
              <div className="relative mt-5">
                <div className="image-input h-52 w-40 sm:w-44 lg:w-60">
                  <label
                    htmlFor="upload-image"
                    className="image-input-label mx-auto"
                  >
                    <img
                      alt="select"
                      id="selected-image"
                      className={`${selectedImage === selectImage?"w-40 ":"w-full  "} h-full object-contain selected-image`}
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
          <section className="my-10 space-y-2">
            <p>Would you like us to recommend a doctor?</p>
            <div className="font-normal text-sm space-y-5">
            
              <div
                className={`${
                  recommendDoctor === "recommend_doctor"
                    ? "bg-light-green text-green font-semibold shadow-sm border-2 border-light-green"
                    : "border-2 border-light-gray"
                } rounded-md 
              p-2 cursor-pointer`}
              >
                <p onClick={() => {setRecommendDoctor("recommend_doctor") 
                setSelectDoctor('')}} className="flex justify-between items-center">
                Yes, recommend a doctor for me
                  {recommendDoctor === "recommend_doctor" && (
                    <span
                      className={`${
                        recommendDoctor === "recommend_doctor" &&
                        "text-green"
                      }`}
                    >
                      <TbCircleCheckFilled />
                    </span>
                  )}
                </p>
               
                {recommendDoctor === "recommend_doctor"  && <div><hr className="text-green my-2"/> <div className="">
                  <p className="text-gray font-medium mb-2">Please select a department</p>
                  <SelectOptions options={departments.options}/>
                </div>
                </div>}
              </div>
              <div
                className={`${
                  recommendDoctor === "not_recommend_doctor"
                    ? "bg-light-green text-green font-semibold shadow-sm border-2 border-light-green"
                    : "border-2 border-light-gray"
                } rounded-md 
              p-2 cursor-pointer`}
              >
                <p onClick={() => {setRecommendDoctor("not_recommend_doctor")
            setSelectDepartment('')}} className="flex justify-between items-center">
                  No, I will choose my doctor
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
                  {selectDoctor ?
                 <div  className='cursor-pointer rounded-md flex items-center gap-2' >
                 <img className='w-10 h-10 rounded-full object-cover' src={selectDoctor.img} alt='doctor_image'/>
                 <div className='text-sm space-y-1'>
                     <p>{selectDoctor.name}</p>
                     <p className='text-xs text-gray font-normal'>{selectDoctor.details}</p>
                 </div>
                </div>
                  : <p className="text-gray font-medium">Please select a doctor</p>}
                  <p onClick={()=>setOpenModal(true)} className="text-green underline ">Select</p>
                </div>
                </div>}
              </div>
            </div>
          </section>
          <section className="mb-10 space-y-2">
            <p>When would you like to book this appointment for?</p>
            <div className="font-normal text-sm space-y-5">
              <p
                onClick={() => {setEarlyTime("early_time")
                setSelectAppointmentDate(null)}}
                className={`${
                  earlyTime === "early_time"
                    ? "bg-light-green text-green font-semibold shadow-sm border-2 border-light-green"
                    : "border-2 border-light-gray"
                }  rounded-md p-2 flex justify-between items-center`}
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
              <div
                onClick={() => {setEarlyTime("select_time")
                selectDateAndTime()}}
                className={`${
                  earlyTime === "select_time"
                    ? "bg-light-green text-green font-semibold shadow-sm border-2 border-light-green"
                    : "border-2 border-light-gray"
                }  rounded-md p-2 flex justify-between items-center cursor-pointer`}
              >
               {selectAppointmentDate? <div className="flex items-center gap-2"><TbCalendar className="text-2xl"/> <p>{selectAppointmentDate[0]} <br/>{selectAppointmentDate[1]}</p></div>:<p>Choose a preferred a date and time</p>}
                {earlyTime === "select_time" && (
                  <span
                    className={`${earlyTime === "select_time" && "text-green"}`}
                  >
                    <TbCircleCheckFilled />
                  </span>
                )}
              </div>
            </div>
          </section>
          <div onClick={()=>setAppointmentSummeryPage(true)} className="bg-green text-white p-2 text-center rounded-lg cursor-pointer">
            <p >Next</p>
          </div>
        </form></>: <AppointmentSummery setAppointmentSummeryPage={setAppointmentSummeryPage}/>}
      </article>
    {openModal&&  
    <DoctorListModal 
        setSelectDoctor={setSelectDoctor} 
        doctorList={doctorList} 
        openModal={openModal} 
        setOpenModal={setOpenModal}
    />}
    {selectAppointmentDateModal && 
    <DoctorSlotsModal 
        buttonName="Select Date & Time" 
        setSelectAppointmentDate={setSelectAppointmentDate} 
        openModal={selectAppointmentDateModal} 
        setOpenModal={setSelectAppointmentDateModal} 
        availableSlots={availableSlots}
    />}
    
    </div>
  );
};

export default TelemedicineAppointment;
