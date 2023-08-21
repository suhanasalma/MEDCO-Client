import React from 'react';

const SelectSymptoms = ({ Symptoms, symptom,handleSymptomsClick,selectDoctor }) => {
  return (
    <section className="h-full overflow-scroll">
      {Symptoms[symptom]?.map((item, i) => (
        <div onClick={()=>handleSymptomsClick(item)} className={`border-2 cursor-pointer border-brown px-6 py-2 mt-5 ${selectDoctor===item?"bg-light-brown":""}`} key={i}>
          <p className="text-center">{item}</p>
        </div>
      ))}
    </section>
  );
};

export default SelectSymptoms;