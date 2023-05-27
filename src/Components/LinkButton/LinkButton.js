import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({title,to,design}) => {
    return (
      <Link
        to={to}
        className={`btn hover:text-green  border-2 bg-green px-6 py-3 rounded-full text-white font-bold block text-center ${design}`}
      >
        {title}
      </Link>
    );
};

export default LinkButton;