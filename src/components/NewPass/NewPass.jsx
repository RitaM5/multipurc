import React from 'react';
import { Link } from 'react-router-dom';
import NewPassWord from '../NewPassWord';

const NewPass = () => {
    return (
        <div className='md:w-[700px] h-[680px] max-w-xl w-full bg-[#1B434D] rounded-xl py-2 px-3 mx-auto  my-12 lg:my-36 '>
        <img src="image/Multipurc (700 x 700 px) 1.png" className='relative bottom-4' alt="" srcset="" />
        <div className=' relative md:left-[320px] left-6 bottom-28'>
            <img src="image/particles.png" className='' alt="" srcset="" />
        </div>
        <div className='text-white text-center space-y-1 relative bottom-44'>
            <h2 className='text-[40px] font-bold'>New Password</h2>
            <p className='text-[24px]'>Send, spend and save smarter</p>
        </div>
        <div className=' relative bottom-24'>
            <NewPassWord/>
        </div>
        <div className='mt-2 relative bottom-24'>        
            <Link to="/countryselect">
                <p className='md:text-right text-center py-4'><button className='w-[202px] h-[63px] bg-white text-lg font-semibold'>Save</button></p>
            </Link>
        </div>
    </div>
    );
};

export default NewPass;