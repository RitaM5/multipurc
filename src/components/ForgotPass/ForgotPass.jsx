import React from 'react';
import Email from '../Email';
import { Link } from 'react-router-dom';

const ForgotPass = () => {
    return (
        <div className='md:w-[700px] font-poppins h-full md:h-[680px] max-w-xl w-full bg-[#1B434D] rounded-xl py-2 px-3 mx-auto my-12 lg:my-36 '>
            <img src="image/Multipurc (700 x 700 px) 1.png" className='' alt="" srcset="" />
            <div className=' relative md:left-[380px] left-6 bottom-12'>
                <img src="image/particles.png" className='' alt="" srcset="" />
            </div>
            <div className='text-white text-center space-y-1 relative bottom-8'>
                <h2 className='text-[40px] font-bold'>Forget Password</h2>
                <p className='text-[24px]'>Send, spend and save smarter</p>
            </div>
            <div className='mt-4'>
                <Email className="" />
                <Link to="/varificationcode">
                    <p className='md:text-right text-center py-4'><button className='md:w-[202px] w-full h-[63px] bg-white text-lg font-semibold rounded-lg'>Search</button></p>
                </Link>

            </div>
        </div>
    );
};

export default ForgotPass;