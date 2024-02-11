import React from 'react';
import { BarLoader } from 'react-spinners';
import Email from '../Email';
import Password from '../Password';
import { Link } from 'react-router-dom';

const SignIn = () => {

    return (
        <div className=' w-full lg:my-16 my-12 font-poppins'>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 items-center px-3 gap-8'>
                {/*  lg:w-[700px] h-[850px] lg:w-[1310px]*/}
                <div className='w-full order-last lg:order-first'>
                    <h1 className='text-[40px] font-bold'>Log In to Multipurc</h1>
                    <p className='py-2 w-full text-[30px]'>
                        Send, spend and save smarter
                    </p>
                    <div className='md:flex gap-16 justify-center mt-3 py-4 w-full max-w-xl mx-auto'>
                        <div className='md:w-[256px] px-2 w-full max-w-xl flex items-center gap-2 h-[52px] border border-gray-400'>
                            <img src="image/Google.png" alt="" srcset="" />
                            <p className='text-lg font-semibold'>Sign In with Google</p>
                        </div>
                        <div className='md:w-[256px] px-2 my-3 md:my-0 w-full flex items-center gap-2 h-[52px] border border-gray-400 mx-w-xl'>
                            <img src="image/Apple logo.png" alt="" srcset="" />
                            <p className='text-lg font-semibold'>Sign In with Apple</p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 w-full items-center max-w-xl mx-auto space-y-3 md:space-y-0 pt-2'>
                        <hr className='border border-black'></hr>
                        <span className='text-lg'>or with e-mail</span>
                        <hr className='border border-black' />
                    </div>
                    <div className='py-5'>
                        <div className='py-8 w-full max-w-xl mx-auto text-left md:text-center space-y-4'>
                            <Email />
                            <br />
                            <Password />
                            <div className='py-4 md:flex justify-between w-full max-w-xl '>
                                <div className="form-control  text-white">
                                    <div className='inline-flex gap-2'>
                                        <input type="checkbox" className="checkbox border border-blue-700 rounded-full" />
                                        <span className="text-lg text-black">Remember me</span>
                                    </div>
                                </div>
                                <Link to="/forgotpass">
                                    <p className='text-lg text-left mt-2 md:mt-0 text-blue-700'>Forgot Password? </p>
                                </Link>
                            </div>
                            <div className='w-full text-left md:text-center space-y-3'>
                                <input type="button" value="Sign In" className="input bg-[#1B434D] text-white text-lg font-semibold  h-[65px]  input-bordered w-full max-w-lg" />
                            </div>
                            <p className='pt-8 text-lg'>Don’t have a account? <span className=' font-semibold'>SignUp</span></p>
                        </div>
                    </div>
                </div>
                {/* lg:w-[604px]   */}
                <div className=' bg-[#1B434D] w-full  px-4 order-first lg:order-last h-full'>
                    <img src="image/Multipurc (700 x 700 px) 1.png" className='' alt="" srcset="" />
                    <div className=' relative md:left-20 left-6'>
                        <img src="image/particles.png" className='' alt="" srcset="" />
                    </div>
                    <div className='mx-auto'>
                        <img src="../../../public/image/Active (3) 1.png" className='mx-auto' alt="" srcset="" />
                    </div>
                    <div className=' text-white space-y-5 py-8'>
                        <h2 className='text-[40px] font-bold '>Get Better With Money</h2>
                        <p className='text-[24px]'>
                            Overpay help you set saving goals, earn cash back offers. Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits
                        </p>
                        <BarLoader color="#fff" width={150} className='my-3 mx-auto transition duration-0' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;