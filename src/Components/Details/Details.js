import React from 'react';

const Details = ({details,design}) => {
    return (
        <p className={design}>
           {details} 
        </p>
    );
};

export default Details;