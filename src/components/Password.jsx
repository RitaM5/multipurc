import React, { useState } from 'react';

const Password = () => {
    const [show, setShow] = useState(false)
    return (
        <div className=' relative'>
            <input type={show ? "text" : "password"} placeholder="Your Password" className="input h-[65px] input-bordered w-full max-w-xl" />
            <img onClick={() => setShow(!show)} className=' absolute right-0 bottom-4 md:mr-8 mr-4 lg:mr-8' src="https://img.icons8.com/sf-regular/25/visible.png" alt="visible" />
        </div>
    );
};

export default Password;