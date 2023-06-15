import React from 'react';
import { NavLink } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";



const BreadCrumbs = ({breadcrumbs}) => {
    console.log(breadcrumbs);
    return (
        <ol className='flex gap-5 items-center text-xl'>
            {
               breadcrumbs.map(breadCrumb=> <NavLink to={breadCrumb.link}
               className={({ isActive }) =>
                 ` flex items-center gap-2 font-normal ${
                   isActive ? "text-brown " : "text-[#007bff]"
                 }`
               }>{breadCrumb.title} {!breadCrumb.active? <VscChevronRight className='text-gray text-xl font-thin' />:''} </NavLink>) 
            }
        </ol>
    );
};

export default BreadCrumbs;