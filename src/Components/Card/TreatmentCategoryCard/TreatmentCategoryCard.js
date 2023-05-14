import React from 'react';

const TreatmentCategoryCard = ({data,design,imgDesign}) => {
    return (
        <div className={`flex items-center justify-center bg-light-green border-2 border-light-green w-full ml-2 h-24 p-2 text-center rounded-lg hover:bg-white hover:border-2 hover:border-green transition ease-in-out lg:delay-150 ${design}`}>
            <div>
              <img
                className={`rounded-full border-4 border-white w-12 h-12 object-contain mx-auto ${imgDesign}`}
                alt=""
                src={data.img}
              />
              <p className="font-bold text-green text-xs">{data.name}</p>
            </div>
           </div>
    );
};

export default TreatmentCategoryCard;