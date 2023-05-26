import React from 'react';
import { Link } from 'react-router-dom';

const LowerHeader = () => {
   return (
     <div className="hidden md:flex justify-between items-center gap-5 text-gray ">
       <Link>Find a doctor</Link>
       <Link>Find a doctor</Link>
       <Link>Find a doctor</Link>
       <Link>Find a doctor</Link>
       <Link>Find a doctor</Link>
     </div>
   );
};

export default LowerHeader;