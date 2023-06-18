import React from 'react';

const AffectedOrgans = ({ organ, organsInfos, symptom ,handleOrganClick}) => {
  return (
    <section className="grid grid-cols-3 gap-4 h-full overflow-scroll mt-5">
      {organsInfos[organ]?.map((item, i) => (
        <div
          className={`${
            symptom === item.name
              ? "bg-light-brown text-white font-bold rounded-full "
              : ""
          } cursor-pointer flex items-center justify-center w-20 h-20`}
          onClick={() => handleOrganClick(item.name)}
          key={i}
        >
          <div>
            <img className="w-10" src={item.img} alt="" />
            <p className="text-center">{item.name}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AffectedOrgans;