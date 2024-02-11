import React from 'react';
import { Link } from 'react-router-dom';

const VarificationCode = () => {
    const data = [
        {
            id: '',
        },
        {
            id: '',
        },
        {
            id: '',
        },
        {
            id: '',
        },
        {
            id: '',
        }
    ]
    return (
        <div className='md:w-[700px] h-full md:h-[680px] max-w-xl w-full bg-[#1B434D] rounded-xl py-2 px-3 mx-auto my-12 lg:my-36 '>
            <img src="image/Multipurc (700 x 700 px) 1.png" className='' alt="" srcset="" />
            <div className=' relative md:left-[380px] left-6 bottom-12'>
                <img src="image/particles.png" className='' alt="" srcset="" />
            </div>
            <div className='text-white text-center space-y-1 relative bottom-12'>
                <h2 className='text-[40px] font-bold'>Verifation Code</h2>
                <p className='text-[24px]'>Send, spend and save smarter</p>
            </div>
            <div className=' relative bottom-8'>
                <div className='flex justify-center gap-1'>
                    {
                        data.map(items =>
                            <input type='' className='border w-12 h-12 md:w-[64px] md:h-[72px] my-2 border-gray-400 rounded-xl bg-[#1B434D]' value={items.id} />)
                    }

                </div>
                <p className='text-lg text-white md:text-right md:mr-28'>Sent Again</p>
            </div>
            <Link to="/newpass">
                <div className='w-full mt-4 text-left md:text-center space-y-3 relative bottom-6'>
                    <input type="button" value="Next" className="input bg-white text-lg font-semibold  h-[65px]  input-bordered w-full max-w-xl" />
                </div>
            </Link>
        </div>
    );
};

export default VarificationCode;