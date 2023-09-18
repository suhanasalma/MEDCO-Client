import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";



const BreadCrumbs = ({breadcrumbs}) => {
    return (
        <ol className='flex gap-5 items-center text-sm'>
            {
               breadcrumbs.map((breadCrumb,i)=> <Link key={i} to={breadCrumb.link}
               className={
                 ` flex items-center gap-2 font-normal ${
                    breadCrumb.active ? "text-brown " : "text-green"
                 }`
               }>{breadCrumb.title} {!breadCrumb.active? <VscChevronRight className='text-gray text-xl font-thin' />:''} </Link>) 
            }
        </ol>
    );
};

export default BreadCrumbs;