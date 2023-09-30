import React, { useRef, useState } from 'react';
import FixedHeader from './FixedHeader';
import MainNavMenu from './MainNavMenu';

const Header = () => {

   return (
     <section className="p-2 lg:w-10/12 mx-auto">
       <FixedHeader />
       <hr className="mb-4 text-light-gray hidden md:block" />
       <MainNavMenu/>
     </section>
   );
};

export default Header;