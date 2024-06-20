import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound";



const HomeRouter = () => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleItemClick = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className=" bg-blue-600 h-16 border-b-2 border-slate-500">
        <div className="flex justify-between w-screen items-center">
          <h1 className="text-white text-2xl font-bold ml-3">
            FMClient
          </h1>
          <div className="w-1/2"></div>
          <div className="md:flex hidden">
            <ul className="flex text-lg">
              <li className="mt-2 p-2 text-white hover:font-light font-bold">
                <Link to="/" onClick={handleItemClick}>
                 Sign Up
                </Link>
              </li>
              <li className="p-2 mt-2 text-white hover:font-light font-bold">
                <Link to="login" onClick={handleItemClick}>
                  Login
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
            <button
              className="text-white mt-4 relative md:hidden mr-2"
              onClick={handleDropdown}
            >
              <div className="w-8 h-1 bg-white m-1"></div>
              <div className="w-7 h-1 bg-white ml-2"></div>
        
            </button>
            {dropdown && (
              <div className="absolute mt-4 rounded-md shadow-lg bg-blue-600 right-0 border-2 border-yellow-300">
                <ul className="flex flex-col text-lg mr-4">
                  <li className="mt-2 p-2 text-white font-light hover:font-bold text-center ">
                    <Link to="/" onClick={handleItemClick}>
                      Sign Up
                    </Link>
                  </li>
                  <li className="p-2 mt-2 text-white hover:font-light font-bold text-center">
                    <Link to="login" onClick={handleItemClick}>
                      Login
                    </Link>
                  </li>
                 
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default HomeRouter;
