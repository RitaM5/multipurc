import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="z-10 w-full bg-white font-poppins">
        <nav className="bg-white ">
          <div className="flex font-poppins items-center font-medium justify-around h-20 ">
            <div className="z-50 p-6 md:w-auto w-full flex justify-between">
              <div className="text-5xl relative right-8 md:mt-0 mt-  md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>
            <ul className="md:flex w-full hidden uppercase items-center gap-8 lg:gap-2 font-semibold ">
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/signin" className="py-7 px-3 inline-block">
                  SignIn
                </Link>
              </li>
              <li>
                <Link to="/forgotpass" className="py-7 px-3 inline-block">
                  Forgort Password
                </Link>
              </li>
              <li>
                <Link to="/varificationcode" className="py-7 px-3 inline-block">
                  Varification Code
                </Link>
              </li>
              <li>
                <Link to="/newpass" className="py-7 px-3 inline-block">
                  New Password
                </Link>
              </li>
              <li>
                <Link to="/countryselect" className="py-7 px-3 inline-block">
                  Country Select
                </Link>
              </li>
              <li>
                <Link to="/varificationphone" className="py-7 px-3 inline-block">
                  Varification Phone
                </Link>
              </li>
              <li>
                <Link to="/searchbusiness" className="py-7 px-3 inline-block">
                   Search Business
                </Link>
              </li>
            </ul>
  
            {/* Mobile nav */}
            <ul
              className={`
          md:hidden bg-teal-800 text-white fixed w-full h-[400px] z-10 py-12 top-24 overflow-y-auto bottom-0  pl-4
          duration-500 ${open ? "left-0" : "left-[-100%] font-semibold text-lg "}
          `}
            >
              <li>
                <Link to="/" className="py-4 px-3 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/signin" className="py-3 px-3 inline-block">
                  SignIn
                </Link>
              </li>
              <li>
                <Link to="/forgotpass" className="py-3 px-3 inline-block">
                  Forgort Password
                </Link>
              </li>
              <li>
                <Link to="/varificationcode" className="py-3 px-3 inline-block">
                  Varification Code
                </Link>
              </li>
              <li>
                <Link to="/newpass" className="py-3 px-3 inline-block">
                  New Password
                </Link>
              </li>
              <li>
                <Link to="/countryselect" className="py-3 px-3 inline-block">
                  Country Select
                </Link>
              </li>
              <li>
                <Link to="/varificationphone" className="py-3 px-3 inline-block">
                  Varification Phone
                </Link>
              </li>
              <li>
                <Link to="/searchbusiness" className="py-3 px-3 inline-block">
                   Search Business
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
};

export default Navber;