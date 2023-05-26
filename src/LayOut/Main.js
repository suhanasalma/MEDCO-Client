import React from 'react';
import Header from '../Pages/SharedPages/Header/Header';
import { Outlet } from 'react-router-dom';
import SecondHeader from '../Pages/SharedPages/SecondHeader/SecondHeader';

const Main = () => {
   return (
      <div className=' mx-auto max-w-screen-2xl'>
         {/* <Header/> */}
         <SecondHeader/>
         <Outlet/>
      </div>
   );
};

export default Main;