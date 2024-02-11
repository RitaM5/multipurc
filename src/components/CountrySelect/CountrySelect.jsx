import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
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
    const countryOptions = countries.map((item) => ({
        label: (
            <div className="flex items-center w-full h-[65px] max-w-xl">
                <img className="w-12 mr-2" src={item.flags.png} alt={item.name.common} />
                <span>{item.name.common}</span>
            </div>
        ),
        value: item.name.common,
    }));
    return (
        <div className=' font-poppins md:w-[700px] h-full md:h-[680px] max-w-xl w-full bg-[#1B434D] rounded-xl py-2 px-3 mx-auto  my-12 lg:my-36'>
            <img src="image/Multipurc (700 x 700 px) 1.png" className='' alt="" srcset="" />
            <div className=' relative md:left-[380px] left-6 bottom-24'>
                <img src="image/particles.png" className='' alt="" srcset="" />
            </div>
            <div className='text-white text-center space-y-1 relative bottom-20'>
                <h2 className='text-[40px] font-bold'>Choice Your Country</h2>
                <p className='text-[24px]'>Send, spend and save smarter</p>
            </div>
            <div className='relative bottom-12 space-y-5 w-full max-w-xl'>
                <div className='w-full max-w-xl '>
                        <Select
                            className='h-[65px] w-full max-w-xl text-lg round-lg'
                            value={countryOptions.find((option) => option.value === selectedCountry)}
                            classNamePrefix='react-select'
                            options={countryOptions}
                            onChange={(selectedOption) => setSelectedCountry(selectedOption.value)}
                        />
                </div>
                <div className='w-full max-w-xl'>
                    {
                        searchSelectCountry && (
                            <div className='md:flex gap-5 w-full max-w-xl grid grid-cols-1'>
                                <div className='w-full flex justify-evenly items-center max-w-xl border-b-4'>
                                    <div className='inline-flex items-center gap-1'>
                                        <p className='h-14 w-full text-lg text-white flex items-end  justify-center md:justify-start pb-2 '>
                                            {
                                                searchSelectCountry && searchSelectCountry.idd.root
                                            }
                                            {
                                                searchSelectCountry && searchSelectCountry.idd.suffixes
                                            }
                                        </p>
                                        <span className='text-5xl text-white'>|</span>
                                    </div>
                                    <div className='w-full max-w-full'>
                                        <input type="tel" placeholder='Phone'
                                            className='w-full h-14 text-lg pl-3 mt-1 md:mt-3 text-white border-none bg-transparent focus:outline-none' />
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
            <div className=' relative bottom-8'>
                <Link to="">
                    <p className='md:text-right text-center py-4'><button className='md:w-[202px] w-full h-[63px] bg-white text-lg font-semibold rounded-lg'>Next</button></p>
                </Link>

            </div>
        </div>
    );
};

export default CountrySelect;