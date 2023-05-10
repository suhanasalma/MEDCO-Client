import React from 'react';

const Title = ({title,design}) => {
    return (
        <div>
            <p className={design}>{title}</p>
        </div>
    );
};

export default Title;