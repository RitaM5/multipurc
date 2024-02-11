import React from 'react';
import { Link } from 'react-router-dom';

const SearchBusiness = () => {
    return (
        <div className='md:w-[700px] font-poppins h-full md:h-[680px] max-w-xl w-full bg-[#1B434D] rounded-xl py-2 px-3 mx-auto  my-12 lg:my-36 '>
            <img src="image/Multipurc (700 x 700 px) 1.png" className='' alt="" srcset="" />
            <div className=' relative md:left-[380px] left-8 bottom-12'>
                <img src="image/particles.png" className='' alt="" srcset="" />
            </div>
            <div className='text-white relative bottom-8 text-center space-y-1'>
                <h2 className='text-[40px] font-bold'>Search Your Busness</h2>
                <p className='text-[24px]'>Send, spend and save smarter</p>
            </div>
            <div className='mt-4 relative bottom-5'>
                <div className='w-full relative'>
                    <img className=' absolute top-5 left-4' src="https://img.icons8.com/ios/25/new-post--v1.png" alt="new-post--v1" />
                    <input type="text" placeholder="Enter Youtr Domain Name" className="input h-[65px] input-bordered w-full max-w-xl pl-12" />
                </div>
                <Link to="/varificationcode">
                    <p className='md:text-right text-center py-4'><button className='w-full md:w-[202px] h-[63px] bg-white text-lg font-semibold'>Search</button></p>
                </Link>

            </div>
        </div>
    );
};

export default SearchBusiness;