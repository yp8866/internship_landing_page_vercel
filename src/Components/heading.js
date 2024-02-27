import React from 'react';

const Heading = ({content,className=""}) => {
    return (
        <div className={`w-full ${className}`}>
            {content}
        </div>
    );
}

export default Heading;
