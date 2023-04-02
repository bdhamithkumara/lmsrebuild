import React from "react";
import { Unilogo } from "../images";
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {

  const navigate = useNavigate();

  const gotoAdmindashboard = () => {
    navigate("/ADashboard");
  }


  return (
    <div className="container mt-5">
      <div className="mx-auto justify-center">
        <div>
          <img src={Unilogo} alt="unilogo" className="w-auto h-auto mx-auto " />
        </div>
        <div className="flex mx-auto">
          <div className="mx-auto">

            <div className="font-Inter text-[35px] text-[#3B1234] text-center mb-8 font-medium mt-8">
              Admin Login
            </div>
            <div className="">
              <input
                type="text"
                name=""
                id=""
                className="outline-none bg-[#F7DEF2] h-[55px] w-[600px] rounded-2xl text-[25px] text-center text-[#3B1234]"
                placeholder="Enter Your User Name"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                name=""
                id=""
                className="outline-none bg-[#F7DEF2] h-[55px] w-[600px] rounded-2xl text-[25px] text-center text-[#3B1234]"
                placeholder="Enter the Password"
              />
            </div>
            <div className="w-full mt-2">
              <div className="flex">
                <div className="">
                  <input type="checkbox" name="" id="" /> Remember username
                </div>
                <div className="ml-[290px]">Forgotten Password?</div>
              </div>
            </div>
            <div className="mt-[60px] flex mx-auto">
              <div className="mx-auto">
                <button class="bg-[#3B1234] hover:bg-[#F1B81F] text-white font-bold py-2 px-4 w-[250px] h-[55px] rounded-3xl text-2xl"
                  onClick={gotoAdmindashboard}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
