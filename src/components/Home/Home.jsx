import React from 'react';

const Home = () => {
    const data = [{
        id: 1,
        title: "example.com",
        price: 9.99,
        parcent: 30
    },
    {
        id: 2,
        title: "example.xyz",
        price: 0.99,
        parcent: 30
    },
    {
        id: 3,
        title: "example.org",
        price: 9.99,
        parcent: 30
    },
    {
        id: 4,
        title: "example.info",
        price: 9.99,
        parcent: 30
    },

    ]
    return (
        <div className='font-poppins my-16'>
            <div className=' px-6 bg-[#1B434D] w-full lg:w-[1280] mx-auto rounded-xl'>
                <img src="image/Multipurc (700 x 700 px) 1.png" className='' alt="" srcset="" />
                <div className='mb-8 relative bottom-24'>
                    <div className='flex items-center md:gap-48'>
                        <h2 className='text-3xl font-[35px] text-white text-left pt-28'>Free Domain For You</h2>
                        <div className=' relative top-20 lg:left-60'>
                            <img src="image/particles.png" className='' alt="" srcset="" />
                        </div>
                    </div>
                    <div className='bg-white relative lg:h-[88px] w-full rounded-xl py-3 text-lg text-left px-6 my-3 md:flex md:justify-between items-center'>
                        <div className='flex items-center gap-3 text-lg'>
                            <input type="checkbox" checked="checked" className="checkbox bg-[#1B434D] rounded-full checkbox-sm" />
                            <h2 className='text-[22px] font-semibold'>example.multipurc.com</h2>
                        </div>
                        <p>
                            <button className=' border border-[#1B434D] text-lg w-[129px] h-[42px] my-3 md:my-0 font-semibold'>Create  Now</button>
                        </p>
                    </div>

                    <h2 className='text-3xl mt-12 font-[35px] text-white text-left'>Paid Domain</h2>
                    <div>
                        {
                            data.map(item =>
                                <div className='bg-white lg:h-[88px] w-full rounded-xl grid lg:grid-cols-3 items-center text-lg text-left px-6 my-3 '>
                                    <div className='flex items-center gap-3 text-lg py-3 lg:py-0'>
                                        <input type="checkbox" checked="checked" className="checkbox rounded-full bg-[#1B434D] checkbox-sm" />
                                        <p className='text-[22px] font-semibold'>{item?.title}</p>
                                    </div>
                                    <div className='mt-3 lg:mt-0'>
                                        <p className='w-[120px] text-center rounded-3xl h-[30px] bg-[#1B434D] text-lg text-white'>{item?.parcent}%off</p>
                                    </div>
                                    <div className='md:flex gap-5 my-3 lg:my-0 items-center lg:ml-36'>
                                        <p className='text-[22px] lg:mt-4 font-extrabold'>${item?.price}/yr</p>
                                        <p>
                                            <button className='my-1 lg:my-0 border border-[#1B434D] text-lg w-[129px] h-[42px]  font-semibold'>Buy  Now</button>
                                        </p>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;