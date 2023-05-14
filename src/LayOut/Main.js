import React from 'react';
import Header from '../Pages/SharedPages/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
   return (
      <div className='w-9/12 mx-auto'>
         <Header/>
         <Outlet/>
      </div>
   );
};

export default Main;