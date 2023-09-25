import React from 'react';

const AppointmentType = ({setOpenModal}) => {

    return (
        <div className="space-y-1 px-4 pb-1 text-gray">
        <p className='text-xs'>Appointment Type</p>
        <div className="font-medium text-xs space-y-1 flex items-center justify-between">
          <div  onClick={()=>setOpenModal(true)}>
            <label className="flex items-center">
              <input
                className="radio-input hidden"
                value="Recommend a doctor"
                type="radio"
                name="appointment_type"
              />

              <span
                style={{
                  width: "14px",
                  height: "14px",
                  border: "2px solid #2c4c3b",
                  borderRadius: "50%",
                  display: "inline-block",
                  position: "relative",
                  marginRight: "5px",
                }}
                className="radio-out-circle"
              >
                <span className="radio-inn-circle"></span>
              </span>
              <span className="radio-label">Telemedicine</span>
            </label>
          </div>
          <div onClick={()=>setOpenModal(true)}>
            <label className="flex items-center">
              <input
                className="radio-input"
                value="I will choose my doctor"
                type="radio"
                name="appointment_type"
              />

              <span
                style={{
                  width: "14px",
                  height: "14px",
                  border: "2px solid #2c4c3b",
                  borderRadius: "50%",
                  display: "inline-block",
                  position: "relative",
                  marginRight: "5px",
                }}
                className="radio-out-circle"
              >
                <span className="radio-inn-circle"></span>
              </span>
              <span className="radio-label">Physical</span>
            </label>
          </div>
        </div>
        
      </div>
    );
};

export default AppointmentType;