import React from 'react';

const Email = () => {
    return (
        <div className='w-full relative'>
            <img className=' absolute top-5 left-4' src="https://img.icons8.com/ios/25/new-post--v1.png" alt="new-post--v1" />
            <input type="text" placeholder="Your Email" className="input h-[65px] input-bordered w-full max-w-xl pl-12" />
        </div>
    );
};

export default Email;