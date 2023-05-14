import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({title,to}) => {
    return (
        <Link to={to} className="bg-green px-6 py-3 text-sm rounded-full text-white font-bold">
           {title} 
        </Link>
    );
};

export default LinkButton;