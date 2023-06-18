import React from 'react';
import MaleSvg from './MaleSvg';
import FemaleSvg from './FemaleSvg';
import BabySvg from './BabySvg';

const HumanBody = ({ organ, handleBodyPartClick }) => {
  return (
      <section className="flex items-end justify-between gap-10 mt-5 ">
        <MaleSvg organ={organ} handleBodyPartClick={handleBodyPartClick} />
        <FemaleSvg organ={organ} handleBodyPartClick={handleBodyPartClick} />
        <BabySvg organ={organ} handleBodyPartClick={handleBodyPartClick} />
      </section>
  );
};

export default HumanBody;