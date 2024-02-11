import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CountrySelect = () => {
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                setCountryState({
                    ...countryState,
                    loading: true,
                });

                const dataUrl = `https://restcountries.com/v3.1/all`
                const response = await axios.get(dataUrl);
                setCountryState({
                    ...countryState,
                    countries: response.data,
                    loading: false
                });
            } catch (error) {
                setCountryState({
                    ...countryState,
                    loading: false,
                    errorMessage: 'sorry'
                })
            }
        }
        fetchData();
    }, []);
    const { loading, errorMessage, countries } = countryState;
    const [selectedCountry, setSelectedCountry] = useState();
    //search selected country
    const searchSelectCountry = countries.find(data => {
        if (data.name.common === selectedCountry) {
            return true
        }
        return false;
    })
    return (
        <div className='md:w-[700px] h-full md:h-[680px] max-w-xl w-full bg-[#1B434D] rounded-xl py-2 px-3 mx-auto  my-12 lg:my-36'>
            <img src="image/Multipurc (700 x 700 px) 1.png" className='' alt="" srcset="" />
            <div className=' relative md:left-[380px] left-6 bottom-24'>
                <img src="image/particles.png" className='' alt="" srcset="" />
            </div>
            <div className='text-white text-center space-y-1 relative bottom-20'>
                <h2 className='text-[40px] font-bold'>Choice Your Country</h2>
                <p className='text-[24px]'>Send, spend and save smarter</p>
            </div>
            <div className='relative bottom-12  justify-center space-y-5 w-full max-w-xl'>
                <div className='w-full max-w-xl'>
                    <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className='w-full h-[65px] pl-6 text-lg rounded-lg'>
                        <option>select country</option>
                        {
                            countries.map(item => {
                                return (
                                    <option value={item.name.common}>
                                        {item.name.common}
                                    </option>
                                );
                            })
                        }
                    </select>
                </div>
                <div className='w-full max-w-xl'>
                    {
                        searchSelectCountry && (
                            <div className='md:flex gap-5 w-full max-w-xl grid grid-cols-1'>
                                <div className='flex items-end border-b-4 pb-2 w-full'>
                                    <img className='w-12 h-6 mx-auto md:mx-0' src={searchSelectCountry && searchSelectCountry.flags.png} alt="" srcset="" />
                                </div>
                                <div className='w-full'>
                                <p className='h-14 w-full text-lg text-white flex items-end border-b-4 justify-center md:justify-start pb-2 '>
                                        {
                                            searchSelectCountry && searchSelectCountry.idd.root
                                        }
                                        {
                                            searchSelectCountry && searchSelectCountry.idd.suffixes
                                        }
                                    </p>
                                </div>
                                <div className='w-full max-w-full'>
                                    <input type="tel" placeholder='Phone'
                                        className='w-full pl-6 h-14 text-xl border-b-4 max-w-xl'/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className=' relative bottom-8'>
                <Link to="">
                    <p className='md:text-right text-center py-4'><button className='w-[202px] h-[63px] bg-white text-lg font-semibold'>Next</button></p>
                </Link>

            </div>
        </div>
    );
};

export default CountrySelect;