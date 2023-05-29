import React from 'react';
import './Title.css'

const Title = ({title,design}) => {
    return (
        <div>
            <p className={` sideTitle text-green font-bold text-3xl ${design}`}>{title}</p>
        </div>
    );
};

export default Title;