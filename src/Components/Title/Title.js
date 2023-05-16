import React from 'react';

const Title = ({title,design}) => {
    return (
        <div>
            <p className={`text-green font-bold text-3xl ${design}`}>{title}</p>
        </div>
    );
};

export default Title;