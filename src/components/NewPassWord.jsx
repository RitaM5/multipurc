import React from 'react';

const NewPassWord = () => {
    return (
        <div className=' space-y-4'>
            <div className=' relative'>
            <img className=' absolute top-5 left-4' src="https://img.icons8.com/ios/25/new-post--v1.png" alt="new-post--v1" />
                <input type="password" placeholder="Enter Your New Password" className="input h-[65px] input-bordered w-full max-w-xl pl-12" />
            </div>
            <div className=' relative'>
            <img className=' absolute top-5 left-4' src="https://img.icons8.com/ios/25/new-post--v1.png" alt="new-post--v1" />
                <input type="password" placeholder="Enter Your New Password" className="input h-[65px] input-bordered w-full max-w-xl pl-12" />
            </div>
        </div>
    );
};

export default NewPassWord;