import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.css'

const LinkButton = ({title,to,design}) => {
    return (
      <Link
        to={to}
        className={`btn hover:text-green bg-green px-6 py-2 rounded-full text-white font-bold block text-center ${design}`}
      >
        {title}
      </Link>
    );
};

export default LinkButton;