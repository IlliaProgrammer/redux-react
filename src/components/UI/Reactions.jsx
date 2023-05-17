import React from 'react';

const Reactions = ({children, ...props}) => {
    return (
        <button className='flex flex-row  pt-5 pl-10 pr-10'>
            {children}
        </button>
    );
};

export default Reactions;