import React from 'react';


const AdvancedSearch = ({ advanceSearch }) => {

  return (
    <div className='mt-10 text-white'>
      <p>Search By Day and Time</p>
      <hr  className='border-light-gray'/>
      <div>
         <label htmlFor="">Days</label>
         <input type="checkbox" name="" id="" />
         <input type="checkbox" name="" id="" />
         <input type="checkbox" name="" id="" />
         <input type="checkbox" name="" id="" />
         <input type="checkbox" name="" id="" />
      </div>
    
    </div>
  );
};

export default AdvancedSearch;