import React from 'react';
import Header from '../Pages/SharedPages/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
   return (
      <div className=' mx-auto 2xl:max-w-screen-2xl'>
         <Header/>
         <Outlet/>
      </div>
   );
};

export default Main;