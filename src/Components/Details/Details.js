import React from 'react';

const Details = ({details,design}) => {
    return (
        <p className={`text-gray ${design}`}>
           {details} 
        </p>
    );
};

export default Details;